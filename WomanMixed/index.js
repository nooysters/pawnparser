import React from "react"

import { Group as Shadow } from "./shadow"
import Background from "./background"
import { Group as Body } from "./body"
import Underwear from "./underwear"
import Pants from "./pants"
import Skirts from "./skirts"
import Leggear from "./legGear"
import Shirts from "./shirts"
import Armorextras from "./armorExtras"
import Armgear from "./armGear"
import Shouldergear from "./shoulderGear"
import { Group as Head } from "./head"
import Face from "./face"
import Gear from "./gear"
import { Group as Thumbs } from "./thumbs"
import Hair from "./hair"
import Horns from "./horns"
import Overwear from "./overwear"
import Lefthanditem from "./leftHandItem"
import Righthanditem from "./rightHandItem"
import Headgear from "./headGear"
import { Group as Hands } from "./hands"
import Foreground from "./foreGround"
import Base from "./base"

class WomanMixed extends React.Component {
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
        <Underwear />
        <Pants />
        <Skirts />
        <Leggear />
        <Shirts />
        <Armorextras />
        <Armgear />
        <Shouldergear />
        <Head />
        <Face />
        <Gear />
        <Thumbs />
        <Hair />
        <Horns />
        <Overwear />
        <Lefthanditem />
        <Righthanditem />
        <Headgear />
        <Hands />
        <Foreground />
        <Base />
      </svg>
    )
  }
}

export default WomanMixed
