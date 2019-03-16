import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const BlueFlameLeft = ({ allEnabledElements }) => {
  return allEnabledElements.includes("BlueFlameLeft") ? (
    <g id="BlueFlameLeft">
      <path d="M101.7056885,16.1152992c0,0,15.4491806,29.1817856,14.5908966,45.8111076 c-0.2145767,6.4371643,0.6437149,18.5604782-17.1657562,18.6677628 C66.4019012,73.4931793,101.7056885,16.1152992,101.7056885,16.1152992z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(BlueFlameLeft, {
  character: "ManDragonborn"
})
