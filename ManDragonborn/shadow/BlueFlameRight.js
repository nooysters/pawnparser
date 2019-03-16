import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const BlueFlameRight = ({ allEnabledElements }) => {
  return allEnabledElements.includes("BlueFlameRight") ? (
    <g id="BlueFlameRight">
      <path d="M35.5012741,6.1152992c0,0-15.4491806,29.1817856-14.5908928,45.8111076 c0.214571,6.4371643-0.6437168,18.5604782,17.1657562,18.6677628C70.805069,63.4931793,35.5012741,6.1152992,35.5012741,6.1152992 z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(BlueFlameRight, {
  character: "ManDragonborn"
})
