import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const TorchL = ({ allEnabledElements }) => {
  return allEnabledElements.includes("TorchL") ? (
    <g id="TorchL">
      <path
        id="path"
        d="M96.3000031,71.6999969l-4.5-8.0999985l2-10.4000015 C86.5,49.0999985,81.9000015,41.2999954,81.9000015,32.5999985c0-13,10.5999985-23.6000004,23.5-23.7999992h0.3000031 c13,0.1000004,23.7000046,10.7000008,23.7000046,23.7999992c0,11.2999992-8,20.7999992-18.5999985,23.2000008 l-2.8000031,11.2999992L101.6000061,72.5l-1.3000031,0.0999985L96.3000031,71.6999969z"
      />
    </g>
  ) : null
}

export default connectToAllEnabledElements(TorchL, {
  character: "ManDragonborn"
})
