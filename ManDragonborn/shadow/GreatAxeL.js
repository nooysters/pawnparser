import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const GreatAxeL = ({ allEnabledElements }) => {
  return allEnabledElements.includes("GreatAxeL") ? (
    <g id="GreatAxeL">
      <path d="M103.2566452,122.3471298c-7.989975,0-7.2849655-7.7549667-7.2849655-7.7549667 s-0.7049942-46.8823166-1.2924957-72.2622223c-14.8049393,0-31.3723793-50.6423035,8.4599686-50.6423035 s20.4449158,52.5222931,7.6374664,49.467308c0.234993,12.8074493-0.7049942,72.4972229-0.7049942,72.4972229 S111.2466202,122.3471298,103.2566452,122.3471298z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(GreatAxeL, {
  character: "ManDragonborn"
})
