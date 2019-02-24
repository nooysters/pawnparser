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
    const re = new RegExp(`\"${color}\"`,"gi")
    return svgOut.replace(re, `{colors[${index}]}`)
  }, svg)
}


const color = (options) => options.colors ? options.colors.map(c => `'${c}'`).join(', ') : ''

const svgWithSkinColorTemplate = (componentName, svg, opts={}) => {
  const skinColorRegex = new RegExp(`\"${opts.skinColor}\"`, "gi")
  return (

`
import React from 'react'
import { withSkinColor } from "../../builderConnector"

const ${componentName} = ({ skinColor, colors = [${color(opts)}] }) => {

  return (
    ${replaceColors(svg.replace(skinColorRegex, "{ skinColor }"), opts)}
  )
}

export default withSkinColor(${componentName}, {character: '${opts.character}' })
`
)
}

module.exports = svgWithSkinColorTemplate


