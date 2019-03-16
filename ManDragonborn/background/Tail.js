import React from "react"
import { withSkinColor } from "../../builderConnector"

const Tail = ({ skinColor, colors = ["#DEA043"] }) => {
  return (
    <g id="Tail">
      <path
        fill={skinColor}
        d="M72,64.1999969c0,0-27.7000008,15.9000015-28.0999985,27.9000015 c-0.0999985,2,1.5999985,3.0999985,4.2000008,4.1999969c2.4000015,1.0999985,16.7999992-0.3000031,23.6000023-2.4000015 c0.1999969,2.3000031-20.5999985,7.9000015-26.9000015,5c-3.7000008-1.6999969-6-3.5-6.2999992-6.6999969 C37.7000008,83.9000015,47,71,64.4000015,59C73.5,54.4000015,72,64.1999969,72,64.1999969z"
      />
    </g>
  )
}

export default withSkinColor(Tail, { character: "ManDragonborn" })
