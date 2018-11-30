import React from "react"

const NoseWide = ({ color = [] }) => {
  return (
    <g id="NoseWide">
      <linearGradient
        id="SVGID_14_"
        gradientUnits="userSpaceOnUse"
        x1="56.969"
        y1="47.279"
        x2="56.969"
        y2="35.865"
      >
        <stop offset="0" stopColor="#ed1c24" />
        <stop offset="0.141" stopColor="#ed1c24" stopOpacity="0.859" />
        <stop offset="1" stopColor="#ed1c24" stopOpacity="0" />
      </linearGradient>
      <polygon
        fill="url(#SVGID_14_)"
        points="56.8,39.6 53.8,46.1 56.9,48.4 60.2,46.2"
      />
      <ellipse
        opacity="0.66"
        fill="#FFF"
        cx="56.5"
        cy="46.4"
        rx="0.4"
        ry="0.3"
      />
      <path
        opacity="0.3"
        fill="#21376C"
        d="M53.8,46.1c0,0,1.1-0.2,1.5,0.2c0.4,0.4,0.8,0.7,1.1,0.9c0.3,0.2,0.6,0.3,1.1,0 c0.5-0.2,0.4-0.8,1-1c0.6-0.2,1.8-0.1,1.8-0.1l-2.3,2.2c0,0-0.2,0.3-0.9,0.3s-1.1-0.3-1.1-0.3L53.8,46.1z"
      />
      <path
        opacity="0.19"
        fill="#21376C"
        d="M53.8,46.1c0,0,1.1-0.2,1.5,0.2c0.4,0.4,0.8,0.7,1.1,0.9c0.3,0.2,0.6,0.3,1.1,0 c0.5-0.2,0.4-0.8,1-1s1.1-0.2,1.8-0.1c-0.8,0.3-1.3-0.4-2.3,1.1c-1,1-2,0-2,0C54.8,45.4,54,46.6,53.8,46.1z"
      />
    </g>
  )
}

export default NoseWide
