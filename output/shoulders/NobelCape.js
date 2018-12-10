import React from "react"

const NobelCape = ({
  colors = ["#8D4D3A", "#D8A16C", "#SVGID_", "#FFFFFF", "#AC7B56", "#F9BE7C"]
}) => {
  return (
    <g id="NobelCape">
      <path
        fill={colors[0]}
        d="M34.7,57.8c0,0,0,5.7,4.2,0.3s0.7-8.9,0.7-8.9s-5.7-3.4-5.3-1.6c0.5,2.5-1.3-0.2-1.3-0.2s-2.7-2.9-3.3-1 c-0.2,0.4-0.1,1,0.2,1.6c0.5,0.9-2.8-0.5-2.8-0.5s-3.1,0.8-3.9,2.4c-0.7,1.3,0.8,3.3,1.5,4C27.4,56.7,34.7,57.8,34.7,57.8z"
      />
      <path
        opacity="0.35"
        fill="#21376C"
        d="M37.2,57.8c0,0,2-2.2,1.5-4c-0.7-2.5-2.6-3.1-4.2-4.8 c-0.4-0.4-0.6-0.5-0.6-0.5c0.8,0.2,0.9,0,0.8-0.8c1,1.2,4.5,1.9,5.2,5.7C39.9,54.4,40,57,37.2,57.8z"
      />
      <path
        opacity="0.35"
        fill="#21376C"
        d="M27.1,47.5c0,0,7.2,3.7,8.9,4.9c1.6,1.2,3.2,1.9,1.2,5.3 c1.6-2.3,2.8-4.2-7-10.1C29.9,48,27.1,47.5,27.1,47.5z"
      />
      <circle fill={colors[1]} cx="36.6" cy="58.4" r="1.5" />
      <circle fill="url(#SVGID_12_)" cx="36.6" cy="58.1" r="1.5" />
      <radialGradient
        id="SVGID_12_"
        cx="36.591"
        cy="95.853"
        r="1.529"
        gradientTransform="matrix(1 0 0 -1 0 153.987)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" />
        <stop offset="0.662" stopColor="#ac7b56" />
        <stop offset="1" stopColor="#f9be7c" />
      </radialGradient>
      <g>
        <path
          fill={colors[0]}
          d="M62.1,57.5c0,0,0,5.7-4.2,0.3S57.2,49,57.2,49s5.7-3.4,5.3-1.6c-0.5,2.5,1.3-0.2,1.3-0.2s2.7-2.9,3.3-1 c0.2,0.4,0.1,1-0.2,1.6c-0.5,0.9,2.8-0.5,2.8-0.5s3.1,0.8,3.9,2.4c0.7,1.3-0.8,3.3-1.5,4C69.4,56.4,62.1,57.5,62.1,57.5z"
        />
        <path
          opacity="0.35"
          fill="#21376C"
          d="M59.6,57.5c0,0-2-2.2-1.5-4c0.7-2.5,2.6-3.1,4.2-4.8 c0.4-0.4,0.6-0.5,0.6-0.5c-0.8,0.2-0.9,0-0.8-0.8c-1,1.2-4.5,1.9-5.2,5.7C56.9,54.1,56.8,56.7,59.6,57.5z"
        />
        <path
          opacity="0.35"
          fill="#21376C"
          d="M69.7,47.2c0,0-7.2,3.7-8.9,4.9c-1.6,1.2-3.2,1.9-1.2,5.3 c-1.6-2.3-2.8-4.2,7-10.1C66.9,47.7,69.7,47.2,69.7,47.2z"
        />
        <circle fill={colors[1]} cx="60.2" cy="58.1" r="1.5" />
        <circle fill="url(#SVGID_13_)" cx="60.2" cy="57.8" r="1.5" />
        <radialGradient
          id="SVGID_13_"
          cx="-531.844"
          cy="96.166"
          r="1.529"
          gradientTransform="rotate(180 -235.84 76.994)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.662" stopColor="#ac7b56" />
          <stop offset="1" stopColor="#f9be7c" />
        </radialGradient>
      </g>
    </g>
  )
}

export default NobelCape
