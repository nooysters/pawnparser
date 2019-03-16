import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const SlingShotL = ({ allEnabledElements }) => {
  return allEnabledElements.includes("SlingShotL") ? (
    <g id="SlingShotL">
      <path d="M107.1999969,101.6999969c-2,0-4-0.5999985-4.8000031-0.9000015l-2.5999985-3l-0.3000031,0.3000031 C98.1999893,96.9000015,97.3999939,95.5,97.1999893,95l-0.4000015-5.6999969c0-0.0999985,0.1999969-0.5,0.4000015-1 l0.1999969-15.9000015l-6.4000015-2.6999969l-0.5-4.5999985l1.0999985-10l4.0999985-5.5999985l6.1999969-2.9000015 l7.8000031,1.2000008c0.5999985,0.5999985,2.6999969,2.5999985,3.8000031,5.7999992l0.1999969,0.7000008 c0.3000031,1.0999985,0.5,2.2000008,0.4000015,3.2999992c0.0999985,1.0999985,0.4000015,6.8000031,1.9000015,30.3000031 c0.6999969,1.9000015,0.6999969,4.0999985,0,6.8000031l-0.4000015,0.4000015c-1.0999985,3.9000015-3.5,5.5-5.3000031,6.0999985 C109.3000031,101.5,108.3000031,101.6999969,107.1999969,101.6999969L107.1999969,101.6999969z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(SlingShotL, {
  character: "ManDragonborn"
})