import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const FlameLeft = ({ allEnabledElements }) => {
  return allEnabledElements.includes("FlameLeft") ? (
    <g id="FlameLeft">
      <path d="M90.3123856,20.1393433c0,0,17.8424835,11.1577415,16.9841995,27.7870674 c-0.2145767,6.4371567,0.6437149,18.5604744-17.1657562,18.6677589 C57.4018974,59.4931793,90.3123856,20.1393433,90.3123856,20.1393433z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(FlameLeft, {
  character: "WomanMixed"
})
