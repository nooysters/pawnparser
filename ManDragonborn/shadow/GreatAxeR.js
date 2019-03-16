import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const GreatAxeR = ({ allEnabledElements }) => {
  return allEnabledElements.includes("GreatAxeR") ? (
    <g id="GreatAxeR">
      <path d="M35.564045,121.7707825c-7.9899673,0-7.2849712-7.7549667-7.2849712-7.7549667 s-0.7049961-46.8823242-1.2924938-72.2622223c-14.8049431,0-31.3723793-50.6423035,8.4599686-50.6423035 s20.4449196,52.5222931,7.6374702,49.467308c0.2350006,12.8074532-0.7049942,72.4972229-0.7049942,72.4972229 S43.5540123,121.7707825,35.564045,121.7707825z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(GreatAxeR, {
  character: "ManDragonborn"
})
