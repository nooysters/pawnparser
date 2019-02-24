import React from "react"

import { Group as Shadow } from "./shadow"
import Background from "./background"
import { Group as Body } from "./body"
import Undergarments from "./underGarments"
import { Group as Hands } from "./hands"
import { Group as Head } from "./head"
import Face from "./face"
import Pants from "./pants"
import Shirts from "./shirts"
import Armor from "./Armor"
import Footwear from "./footwear"
import Hair from "./hair"
import Overwear from "./overWear"
import Gear from "./gear"
import Weaponright from "./weaponRight"
import Weaponleft from "./weaponLeft"
import { Group as Fingers } from "./fingers"
import Headgear from "./headGear"
import Foreground from "./foreGround"
import Base from "./base"

class WomanDwarf extends React.Component {
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
        <Undergarments />
        <Hands />
        <Head />
        <Face />
        <Pants />
        <Shirts />
        <Armor />
        <Footwear />
        <Hair />
        <Overwear />
        <Gear />
        <Weaponright />
        <Weaponleft />
        <Fingers />
        <Headgear />
        <Foreground />
        <Base />
      </svg>
    )
  }
}

export default WomanDwarf
