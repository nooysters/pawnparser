import React from "react"

import { Group as Shadow } from "./shadow"
import Background from "./background"
import { Group as Body } from "./body"
import Pants from "./pants"
import Shoes from "./shoes"
import Shirts from "./shirts"
import Coats from "./coats"
import Braces from "./braces"
import Gear from "./gear"
import Shoulders from "./shoulders"
import { Group as Head } from "./head"
import Face from "./face"
import Hair from "./hair"
import Cloaks from "./cloaks"
import Headgear from "./headGear"
import { Group as Thumbs } from "./thumbs"
import Lefthanditem from "./leftHandItem"
import Righthanditem from "./rightHandItem"
import { Group as Hands } from "./hands"
import Foreground from "./foreground"
import Base from "./base"

class ManGnome extends React.Component {
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
        viewBox="0 0 95 152.8000031"
      >
        <Shadow />
        <Background />
        <Body />
        <Pants />
        <Shoes />
        <Shirts />
        <Coats />
        <Braces />
        <Gear />
        <Shoulders />
        <Head />
        <Face />
        <Hair />
        <Cloaks />
        <Headgear />
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

export default ManGnome
