import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const FlameRight = ({ allEnabledElements }) => {
  return allEnabledElements.includes("FlameRight") ? (
    <g id="FlameRight">
      <path d="M47.3710747,20.1393433c0,0-17.8424854,11.1577415-16.9841976,27.7870674 c0.214571,6.4371567-0.6437168,18.5604744,17.1657543,18.6677589 C80.2815628,59.4931793,47.3710747,20.1393433,47.3710747,20.1393433z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(FlameRight, {
  character: "WomanMixed"
})
