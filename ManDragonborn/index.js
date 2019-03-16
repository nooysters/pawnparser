import React from "react"

import { Group as Shadow } from "./shadow"
import Background from "./background"
import { Group as Body } from "./body"
import Head from "./head"
import Face from "./face"
import Legs from "./legs"
import Torso from "./torso"
import Armorextras from "./armorExtras"
import Overarmor from "./overArmor"
import Footwear from "./footwear"
import Horns from "./horns"
import Gear from "./gear"
import Braces from "./braces"
import Overwear from "./overwear"
import Shoulderplates from "./shoulderPlates"
import Thumbs from "./thumbs"
import Righthanditem from "./rightHandItem"
import Lefthanditem from "./leftHandItem"
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
        <Head />
        <Face />
        <Legs />
        <Torso />
        <Armorextras />
        <Overarmor />
        <Footwear />
        <Horns />
        <Gear />
        <Braces />
        <Overwear />
        <Shoulderplates />
        <Thumbs />
        <Righthanditem />
        <Lefthanditem />
        <Hands />
        <Foreground />
        <Base />
      </svg>
    )
  }
}

export default ManDragonborn
