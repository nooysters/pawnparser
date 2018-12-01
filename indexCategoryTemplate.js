const toConstantCase = (s) =>
	s.replace(/([A-Z])/g, ($1) => "_"+$1).toUpperCase().replace("_", "")

const toPascal = (s) =>
  s.replace(/\w+/g, function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});

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

export const Group = ({ props }) => <g id="${category}">
  {
    Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key}/>
    })
  }
</g>

uiSchemaService.register(CATEGORY, [
  ${componentNames.map(component =>
    `{
      id: IDS.${toConstantCase(component)},
      name: '${component.replace(/([A-Z])/g, ' $1').trim()}',
      layerId: 0,
      colors: 1,
      component: components[IDS.${toConstantCase(component)}]
    }`
  ).join(',')}
])

export default connectToBuilder(components, CATEGORY)

`)

module.exports = indexTemplate