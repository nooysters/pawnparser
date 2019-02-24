import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const BlueFlameRight = ({ allEnabledElements }) => {
  return allEnabledElements.includes("BlueFlameRight") ? (
    <g id="BlueFlameRight">
      <path d="M44.5012741,2.1152985c0,0-15.4491806,29.1817856-14.5908928,45.8111115 c0.214571,6.4371567-0.6437168,18.5604744,17.1657562,18.6677589C79.805069,59.4931793,44.5012741,2.1152985,44.5012741,2.1152985 z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(BlueFlameRight, {
  character: "WomanMixed"
})
