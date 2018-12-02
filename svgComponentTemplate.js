// const toConstantCase = (s) =>
// 	s.replace(/([A-Z])/g, ($1) => "_"+$1).toUpperCase().replace("_", "")

// const toPascal = (s) =>
//   s.replace(/\w+/g, function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});

/**
 *
 * @param {*} componentName
 * @param {*} svg
 */
const svgComponentTemplate = (componentName, svg) => (`
import React from 'react'

const ${componentName} = ({ color = [] }) => {
  return (
    ${svg}
  )
}

export default ${componentName}
`)

module.exports = svgComponentTemplate

