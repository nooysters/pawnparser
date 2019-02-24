import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const GreatAxeL = ({ allEnabledElements }) => {
  return allEnabledElements.includes("GreatAxeL") ? (
    <g id="GreatAxeL">
      <path d="M88.5999985,122.5c-6.8000031,0-6.1999969-6.5999985-6.1999969-6.5999985S81.8000031,76,81.3000031,54.4000015 c-12.5999985,0-26.7000008-43.0999985,7.1999969-43.0999985S105.9000015,56,95,53.4000015 c0.1999969,10.9000015-0.5999985,61.7000046-0.5999985,61.7000046S95.4000015,122.5,88.5999985,122.5z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(GreatAxeL, {
  character: "WomanMixed"
})
