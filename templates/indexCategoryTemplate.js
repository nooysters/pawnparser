const toConstantCase = (s) =>
	s.replace(/([A-Z])/g, ($1) => "_"+$1).toUpperCase().replace("_", "")

const toPascal = (s) =>
  s.replace(/\w+/g, function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});

const color = (options) => options.colors ? options.colors.map(c => `'${c}'`).join(', ') : ''

/**
 *
 *
 */
const indexTemplate = (components, category, options) => (`
import React from 'react'
import connectToBuilder from '../../builderConnector'
import { uiSchemaService } from '../../uiSchema'

${components.map(component =>
  `import ${component.componentName} from './${component.componentName}'`
).join('\n')}

const CATEGORY = '${category}'
const CHARACTER = '${options.character}'
export const IDS = {
  ${components.map(component =>
    `${toConstantCase(component.componentName)}: '${component.componentName}'`
  ).join(',')}
}

export const components = {
  ${components.map(component =>
    `[IDS.${toConstantCase(component.componentName)}]: ${component.componentName}`
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

uiSchemaService.register(CHARACTER, CATEGORY, [
  ${components.map(component =>
    `{
      id: IDS.${toConstantCase(component.componentName)},
      name: '${component.componentName.replace(/([A-Z])/g, ' $1').trim()}',
      defaultColors: [${color(component.options)}],
      colorable: ${component.options.colorable},
      component: components[IDS.${toConstantCase(component.componentName)}],
      inUI: ${!options.groupEnabled},
      enabled: ${component.options.defaultEnabled},
      subGroupId: ${component.options.subGroupId}
    }`
  ).join(',')}
])

export default connectToBuilder(components, { character: CHARACTER, category: CATEGORY })

`)

module.exports = indexTemplate