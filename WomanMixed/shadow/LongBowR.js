import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const LongBowR = ({ allEnabledElements }) => {
  return allEnabledElements.includes("LongBowR") ? (
    <g id="LongBowR">
      <path d="M56.7000008,113.6999969c-3.0999985,0-5.7999992-1.9000015-6.9000015-4.8000031l0.5-2.8000031 c-0.0999985-0.3000031-0.2000008-0.5999985-0.2000008-0.9000015l0,0C41.5999985,92.6999969,39,75,38.4000015,62.2999992h0.2000008 l-0.4000015-0.4000015v-1.2999992c0-0.9000015,0-1.7999992,0-2.7000008c0-1.2999992-0.0999985-2.5999985-0.0999985-4 l0.4000015-0.4000015h-0.0999985c0.2000008-4.9000015,0.7000008-9.7000008,1.4000015-14.1000023l0.0999985-0.4000015l0,0l0,0 l0.2999992-1.7000008c0.4000015-2,0.7999992-4,1.2000008-5.8999996l0,0l0,0l0,0c0.7999992-3.5,1.7999992-6.6999989,3-9.6999989 c1.7999992-4.6000004,3.5-7.6999998,4.7000008-9.6000004c0-0.1000004,0-0.1000004,0-0.1999998c0,0,0,0.1000004,0,0.1999998 c0.2000008-0.1999998,0.2999992-0.5,0.4000015-0.6999998c0.0999985-0.8000002,0.4000015-1.6000004,0.7000008-2.3000002 l-0.4000015-2.1999998c1.0999985-2.9000001,3.7999992-4.8000002,6.9000015-4.8000002 c1.5999985,0,4.0999985,0.5,6.2000008,3.0999999c0.0999985,0.1999998,0.2999992,0.3000002,0.4000015,0.5 c0.2000008,0.3000002,0.5,0.5999999,0.7000046,1c0.2999954,0.4000001,0.5,0.8000002,0.6999969,1.2000003 c0.0999985,0.3000002,0.3000031,0.5,0.4000015,0.6999998c0.0999985,0.1000004,0.0999985,0.1999998,0.2000046,0.3000002 l-0.4000092,3.8000002H65c0.0999985,1.3999996-0.0999985,2.6999998-0.5999985,3.7999992v82.8000031 c0.5999985,1.0999985,0.7999954,2.4000015,0.7999954,3.8000031h-0.2999954l0.4000015,3.8000031 C65.2000046,107,65.1000061,107.2000046,65,107.4000015c0,0-0.1999969,0.4000015-0.2999954,0.5999985l0,0 C63.7999992,109.5999985,61.4000015,113.6999969,56.7000008,113.6999969L56.7000008,113.6999969z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(LongBowR, {
  character: "WomanMixed"
})