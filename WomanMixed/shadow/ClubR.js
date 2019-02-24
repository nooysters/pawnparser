import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const ClubR = ({ allEnabledElements }) => {
  return allEnabledElements.includes("ClubR") ? (
    <g id="ClubR">
      <path d="M50.0999985,78.1999969l6-8C56,69.5,55.8999977,68.6999969,55.7999992,68 c-0.0999985-0.5-0.0999985-0.9000015-0.2000008-1.3000031c-0.0999985-1-0.2999992-2.3000031-0.2999992-2.9000015 C55.3999977,63.1999969,55.5,62.8999939,55.5,62.8999939V63L54,55.7999992c0.9000015,1,1.5,2.2999992,1.5999985,3.7999992 C55.5,58.8999977,55.5,58.1999969,55.5,57.5999985c0-0.7000008-0.0999985-1.4000015-0.0999985-2.0999985 c0-0.5999985,0-1.2999992,0-1.9000015c0-0.9000015,0-1.7999992,0-2.7000008v-0.5999985c0-2,0-4.2000008-0.0999985-6.4000015 c0-0.0999985,0-0.2000008,0-0.2999992l0,0v-0.2000008l0,0v-0.2999992c-0.0999985-1-0.0999985-2-0.2000008-3 C55,39.5,55,39,54.9000015,38.4000015s-0.2000008-1.2000008-0.2999992-1.7999992l0,0 c-0.0999985-0.2999992-0.0999985-0.7000008-0.2000008-1l0,0c0-0.2999992-0.0999985-0.5999985-0.0999985-0.9000015v-0.2999992 c0-0.0999985,0-0.2999992,0-0.4000015v-0.5c0.0999985-0.4000015,0.0999985-0.9000015,0.0999985-1.2999992 c0-0.5,0.0999985-1,0.0999985-1.6000004s0.0999985-1.2999992,0.2000008-1.8999996 c0-0.2999992,0.0999985-0.6000004,0.0999985-0.8999996c0-0.2000008,0.0999985-0.2999992,0.0999985-0.3999996 s0.0999985-0.2000008,0.0999985-0.2999992c0-0.1000004,0.0999985-0.2000008,0.0999985-0.3999996 c0,0.1000004-0.0999985,0.2000008-0.0999985,0.3999996l0.5-2.8999996l-0.0999985-2.6000004l-0.2999992-1.7999992L55,19.1000004 C54.9000015,18.7000008,54.7999992,18.3000011,54.7000008,18v-0.2000008C54.6000023,17.5,54.5,17.1999989,54.5,16.8999996 l-0.2000008-1.1000004c-0.0999985-0.3000002-0.0999985-0.6000004-0.2000008-1v-0.1000004C54,14.3000002,54,14,54,13.6999998 c-0.0999985-0.5-0.0999985-0.8999996-0.2000008-1.3999996c0-0.1999998-0.0999985-0.3999996-0.0999985-0.6000004 l-1.2999992-3.0999994c-2.2999992-3.0999999-5.7000008-4.8000002-9.5999985-4.8000002c-0.2000008,0-0.4000015,0-0.5999985,0 c-0.5,0-1.0999985,0.0999999-1.5999985,0.1999998c-0.2999992,0-0.5999985,0.0999999-0.9000015,0.1999998h-0.0999985 c-1.5999985,0.4000001-3.0999985,1-4.2999992,1.9000001C35.1000061,6.1999998,34.9000092,6.4000001,34.7000046,6.5l-2.5,3.8999996 l-0.0999985,0.3000002C31.9000053,11.3000002,31.7000065,11.8999996,31.5000057,12.5 c-0.2999992,0.8999996-0.6000004,1.8000002-0.8999996,2.8999996l-0.1000004,0.3000002 C30.4000053,16,30.4000053,16.2999992,30.300005,16.6000004L30,16.7999992c-0.1000004,0.5-0.2000008,1-0.2000008,1.5 c0,0.2999992,0,0.5-0.1000004,0.7000008l0,0v1.2000008C29.8999996,22,30.2999992,23.5,30.5999985,24.3000011l1.3999996,7 l0.6999989,1.8999996c0.2000046,0.4000015,0.4000015,1.5999985,0.5,2.4000015v0.2999992 c0.3000031,1.5999985,0.7000046,3,1,4.2000008c0.3000031,1,0.6000023,1.9000015,0.7000046,2.5999985v0.2000008 c0,0.2000008,0,0.4000015,0,0.7000008v0.0999985v0.2000008c0,0.9000015,0,2.0999985,0.1999969,3.4000015 c0.2000046,1.0999985,0.6000023,2.0999985,1,2.7999992l-0.4000015,0.4000015L36,52.1000023l0.5,0.5999985L36.5999985,53 c0.2999992,1.5,0.5999985,2.9000015,1,4.2000008C38,58.7000008,38.2999992,60.1000023,38.5,61.4000015 C38.5,61.5,38.5999985,62,38.5999985,62c0.0999985,0.4000015,0.0999985,0.7999992,0.0999985,1.2000008 c0.0999985,0.5999985,0.0999985,1.2000008,0.2000008,1.7000008l0.0999985,1.3000031l0.0999985,0.6999969l1.2000008,5.8000031 l8,5.5999985L50.0999985,78.1999969z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(ClubR, { character: "WomanMixed" })
