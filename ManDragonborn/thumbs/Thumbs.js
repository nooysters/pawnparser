import React from "react"
import { withSkinColor } from "../../builderConnector"

const Thumbs = ({ skinColor, colors = ["#DEA043", "#21366C"] }) => {
  return (
    <g id="Thumbs">
      <path
        fill={skinColor}
        d="M38.9171524,55.2505188c0,0-2.0541382-5.7702675-5.8554497-1.1602669 s-0.8959351,4.0533218-0.8959351,4.0533218L38.9171524,55.2505188z"
      />
      <path
        opacity="0.3"
        fill={colors[1]}
        d="M38.9171524,55.2505188c0,0-2.0541382-5.7702675-5.8554497-1.1602669 s-0.8959351,4.0533218-0.8959351,4.0533218L38.9171524,55.2505188z"
      />
      <path
        fill={skinColor}
        d="M99.3908691,55.2505188c0,0,2.0541458-5.7702675,5.8554535-1.1602669 s0.8959351,4.0533218,0.8959351,4.0533218L99.3908691,55.2505188z"
      />
      <path
        opacity="0.3"
        fill={colors[1]}
        d="M99.3908691,55.2505188c0,0,2.0541458-5.7702675,5.8554535-1.1602669 s0.8959351,4.0533218,0.8959351,4.0533218L99.3908691,55.2505188z"
      />
    </g>
  )
}

export default withSkinColor(Thumbs, { character: "ManDragonborn" })
