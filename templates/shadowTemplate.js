const toConstantCase = (s) =>
	s.replace(/([A-Z])/g, ($1) => "_"+$1).toUpperCase().replace("_", "")

const toPascal = (s) =>
  s.replace(/\w+/g, function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});

/**
 *
 * @param {*} componentName
 * @param {*} svg
 */
const shadowComponentTemplate = (componentName, svg, opts) => (`
import React from 'react'
import { connectToAllEnabledElements } from '../../builderConnector'


const ${componentName} = ({ allEnabledElements }) => {
  return (
    allEnabledElements.includes('${componentName}') ? ${svg} : null
  )
}

export default connectToAllEnabledElements(${componentName}, { character: '${opts.character}' })
`)

module.exports = shadowComponentTemplate