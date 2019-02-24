import React from "react"

const Bra = ({ colors = ["#9EDFE8", "#262261"] }) => {
  return (
    <g id="Bra">
      <path
        fill={colors[0]}
        d="M72.7287445,37.6218567c-1.8841476,0-3.4908524,0.9805183-4.1553497,2.3667259 c-0.6644897-1.3862076-2.2712479-2.3667259-4.1553955-2.3667259c-2.4774551,0-4.4858704,1.6912689-4.4858704,3.7775917 s2.0084152,3.7775917,4.4858704,3.7775917c1.8841476,0,3.4909058-0.9805183,4.1553955-2.3667221 c0.6644974,1.3862038,2.2712021,2.3667221,4.1553497,2.3667221c2.4774475,0,4.4858704-1.6912689,4.4858704-3.7775917 S75.206192,37.6218567,72.7287445,37.6218567z"
      />
      <g fill={colors[1]}>
        <path
          opacity="0.1"
          d="M65.6623993,42.6056099 c-2.2910995,0.6910248-4.7086525,0.2741699-5.3996773-2.0169258c-0.0501099-0.1661835-0.0678711-0.3330574-0.0974503-0.4998169 c-0.1191902,0.6538315-0.1076546,1.3401299,0.0974503,2.0201416c0.6910248,2.2911568,3.1085777,3.5882683,5.3996773,2.8971863 c2.1249084-0.6409187,3.3728409-2.7668686,2.9945755-4.8997993 C68.3746033,41.6554947,67.2734833,42.1196289,65.6623993,42.6056099z"
        />
        <path
          opacity="0.1"
          d="M74.1764145,42.6056099 c-2.2910995,0.6910248-4.7086487,0.2741699-5.3996735-2.0169258c-0.0501099-0.1661835-0.0678711-0.3330574-0.0974503-0.4998169 c-0.119194,0.6538315-0.1076584,1.3401299,0.0974503,2.0201416c0.6910248,2.2911568,3.1085739,3.5882683,5.3996735,2.8971863 c2.1249161-0.6409187,3.3728409-2.7668686,2.9945755-4.8997993 C76.8886185,41.6554947,75.7874985,42.1196289,74.1764145,42.6056099z"
        />
      </g>
    </g>
  )
}

export default Bra