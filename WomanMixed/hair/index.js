import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import LongSide from "./LongSide"
import Short from "./Short"
import Braids from "./Braids"
import Shaved from "./Shaved"
import BobR from "./BobR"
import BobL from "./BobL"

const CATEGORY = "hair"
const CHARACTER = "WomanMixed"
export const IDS = {
  LONG_SIDE: "LongSide",
  SHORT: "Short",
  BRAIDS: "Braids",
  SHAVED: "Shaved",
  BOB_R: "BobR",
  BOB_L: "BobL"
}

export const components = {
  [IDS.LONG_SIDE]: LongSide,
  [IDS.SHORT]: Short,
  [IDS.BRAIDS]: Braids,
  [IDS.SHAVED]: Shaved,
  [IDS.BOB_R]: BobR,
  [IDS.BOB_L]: BobL
}

export const Group = ({ props }) => (
  <g id="hair">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.LONG_SIDE,
    name: "Long Side",
    defaultColors: ["#D96842"],
    colorable: true,
    component: components[IDS.LONG_SIDE],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SHORT,
    name: "Short",
    defaultColors: ["#FDDD40"],
    colorable: true,
    component: components[IDS.SHORT],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.BRAIDS,
    name: "Braids",
    defaultColors: ["#8052A0", "#FFFFFF", "#262261"],
    colorable: true,
    component: components[IDS.BRAIDS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SHAVED,
    name: "Shaved",
    defaultColors: ["#282560"],
    colorable: true,
    component: components[IDS.SHAVED],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.BOB_R,
    name: "Bob R",
    defaultColors: ["#4691FF", "#FFFFFF"],
    colorable: true,
    component: components[IDS.BOB_R],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.BOB_L,
    name: "Bob L",
    defaultColors: ["#4691FF", "#FFFFFF"],
    colorable: true,
    component: components[IDS.BOB_L],
    inUI: true,
    enabled: false,
    subGroupId: 1
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
