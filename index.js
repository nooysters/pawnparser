const ObjTree = require('objtree')
const xotree = new ObjTree()
const fs = require('fs')
const prettier = require('prettier');
const svg2jsx = require('@balajmarius/svg2jsx')
const indexTemplate = require('./indexCategoryTemplate')
const mainIndex = require('./mainIndexTemplate')
const svgComponentTemplate = require('./svgComponentTemplate')
const shadowTemplate = require('./shadowTemplate')

const DELIMITER = `_x24_`

const SVG2Json = (xmlData) => xotree.parseXML(xmlData)

const JSON2SVGParts = (jsonSVG) => {
  return jsonSVG['svg']['g'].map(g => {
    return formatGroupComponents(g)
  })
}

const createSvgFromJson = (ig) => {
  if(!ig) return console.log(ig)

  const opts = ig['-id'].split(DELIMITER)
  let fileName = opts.pop()
  const options = opts

  const fileNameClean = fileName.replace(/_/g, '')

  if (fileNameClean.length > 0) {
    const componentName = fileNameClean[0].toUpperCase() + fileNameClean.substring(1)
    const xml = xotree.writeXML( ig )
    const cleanSVG = xml.replace(`<?xml version="1.0" encoding="UTF-8" ?>`, '')
   return { componentName, svg: cleanSVG, options }
  }
}

const formatGroupComponents = (g) => {
  const folderName = g['-id']
  const output = { key: folderName, files: [] }

  if(g['g'] === undefined && !g.hasOwnProperty('path')) {
    files = createSvgFromJson(g)
    if (!files) return
    output.files.push(files)
    return output
  }

  if(!Array.isArray(g['g'])) {
    g['g'] = [g['g']]
  }

  if(Array.isArray(g['path'])) {
    g['g'] = [ ...g['g'], ...g['path'].map(p => ({
      '-id': p['-id'] || '',
      g: { path: p }
    })) ]
  }

  g['g'].forEach(ig => {
    files = createSvgFromJson(ig)
    if(!files) return
    output.files.push(files)
  })

  return output
}

const cleanSvg = f => svg2jsx(`<g id='${f.componentName}'>${f.svg}</g>`)

const saveFile = (filePath, data) => {
  fs.writeFile(filePath, data, function(err, data) {
    if (err) console.log(err)
    console.log('Successfully Written to File.')
  });
}

const buildWithTemplate = (fc, svg, opts = {}) => {
  if(opts.includes('S')) {
    return shadowTemplate(fc, svg)
  }
  return svgComponentTemplate(fc, svg)
}

const buildFile = (dir, fileData) => {
  cleanSvg(fileData).then(svg => {
    const data = buildWithTemplate(fileData.componentName, svg, fileData.options)

    const pretty = prettier.format(data, { semi: false, parser: 'babylon' })

    saveFile(`${dir}/${fileData.componentName}.js`, pretty)
  })
}

const buildIndexFile = (dir, fileData) => {
  const data = indexTemplate(fileData.files.map(fd => fd.componentName), fileData.key)
  const pretty = prettier.format(data, { semi: false, parser: 'babylon' })

  saveFile(`${dir}/index.js`, pretty)
}

const buildMainIndexFile = (categories, name, ) => {
  const data = mainIndex(categories, name)
  const pretty = prettier.format(data, { semi: false, parser: 'babylon' })

  saveFile(`output/index.js`, pretty)
}

fs.readFile('pawn.svg', function(err, buf) {
  const json = SVG2Json(buf.toString())
  // console.log(json['svg']['g'])
  const svgParts = JSON2SVGParts(json).filter(a => a)
  const folderNames = []

  svgParts.forEach(fileData => {
    if(!fileData) return
    const dir = `output/${fileData.key}`
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }
    folderNames.push(fileData.key)
    fileData.files.forEach(file => buildFile(dir, file))
    buildIndexFile(dir, fileData)
  })

  buildMainIndexFile(svgParts.map(f => f.key), 'ManDwarf')
})

