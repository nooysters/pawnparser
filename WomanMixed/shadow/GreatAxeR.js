import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const GreatAxeR = ({ allEnabledElements }) => {
  return allEnabledElements.includes("GreatAxeR") ? (
    <g id="GreatAxeR">
      <path d="M48.2999992,121.5c-6.7999992,0-6.2000008-6.5999985-6.2000008-6.5999985S41.5,75,41,53.4000015 c-12.6000004,0-26.7000008-43.0999985,7.2000008-43.0999985S65.5999985,55,54.7000008,52.4000015 c0.2000008,10.9000015-0.5999985,61.7000046-0.5999985,61.7000046S55.0999985,121.5,48.2999992,121.5z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(GreatAxeR, {
  character: "WomanMixed"
})
