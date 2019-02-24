import React from "react"

const Lips = ({ colors = ["#A04E55"] }) => {
  return (
    <g id="Lips">
      <path
        fill={colors[0]}
        d="M68.852478,23.0528412c-0.1773071,0-0.3504028,0.2207031-0.3504028,0.2207031 s-0.1539307-0.2207031-0.3067017-0.2207031s-1.43927,0.5648804-1.43927,0.5648804h0.0901489 c0,0,0.0670166,0.7364502,1.6764526,0.7364502s1.6340942-0.7364502,1.6340942-0.7364502h0.0901489 C70.2469482,23.6177216,69.0297852,23.0528412,68.852478,23.0528412z"
      />
      <path
        opacity="0.3"
        fill="#21376C"
        d="M66.7561111,23.6177292h3.4908142 c0,0-1.2171326-0.564867-1.3944473-0.564867c-0.1773071,0-0.3503876,0.2206631-0.3503876,0.2206631 s-0.1539307-0.2206631-0.3067169-0.2206631C68.0425797,23.0528622,66.7561111,23.6177292,66.7561111,23.6177292z"
      />
    </g>
  )
}

export default Lips
