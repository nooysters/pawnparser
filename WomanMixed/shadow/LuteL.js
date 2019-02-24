import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const LuteL = ({ allEnabledElements }) => {
  return allEnabledElements.includes("LuteL") ? (
    <g id="LuteL">
      <path d="M74.1999969,62.4000015c-5.3000031,6-15.6999969,22-7,29.9000015C77,101.2000046,93.7999954,92.7000046,96.2999954,81.5 c2.3000031-10.3000031-0.9000015-15.5999985,4.4000015-25.9000015c3.5999985-6.9000015,7.6999969-17.4000015-5.9000015-17.9000015 C86.3000031,37.5,79.1999969,56.7999992,74.1999969,62.4000015z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(LuteL, { character: "WomanMixed" })
