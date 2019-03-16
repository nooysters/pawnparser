import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const MaulR = ({ allEnabledElements }) => {
  return allEnabledElements.includes("MaulR") ? (
    <g id="MaulR">
      <path d="M39.3315811,85.8584137c0.9000015,0,1.7000008-0.0999985,2.5999985-0.4000015 c2.0999985-0.5999985,3.9000015-2,5-3.8000031c0.4000015-0.5999985,0.5999985-1.1999969,0.7999992-1.9000015l0.0999985-0.4000015 l0,0c0.0999985-0.4000015,0.2000008-0.8000031,0.2000008-1.1999969v-0.4000015c0-0.4000015,0-0.5999985,0-0.9000015v-0.0999985 l0,0v-0.1999969l-0.0999985-0.5c-0.1999969-2.3999939-2.0999985-18.8999901-3.2999954-29.2999916 c0.4000015-0.2000008,0.5999985-0.2999992,0.5999985-0.2999992l3.7999992-6.2000008h0.0999985 c0-0.0999985,0-0.2000008,0-0.2999992v-0.0999985v-0.2999992c0.0999985-1.0999985,0.0999985-3.0999985-0.2000008-7 l-0.0999985-2.6000004l-3.5999985-6c-1.7000008-0.8999996-3.2999992-0.8999996-3.9000015-0.8999996 c-0.7000008,0-1.7999992,0-3.2999992,0.1000004c-1.0999985,0-2.4000015,0.1000004-3.7000008,0.2000008l-1.9000015,0.2999992 c-5.4999962,1.7999973-12.4999962,4.8999977-12.6999969,4.9999981l-3.9000006,8.7999992 c1.2000017,3.5999985,2.7000017,8.2000008,2.9000006,9.1000023c-0.1000004-0.2000008-0.2999992-1.4000015,0.1000004-2.9000015 l1.2999992,6.0999985c1.3999996,1.7000008,3.2000008,2.9000015,7.6999989,3.2000008 c1.0999985,10.2000008,2.7000008,23.2999954,2.9000015,25.2999954c0.0999985,1.5999985,0.7999992,3.1999969,1.9000015,4.5 C34.3315811,84.7584152,36.7315826,85.8584137,39.3315811,85.8584137z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(MaulR, {
  character: "ManDragonborn"
})