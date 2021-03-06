import React from "react"

const Brows = ({ colors = ["#231F20"] }) => {
  return (
    <g id="Brows">
      <path
        fill={colors[0]}
        d="M64.3435211,16.2800541c0,0,2.0631027-1.7085094,2.8118362,0.8125896 C66.2843246,15.8130245,65.1272278,15.8239174,64.3435211,16.2800541z"
      />
      <path
        fill={colors[0]}
        d="M72.7896271,16.2800541c0,0-2.0631027-1.7085094-2.8118362,0.8125896 C70.8488235,15.8130245,72.0059204,15.8239174,72.7896271,16.2800541z"
      />
    </g>
  )
}

export default Brows
