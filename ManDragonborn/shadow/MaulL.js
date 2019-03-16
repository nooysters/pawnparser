import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const MaulL = ({ allEnabledElements }) => {
  return allEnabledElements.includes("MaulL") ? (
    <g id="MaulL">
      <path d="M99,87.1999969c-0.9000015,0-1.6999969-0.0999985-2.5999985-0.4000015c-2.0999985-0.5999985-3.9000015-2-5-3.8000031 C91,82.3999939,90.8000031,81.7999954,90.5999985,81.0999908L90.5,80.6999893l0,0 c-0.0999985-0.4000015-0.1999969-0.8000031-0.1999969-1.1999969v-0.4000015c0-0.4000015,0-0.5999985,0-0.9000015v-0.0999985l0,0 v-0.1999969l0.0999985-0.5c0.3000031-2.4000015,2.1999969-18.9000015,3.4000015-29.2999992 c-0.4000015-0.2000008-0.5999985-0.2999992-0.5999985-0.2999992l-3.8000031-6.2000008h-0.0999985 c0-0.0999985,0-0.2000008,0-0.2999992v-0.0999985v-0.2999992c-0.0999985-1.0999985-0.0999985-3.0999985,0.1999969-7 l0.0999985-2.6000004l3.5999985-6c1.6999969-0.8999996,3.3000031-0.8999996,3.9000015-0.8999996 c0.6999969,0,1.8000031,0,3.3000031,0.1000004c1.0999985,0,2.4000015,0.1000004,3.6999969,0.2000008L106,24.9999981 c5.5999985,1.7000008,12.5,4.8000011,12.8000031,4.8999996l3.9000015,8.7999992 c-1.1999969,3.5999985-2.6999969,8.2000008-2.9000015,9.0999985c0.0999985-0.2000008,0.3000031-1.4000015-0.0999985-2.9000015 l-1.3000031,6.0999985c-1.4000015,1.7000008-3.1999969,2.9000015-7.6999969,3.2000008 c-1.0999985,10.2000008-2.6999969,23.2999992-2.9000015,25.2999992c-0.0999985,1.5999985-0.8000031,3.1999969-1.9000015,4.5 C104,86.0999985,101.5999985,87.1999969,99,87.1999969z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(MaulL, {
  character: "ManDragonborn"
})