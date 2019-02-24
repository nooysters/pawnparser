// const toConstantCase = (s) =>
// 	s.replace(/([A-Z])/g, ($1) => "_"+$1).toUpperCase().replace("_", "")

// const toPascal = (s) =>
//   s.replace(/\w+/g, function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});

/**
 *
 * @param {*} componentName
 * @param {*} svg
 */
const replaceColors = (svg, options) => {
  if (!options.colors) return svg

  return options.colors.reduce((svgOut, color, index) => {
    const re = new RegExp(`\"${color}\"`,"gi");
    return svgOut.replace(re, `{colors[${index}]}`)
  }, svg)
}

const color = (options) => options.colors ? options.colors.map(c => `'${c}'`).join(', ') : ''

const svgComponentTemplate = (componentName, svg, options={}) => (`
import React from 'react'

const ${componentName} = ({ colors = [${color(options)}] }) => {
  return (
    ${replaceColors(svg, options)}
  )
}

export default ${componentName}
`)

module.exports = svgComponentTemplate

