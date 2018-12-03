import React from "react"

import Base from "./base"
import { Group as Shadow } from "./shadow"
import { Group as Postbody } from "./postBody"
import Equipped from "./equipped"
import { Group as Body } from "./body"
import { Group as Arms } from "./arms"
import Pants from "./pants"
import Shoes from "./shoes"
import Shirts from "./shirts"
import Vests from "./vests"
import Armor from "./armor"
import Robe from "./robe"
import Gear from "./gear"
import Gauntlets from "./gauntlets"
import Shoulders from "./shoulders"
import { Group as Head } from "./head"
import Hair from "./hair"
import Beard from "./beard"
import Helm from "./helm"
import Headwear from "./headWear"
import Cloaks from "./cloaks"
import { Group as Thumbs } from "./thumbs"
import Weaponright from "./weaponRight"
import Weaponleft from "./weaponLeft"
import { Group as Hands } from "./hands"
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
        <Base />
        <Shadow />
        <Postbody />
        <Equipped />
        <Body />
        <Arms />
        <Pants />
        <Shoes />
        <Shirts />
        <Vests />
        <Armor />
        <Robe />
        <Gear />
        <Gauntlets />
        <Shoulders />
        <Head />
        <Hair />
        <Beard />
        <Helm />
        <Headwear />
        <Cloaks />
        <Thumbs />
        <Weaponright />
        <Weaponleft />
        <Hands />
        <Toplayer />
      </svg>
    )
  }
}

export default ManDwarf
