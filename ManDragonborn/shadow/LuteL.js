import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const LuteL = ({ allEnabledElements }) => {
  return allEnabledElements.includes("LuteL") ? (
    <g id="LuteL">
      <path d="M87.1999969,61.4000015c-5.3000031,6-15.6999969,22-7,29.9000015C90,100.2000046,106.7999954,91.7000046,109.2999954,80.5 c2.3000031-10.3000031-0.9000015-15.5999985,4.4000015-25.9000015c3.5999985-6.9000015,7.6999969-17.4000015-5.9000015-17.9000015 C99.3000031,36.5,92.1999969,55.7999992,87.1999969,61.4000015z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(LuteL, {
  character: "ManDragonborn"
})
