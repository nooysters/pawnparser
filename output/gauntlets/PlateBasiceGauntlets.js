import React from "react"

const PlateBasiceGauntlets = ({
  colors = ["#9E9E9E", "#808080", "#B8B8B8"]
}) => {
  return (
    <g id="PlateBasiceGauntlets">
      <path
        fill={colors[0]}
        d="M33.9,71.1c0,0,5.6-2.4,7.1,3.7c-0.3,2.3-2,3.9-2,3.9s-4.9-4-7.8,0C32.2,71.8,33.9,71.1,33.9,71.1z"
      />
      <polygon fill="gray" points="36.4,77.3 39.3,71.7 40.2,72.7 37.3,77.7" />
      <polygon
        fill={colors[2]}
        points="33.9,71.1 32.2,77.7 33.5,77 35.3,70.7"
      />
      <g>
        <path
          fill={colors[0]}
          d="M80.1,71.1c0,0-5.6-2.4-7.1,3.7c0.3,2.3,2,3.9,2,3.9s4.9-4,7.8,0C81.7,71.8,80.1,71.1,80.1,71.1z"
        />
        <polygon fill="gray" points="77.6,77.3 74.6,71.7 73.8,72.7 76.6,77.7" />
        <polygon
          fill={colors[2]}
          points="80.1,71.1 81.8,77.7 80.5,77 78.7,70.7"
        />
      </g>
    </g>
  )
}

export default PlateBasiceGauntlets
