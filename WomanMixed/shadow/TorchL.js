import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const TorchL = ({ allEnabledElements }) => {
  return allEnabledElements.includes("TorchL") ? (
    <g id="TorchL">
      <path
        id="path"
        d="M83.3000031,72.6999969l-4.5-8.0999985l2-10.4000015 C73.5,50.0999985,68.9000015,42.2999954,68.9000015,33.5999985c0-13,10.5999985-23.6000004,23.5-23.7999992h0.3000031 c13,0.1000004,23.7000046,10.7000008,23.7000046,23.7999992c0,11.2999992-8,20.7999992-18.5999985,23.2000008L95,68.0999985 L88.5999985,73.5l-1.3000031,0.0999985L83.3000031,72.6999969z"
      />
    </g>
  ) : null
}

export default connectToAllEnabledElements(TorchL, { character: "WomanMixed" })
