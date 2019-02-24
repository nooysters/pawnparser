import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const BlueFlameLeft = ({ allEnabledElements }) => {
  return allEnabledElements.includes("BlueFlameLeft") ? (
    <g id="BlueFlameLeft">
      <path d="M92.7056885,2.1152985c0,0,15.4491806,29.1817856,14.5908966,45.8111115 c-0.2145767,6.4371567,0.6437149,18.5604744-17.1657562,18.6677589 C57.4018974,59.4931793,92.7056885,2.1152985,92.7056885,2.1152985z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(BlueFlameLeft, {
  character: "WomanMixed"
})
