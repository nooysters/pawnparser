import React from "react"

const Nose = ({
  colors = [
    "#F05A22",
    "#EC4923",
    "#EC4823",
    "#E93D24",
    "#E73625",
    "#E63225",
    "#SVGID_",
    "#FFFFFF"
  ]
}) => {
  return (
    <g id="Nose">
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="68.489"
        y1="128.963"
        x2="68.489"
        y2="133.877"
        gradientTransform="matrix(1 0 0 -1 0 152)"
      >
        <stop offset="0" stopColor="#f05a22" />
        <stop offset="0.158" stopColor="#ec4923" stopOpacity="0.789" />
        <stop offset="0.183" stopColor="#ec4823" stopOpacity="0.748" />
        <stop offset="0.469" stopColor="#e93d24" stopOpacity="0.265" />
        <stop offset="0.682" stopColor="#e73625" stopOpacity="0.158" />
        <stop offset="1" stopColor="#e63225" stopOpacity="0" />
      </linearGradient>
      <path
        fill="url(#SVGID_1_)"
        d="M68.2027283,18.7213211l-0.720726,2.5224743 c-0.0159378,0.055769-0.0012894,0.1158104,0.0385437,0.1579723l0.9509888,1.0066833l0.9803925-0.9324093 c0.0478668-0.0455246,0.0638123-0.1152897,0.0404816-0.1770935l-0.9779739-2.590519 C68.4585419,18.5603752,68.2462082,18.5691566,68.2027283,18.7213211z"
      />
      <ellipse
        opacity="0.66"
        fill="#FFF"
        cx="68.275"
        cy="21.54"
        rx="0.215"
        ry="0.179"
      />
      <polygon
        opacity="0.17"
        points="67.452034,21.3611889 67.9375839,21.4603424 68.2907104,21.8817444 68.687973,21.9561081 68.9528198,21.4603424 69.5266418,21.4107647 68.7762527,22.402298 68.2465668,22.402298"
      />
    </g>
  )
}

export default Nose
