import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const TorchR = ({ allEnabledElements }) => {
  return allEnabledElements.includes("TorchR") ? (
    <g id="TorchR">
      <path
        id="path_1_"
        d="M52.0999985,71.6999969l4.5-8.0999985l-2-10.4000015C61.8999977,49.0999985,66.5,41.2999954,66.5,32.5999985 C66.5,19.6000004,55.9000015,9,43,8.8000002h-0.2999992C29.7000008,8.8999996,19,19.5,19,32.5999985 c0,11.2999992,8,20.7999992,18.5999985,23.2000008l2.7999992,11.2999992L46.7999992,72.5l1.2999992,0.0999985 L52.0999985,71.6999969z"
      />
    </g>
  ) : null
}

export default connectToAllEnabledElements(TorchR, { character: "WomanMixed" })
