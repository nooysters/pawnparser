import React from "react"

const LeftShoulderGuard = ({ colors = ["#898888"] }) => {
  return (
    <g id="LeftShoulderGuard">
      <path
        fill={colors[0]}
        d="M102.3286667,21.5950947c0.3811493,0.1270504,0.8893356,0.1270504,1.3975372,0.1270504 c-1.0164032,0.6352444-1.7786942,1.5245895-2.2868881,2.6680298v0.1270504l0,0 c-1.6516418,2.5409813,1.1434402,9.27458,1.9057312,10.7991657c1.3975372,3.9385185,3.3032761,7.7499886,5.3360596,11.5614624 c-1.6516418-0.5081978-5.2090073-1.7786903-5.3360596-1.905735c-0.762291-0.6352463-3.4303207-2.6680298-3.81147-3.4303284 c-2.5409775-5.4631081-5.5901566-12.0696583-6.0983582-17.5327663c1.7786865-0.7622948,6.0983582-1.2704906,7.4958954-2.7950802 C101.3122635,21.3409996,101.8204651,21.4680481,102.3286667,21.5950947z"
      />
      <path
        opacity="0.28"
        d="M94.4516296,24.136076 c0.508194,5.3360615,3.4303131,11.8155613,5.9712982,17.1516209c0.3811493,0.762291,3.0491791,2.7950821,3.81147,3.4303246 c0.1270447,0.1270485,1.7786865,0.7622948,3.3032761,1.2704926c0.2540894,0.5081978,0.508194,1.0163918,0.762291,1.3975372 c-1.6516418-0.5081978-5.2090073-1.7786903-5.3360596-1.905735c-0.762291-0.6352463-3.4303207-2.6680298-3.81147-3.4303284 c-2.5409775-5.4631081-5.5901566-12.0696583-6.0983582-17.5327663 C93.4352264,24.3901749,93.943428,24.2631264,94.4516296,24.136076z"
      />
    </g>
  )
}

export default LeftShoulderGuard