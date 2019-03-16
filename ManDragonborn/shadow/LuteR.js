import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const LuteR = ({ allEnabledElements }) => {
  return allEnabledElements.includes("LuteR") ? (
    <g id="LuteR">
      <path d="M51.4315834,59.1584206c5.2999992,5.9999962,15.7000008,21.9999962,6.9999962,29.8999977 c-9.7999992,8.9000015-26.5999985,0.4000015-29.0999985-10.8000031 c-2.2999992-10.3000031,0.9000015-15.5999947-4.3999996-25.8999977 c-3.6000004-6.9000015-7.6999989-17.4000015,5.8999996-17.9000015 C39.2315826,34.1584206,46.4315834,53.5584221,51.4315834,59.1584206z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(LuteR, {
  character: "ManDragonborn"
})
