import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const LuteR = ({ allEnabledElements }) => {
  return allEnabledElements.includes("LuteR") ? (
    <g id="LuteR">
      <path d="M61.7000008,60.5C67,66.5,77.4000015,82.5,68.6999969,90.4000015 c-9.7999992,8.9000015-26.5999985,0.4000015-29.0999985-10.8000031C37.2999992,69.2999954,40.5,64,35.1999969,53.6999969 C31.5999985,46.7999954,27.5,36.2999954,41.0999985,35.7999954C49.5,35.5,56.7000008,54.9000015,61.7000008,60.5z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(LuteR, { character: "WomanMixed" })
