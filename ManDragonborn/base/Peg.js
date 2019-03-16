import React from "react"

const Peg = ({ colors = ["#3F3F40"] }) => {
  return (
    <g id="Peg">
      <rect
        id="peg_3_"
        x="40.7"
        y="118"
        fill={colors[0]}
        width="56.7"
        height="8.5"
      />
    </g>
  )
}

export default Peg
