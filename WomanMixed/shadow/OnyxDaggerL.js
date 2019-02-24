import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const OnyxDaggerL = ({ allEnabledElements }) => {
  return allEnabledElements.includes("OnyxDaggerL") ? (
    <g id="OnyxDaggerL">
      <path d="M85.335968,61.3660965c0.4788971-6.3472481,6.0424042-22.8604851,8.7928238-26.0866432 c2.7504272-3.2261581,5.0787811-3.0704193,5.0787811-3.0704193s1.8734665,2.4206505,1.9865875,5.6252327 c0.2005692,5.6822701-5.2032776,22.9349174-7.8602066,26.8282623 C90.3401642,69.0494843,84.8570709,67.7133408,85.335968,61.3660965z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(OnyxDaggerL, {
  character: "WomanMixed"
})
