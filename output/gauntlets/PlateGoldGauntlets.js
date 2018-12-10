import React from "react"

const PlateGoldGauntlets = ({ colors = ["#A59A76", "#8A784E", "#EED793"] }) => {
  return (
    <g id="PlateGoldGauntlets">
      <path
        fill={colors[0]}
        d="M26.1,69.9c0,0,5.5-1.6,7,4.5c-0.3,2.3-2,4.6-2,4.6s-5.1-6.6-8-2.6C24.2,69.6,26.1,69.9,26.1,69.9z"
      />
      <polygon
        fill={colors[1]}
        points="28.6,76.6 31.4,71.4 32.2,72.4 29.4,77.3"
      />
      <polygon
        fill={colors[2]}
        points="26.6,69.8 24.8,75.3 26,75.2 27.8,69.8"
      />
      <g>
        <path
          fill={colors[0]}
          d="M71.8,70.1c0,0-6.1-2.1-7.6,4c0.3,2.3,2,5.3,2,5.3s5.4-5.7,8.3-1.7C73.5,70.8,71.8,70.1,71.8,70.1z"
        />
        <polygon
          fill={colors[1]}
          points="69.7,76.8 66.4,70.7 65.6,71.7 68.8,77.4"
        />
        <polygon
          fill={colors[2]}
          points="71.8,70.1 73.6,76.7 72.3,76.3 70.5,69.8"
        />
      </g>
    </g>
  )
}

export default PlateGoldGauntlets
