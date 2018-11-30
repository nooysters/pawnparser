import React from "react"

import Base from "./base"
import Postbody from "./postBody"
import Pants from "./pants"
import Footwear from "./footwear"
import Shirt from "./shirt"  
import Utility from "./utility"
import Gauntlets from "./gauntlets"
import Shoulders from "./shoulders"
import Head from "./head"
import Hair from "./hair"
import Helmet from "./helmet"
import Righthanditem from "./rightHandItem"
import Lefthanditem from "./leftHandItem"
import Hands from "./hands"
import Toplayer from "./topLayer"

class ManDwarf extends React.Component {
  constructor(props) {
    super(props)

    this.svgRef = React.createRef()
  }

  render() {
    return (
      <svg
        version="1.1"
        ref={this.svgRef}
        x="0px"
        y="0px"
        viewBox="0 0 114 152.8"
      >
        {/* <Base />
        <Postbody />
        <Pants />
        <Footwear />
        <Shirt />
        <Utility />
        <Gauntlets />
        <Shoulders />
        <Head /> */}
        {/* <Hair />
        <Helmet />
        <Righthanditem />
        <Lefthanditem />
        <Hands />
        <Toplayer /> */}
      </svg>
    )
  }
}

export default ManDwarf
