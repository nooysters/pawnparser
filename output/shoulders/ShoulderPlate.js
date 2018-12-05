import React from "react"

const ShoulderPlate = ({ colors = ["#9E9E9E", "#808080"] }) => {
  return (
    <g id="ShoulderPlate">
      <path
        fill={colors[0]}
        d="M33.7,55.4c0,0-0.8,2.5,0.2,4.5c2.9,0.3,10.3-0.1,10.9-2.8c0.2-0.8-0.5-3.2-0.5-3.2 C43.4,53.2,35.4,49.6,33.7,55.4z"
      />
      <path
        fill="gray"
        d="M44.3,53.9c0,0.2,0,1.3-0.1,1.4c-0.6,2.7-7.7,2.8-10.6,2.5c-0.1-0.2-0.1-0.7-0.2-0.9 c0,0.7,0.1,1.7,0.4,2.4c2.9,0.3,10.3-0.1,10.9-2.8C44.9,56.1,44.5,54.7,44.3,53.9z"
      />
      <g>
        <path
          fill={colors[0]}
          d="M80,55.4c0,0,0.8,2.5-0.2,4.5c-2.9,0.3-10.3-0.1-10.9-2.8c-0.2-0.8,0.5-3.2,0.5-3.2 C70.2,53.2,78.2,49.6,80,55.4z"
        />
        <path
          fill="gray"
          d="M69.4,53.9c0,0.2,0,1.3,0.1,1.4c0.6,2.7,7.7,2.8,10.6,2.5c0.1-0.2,0.1-0.7,0.2-0.9c0,0.7-0.1,1.7-0.4,2.4 C77,59.6,69.6,59.2,69,56.5C68.7,56.1,69.2,54.7,69.4,53.9z"
        />
      </g>
    </g>
  )
}

export default ShoulderPlate
