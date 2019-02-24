import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const OnyxDaggerR = ({ allEnabledElements }) => {
  return allEnabledElements.includes("OnyxDaggerR") ? (
    <g id="OnyxDaggerR">
      <path d="M51.6040459,61.3660965c-0.4788971-6.3472481-6.0424042-22.8604851-8.7928276-26.0866432 c-2.7504272-3.2261581-5.0787773-3.0704193-5.0787773-3.0704193s-1.8734703,2.4206505-1.9865837,5.6252327 c-0.2005768,5.6822701,5.20327,22.9349174,7.8602028,26.8282623 C46.5998497,69.0494843,52.082943,67.7133408,51.6040459,61.3660965z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(OnyxDaggerR, {
  character: "WomanMixed"
})
