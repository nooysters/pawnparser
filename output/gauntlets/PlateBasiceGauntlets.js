import React from "react"

const PlateBasiceGauntlets = ({
  colors = ["#9E9E9E", "#808080", "#B8B8B8"]
}) => {
  return (
    <g id="PlateBasiceGauntlets">
      <path
        fill={colors[0]}
        d="M25.4,71.1c0,0,5.6-2.4,7.1,3.7c-0.3,2.3-2,3.9-2,3.9s-4.9-4-7.8,0C23.7,71.8,25.4,71.1,25.4,71.1z"
      />
      <polygon fill="gray" points="27.9,77.3 30.8,71.7 31.7,72.7 28.8,77.7" />
      <polygon fill={colors[2]} points="25.4,71.1 23.7,77.7 25,77 26.8,70.7" />
      <g>
        <path
          fill={colors[0]}
          d="M71.6,71.1c0,0-5.6-2.4-7.1,3.7c0.3,2.3,2,3.9,2,3.9s4.9-4,7.8,0C73.2,71.8,71.6,71.1,71.6,71.1z"
        />
        <polygon fill="gray" points="69.1,77.3 66.1,71.7 65.3,72.7 68.1,77.7" />
        <polygon
          fill={colors[2]}
          points="71.6,71.1 73.3,77.7 72,77 70.2,70.7"
        />
      </g>
    </g>
  )
}

export default PlateBasiceGauntlets
