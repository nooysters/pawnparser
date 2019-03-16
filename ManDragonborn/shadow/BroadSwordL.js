import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const BroadSwordL = ({ allEnabledElements }) => {
  return allEnabledElements.includes("BroadSwordL") ? (
    <g id="BroadSwordL">
      <path
        id="path_4_"
        d="M97.8000031,69.8000031L96,68.5l-2.9000015-6c0,0,0.0999985-2.2999992,0.1999969-4.7000008L90.5999985,54 l-0.1999969-1.9000015l2.5-3.2000008L93.6999969-7l0.0999985-1.3000002l0.9000015-4.3000002l0.9000015-2.3000002l0.5-0.8000002 l12-0.1000004c0.5,0.8000002,3.1999969,5.1000004,3.5999985,9.5c0.0999985,0.6999998,0.1999969,1.6999998-0.0999985,17.3999996 c-0.1999969,12.3999996-0.5,28.7000008-0.6999969,37.2000008L114.7000046,52.5l0.0999985,2.0999985L110.6000061,59 l0.0999985,4.4000015l-4.4000015,6.6999969l-1.5,0.5999985L97.8000031,69.8000031z"
      />
    </g>
  ) : null
}

export default connectToAllEnabledElements(BroadSwordL, {
  character: "ManDragonborn"
})
