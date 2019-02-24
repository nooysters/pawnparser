const ObjTree = require('objtree')
const xotree = new ObjTree()
const fs = require('fs')
const prettier = require('prettier');
const svg2jsx = require('@balajmarius/svg2jsx')
const indexTemplate = require('./templates/indexCategoryTemplate')
const mainIndex = require('./templates/mainIndexTemplate')
const svgComponentTemplate = require('./templates/svgComponentTemplate')
const svgWithSkinColorTemplate = require('./templates/svgWithSkinColorTemplate')
const shadowTemplate = require('./templates/shadowTemplate')

const IN_FILE = process.env.FILE
const CHARACTER = process.env.CHARACTER
const DELIMITER = `_x24_`
const SHADE_COLOR = process.env.SHADE_COLOR
const SKIN_COLOR = process.env.SKIN_COLOR

const VB_REGEX = /viewBox=\"{1}[\d\s\.]*\"{1}\s{1}/g

const SVG2Json = (xmlData) => xotree.parseXML(xmlData)

const parseOptions = (id_string) => {
  console.log(id_string)
  const options = id_string && id_string.split(DELIMITER)
  const fileName = options.pop().replace(/_|\d/g, '')

  const subGroupId = options.reduce((level, o) => {
    return o[0] === "L"
      ?  o[1]
      : level
  }, 0)

  const opts = {
    fileName: fileName,
    componentName: fileName[0].toUpperCase() + fileName.substring(1),
    groupEnabled: options.includes('G'),
    hasSkinColor: options.includes('K'),
    isShadow: options.includes('S'),
    defaultEnabled: options.includes('D'),
    colorable: options.includes('C'),
    colors: [],
    skinColor: SKIN_COLOR,
    subGroupId
  }

  return opts
}

const JSON2SVGParts = (jsonSVG) => {
  return jsonSVG['svg']['g'].map(g => {
    return formatGroupComponents(g)
  })
}

const createSvgFromJson = (ig) => {
  if(!ig) return console.log(ig)

  const options = parseOptions(ig['-id'])

  const xml = xotree.writeXML(ig)
  options.colors = [... new Set(xml.match(/(#.{6})/g))].filter(c => c !== SHADE_COLOR)

  const cleanSVG = xml.replace(`<?xml version="1.0" encoding="UTF-8" ?>`, '')
  return { componentName: options.componentName, svg: cleanSVG, options }
}

const formatGroupComponents = (g) => {
  const options = parseOptions(g['-id'])
  const output = { key: options.fileName, files: [], options }

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
  const pretty = prettier.format(data, { semi: false, parser: 'babylon' })

  fs.writeFile(filePath, pretty, function(err, _data) {
    if (err) console.log(err)
    //console.log('Successfully Written to File.')
  });
}

const buildWithTemplate = (fc, svg, opts = {}) => {
  if(opts.hasSkinColor) {
    return svgWithSkinColorTemplate(fc, svg, {...opts, character: CHARACTER })
  }
  if(opts.isShadow) {
    return shadowTemplate(fc, svg, { ...opts, character: CHARACTER })
  }
  return svgComponentTemplate(fc, svg, { ...opts, character: CHARACTER })
}

const buildFile = (dir, fileData) => {
  cleanSvg(fileData).then(svg => {
    const data = buildWithTemplate(fileData.componentName, svg, fileData.options)
    saveFile(`${dir}/${fileData.componentName}.js`, data)
  })
}

const buildIndexFile = (dir, fileData) => {
  const data = indexTemplate(fileData.files, fileData.key, { ...fileData.options, character: CHARACTER })
  saveFile(`${dir}/index.js`, data)
}

const buildMainIndexFile = (categories, name, opts = {}) => {
  const data = mainIndex(categories, name, opts)
  saveFile(`output/index.js`, data)
}

if (!fs.existsSync('output')){
  fs.mkdirSync('output');
}

fs.readFile(IN_FILE, function(err, buf) {
  const viewBox = buf.toString().match(VB_REGEX)[0]
  const json = SVG2Json(buf.toString())
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

  buildMainIndexFile(svgParts.map(f => f), CHARACTER, { viewBox })
})

