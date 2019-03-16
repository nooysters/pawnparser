import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const FlameLeft = ({ allEnabledElements }) => {
  return allEnabledElements.includes("FlameLeft") ? (
    <g id="FlameLeft">
      <path d="M98.1398392,17.7041893c0,0,20.4812546,12.8078842,19.4960327,31.896553 c-0.2463074,7.3891716,0.7389145,21.3054314-19.7044373,21.4285851 C60.3621483,62.8781509,98.1398392,17.7041893,98.1398392,17.7041893z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(FlameLeft, {
  character: "ManDragonborn"
})
