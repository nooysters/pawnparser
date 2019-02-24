import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const Cloak = ({ allEnabledElements }) => {
  return allEnabledElements.includes("Cloak") ? (
    <g id="Cloak">
      <polygon points="102.3000031,64.8000031 111.1999969,117.9000015 93.9000015,117.9000015 96.8000031,57.9000015" />
      <g id="S_x24_cloak_1_">
        <path
          id="S_x24_cloak"
          fill="#191919"
          d="M65.5999985,8.5c-1,0-4.2000008,18.8999996-4.2000008,18.8999996l-15,16.1000004 L41,61.4000015l-0.2999992,50.7999954L103.5,112.5l-7.1999969-50.7000008c0,0-15.1999969-32.4000015-15.8000031-32.4000015 s-4.1999969-5.5-4.1999969-5.5L75,11L65.5999985,8.5z"
        />
      </g>
      <polygon points="35.9000015,64.8000031 27.1000004,117.9000015 44.2999992,117.9000015 41.4000015,57.9000015" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(Cloak, { character: "WomanMixed" })
