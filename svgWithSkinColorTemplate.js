// const toConstantCase = (s) =>
// 	s.replace(/([A-Z])/g, ($1) => "_"+$1).toUpperCase().replace("_", "")

// const toPascal = (s) =>
//   s.replace(/\w+/g, function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});

/**
 *
 * @param {*} componentName
 * @param {*} svg
 */
const svgWithSkinColorTemplate = (componentName, svg, options={}) => (`
import React from 'react'
import { withSkinColor } from "../../builderConnector"

const ${componentName} = ({ skinColor, color = [] }) => {
  return (
    ${svg.replace(/\"#E8B180\"/g, "{ skinColor }")}
  )
}

export default withSkinColor(${componentName})
`)

module.exports = svgWithSkinColorTemplate

