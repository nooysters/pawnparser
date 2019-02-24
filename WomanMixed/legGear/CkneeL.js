import React from "react"

const CkneeL = ({ colors = ["#996841", "#282560", "#FFFFFF"] }) => {
  return (
    <g id="CkneeL">
      <path
        fill={colors[0]}
        d="M82.8293228,80.1134033c-0.1062469-0.861763-9.0189896-0.4367905-8.818306,0.6846848 c0.1416626,1.1568832,0.5666351,4.9698868,0.6846848,5.5483322c0.1180496,0.5784378,1.3103561,3.7775879,1.581871,3.9428558 c0.2715073,0.1652679,7.8384933,0.4013672,8.0037613-0.5430298s-1.6290894-5.0525208-1.6290894-5.0525208 S82.9355698,80.9751587,82.8293228,80.1134033z"
      />
      <path
        opacity="0.2"
        fill={colors[1]}
        d="M75.9942474,85.0832901c0,2.1906128,1.5405197,3.9546585,2.9748535,3.9546585 s2.585289-2.1536026,2.585289-4.344223s-1.2217865,1.2749329-2.6561203,1.2749329S75.9942474,82.8926697,75.9942474,85.0832901z"
      />
      <path
        opacity="0.19"
        fill="#FFF"
        d="M81.2002411,83.7861099c0,0-2.5660324-3.2616196-4.9580841,0.191864 C77.7643738,80.9082108,78.1557999,78.2861252,81.2002411,83.7861099z"
      />
      <path
        opacity="0.2"
        fill={colors[1]}
        d="M82.0147781,85.0478745c0,0,2.1957245,4.4622726,1.9124069,4.32061 c-0.2833176-0.141655-0.8499603,0.3541489-0.8499603,0.3541489L82.0147781,85.0478745z"
      />
      <polygon
        opacity="0.19"
        fill="#FFF"
        points="82.5105896,80.5147705 82.1564407,84.6228943 81.8022919,79.9481277"
      />
    </g>
  )
}

export default CkneeL
