import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const FlameRight = ({ allEnabledElements }) => {
  return allEnabledElements.includes("FlameRight") ? (
    <g id="FlameRight">
      <path d="M41.5828133,17.3214989c0,0-21.0193806,13.1444035-20.0082722,32.7346153 c0.2527752,7.5833168-0.7583332,21.8652115,20.2221546,21.9916 C80.3530884,63.6823769,41.5828133,17.3214989,41.5828133,17.3214989z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(FlameRight, {
  character: "ManDragonborn"
})
