import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const GoatHorns = ({ allEnabledElements }) => {
  return allEnabledElements.includes("GoatHorns") ? (
    <g id="GoatHorns">
      <path
        id="goatHorns"
        fill="#050505"
        d="M83.5999985,3.5999999c0-3.9000001-3.1999969-7.1999998-7.1999969-7.1999998 c-1.8000031,0-4.5999985,0.7-7.1999969,3.9000001c-2.5999985-3.2-5.4000015-3.9000001-7.2000008-3.9000001 c-4,0-7.2000008,3.2-7.2000008,7.1999998c0,0,2,5.2999997,3,9.2999992l6.3000031,0.8999996l5.0999985-3.1000004 l5.0999985,3.1000004l6.3000031-0.8999996C81.5999985,8.8999996,83.5999985,3.5999999,83.5999985,3.5999999z"
      />
    </g>
  ) : null
}

export default connectToAllEnabledElements(GoatHorns, {
  character: "WomanMixed"
})
