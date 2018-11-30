const ObjTree = require('objtree')
const xotree = new ObjTree()
const fs = require('fs')
const prettier = require("prettier");
const svg2jsx = require('@balajmarius/svg2jsx')

const toConstantCase = (s) =>
	s.replace(/([A-Z])/g, ($1) => "_"+$1).toUpperCase().replace("_", "")

const toPascal = (s) =>
  s.replace(/\w+/g, function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});


/**
 * 
 * @param {*} componentName
 * @param {*} svg
 */
const genTemplate = (componentName, svg) => (`
import React from 'react'

const ${componentName} = ({ color = [] }) => {
  return (
    ${svg}
  )
}

export default ${componentName}
`)

/**
 * 
 *
 */
const indexTemplate = (componentNames, category) => (`
import React from 'react'
import connectToBuilder from '../../builderConnector'
import { uiSchemaService } from '../../uiSchema'

${componentNames.map(component =>
  `import ${component} from './${component}'`
).join('\n')}

const CATEGORY = "${category}"

export const IDS = {
  ${componentNames.map(component =>
    `${toConstantCase(component)}: '${component}'`
  ).join(',')}
}

export const components = {
  ${componentNames.map(component =>
    `[IDS.${toConstantCase(component)}]: ${component}`
  ).join(',')}
}

export const Group = () => <g id="${category}">{Object.keys(components).map(key => components[key])}</g>

uiSchemaService.register(CATEGORY, [
  ${componentNames.map(component =>
    `{
      id: [IDS.${toConstantCase(component)}],
      name: '${component.replace(/([A-Z])/g, ' $1').trim()}',
      layerId: 0,
      colors: 1,
      component: components[IDS.${toConstantCase(component)}]
    }`
  ).join(',')}
])

export default connectToBuilder(components, CATEGORY)

`)

const mainIndex = (categories, name) => (`
import React from 'react'

${categories.map(category =>
    `import ${toPascal(category)} from './${category}'`
  ).join('\n')
}

class ${name} extends React.Component {
  constructor(props) {
    super(props)

    this.svgRef = React.createRef();
  }

  render() {
    return (
      <svg
        version="1.1"
        ref={this.svgRef}
        x="0px" y="0px"
        viewBox="0 0 114 152.8"
      >
      ${categories.map(category =>
          `<${toPascal(category)} />`
        ).join('\n')
      }
      </svg>
    )
  }
}

export default ${name}
`)

const SVG2Json = (xmlData) => xotree.parseXML(xmlData)

const JSON2SVGParts = (jsonSVG) => {
  return jsonSVG["svg"]["g"].map(g => {
    return formatGroupComponents(g)
  })
}

const formatGroupComponents = (g) => {
  if(!Array.isArray(g["g"])) {
    g["g"] = [g["g"]]
  }
  const folderName = g["-id"]
  const output = { key: folderName, files: [] }

  g["g"].forEach(ig => {
    let fileName = ig["-id"] || ""
    const fileNameClean = fileName.replace(/_/g, "")

    if (fileNameClean.length > 0) {
      const componentName = fileNameClean[0].toUpperCase() + fileNameClean.substring(1)
      const xml = xotree.writeXML( ig )
      const cleanSVG = xml.replace(`<?xml version="1.0" encoding="UTF-8" ?>`, "")
      output.files.push({ componentName, svg: cleanSVG })
    }
  })

  return output
}

const cleanSvg = f => svg2jsx(`<g id="${f.componentName}">${f.svg}</g>`)

const buildFile = (dir, fileData) => {
  cleanSvg(fileData).then(svg => {
    const data = genTemplate(fileData.componentName, svg)

    const pretty = prettier.format(data, { semi: false, parser: "babylon" })

    fs.writeFile(`${dir}/${fileData.componentName}.js`, pretty, function(err, data) {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });
  })
}

const buildIndexFile = (dir, fileData) => {
  const data = indexTemplate(fileData.files.map(fd => fd.componentName), fileData.key)
  const pretty = prettier.format(data, { semi: false, parser: "babylon" })

  fs.writeFile(`${dir}/index.js`, pretty, function(err, data) {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
}

const buildMainIndexFile = (categories, name, ) => {
  const data = mainIndex(categories, name)
  const pretty = prettier.format(data, { semi: false, parser: "babylon" })

  fs.writeFile(`output/index.js`, pretty, function(err, data) {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
}

fs.readFile('pawn.svg', function(err, buf) {
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

  buildMainIndexFile(svgParts.map(f => f.key), "ManDwarf")
})

