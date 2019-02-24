import React from "react"

import { Group as Shadow } from "./shadow"
import Background from "./background"
import { Group as Body } from "./body"
import Legs from "./legs"
import Armor from "./armor"
import Footwear from "./footwear"
import Head from "./head"
import Horns from "./horns"
import Gear from "./gear"
import Braces from "./braces"
import Shoulderplates from "./shoulderPlates"
import Overwear from "./overwear"
import Thumbs from "./thumbs"
import Lefthanditem from "./leftHandItem"
import Righthanditem from "./rightHandItem"
import Hands from "./hands"
import Foreground from "./foreGround"
import Base from "./base"

class ManDragonborn extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <svg
        version="1.1"
        ref={this.props.svgRef}
        x="0px"
        y="0px"
        viewBox="0 0 137.1000061 150.1999969"
      >
        <Shadow />
        <Background />
        <Body />
        <Legs />
        <Armor />
        <Footwear />
        <Head />
        <Horns />
        <Gear />
        <Braces />
        <Shoulderplates />
        <Overwear />
        <Thumbs />
        <Lefthanditem />
        <Righthanditem />
        <Hands />
        <Foreground />
        <Base />
      </svg>
    )
  }
}

export default ManDragonborn
