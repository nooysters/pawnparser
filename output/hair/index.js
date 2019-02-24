import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Wave from "./Wave"
import Long from "./Long"
import BobR from "./BobR"
import BobL from "./BobL"

const CATEGORY = "hair"
const CHARACTER = "WomanDwarf"
export const IDS = {
  WAVE: "Wave",
  LONG: "Long",
  BOB_R: "BobR",
  BOB_L: "BobL"
}

export const components = {
  [IDS.WAVE]: Wave,
  [IDS.LONG]: Long,
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
    id: IDS.WAVE,
    name: "Wave",
    defaultColors: ["#C07F00", "#FCE300"],
    colorable: true,
    component: components[IDS.WAVE],
    inUI: true,
    enabled: true,
    subGroupId: 0
  },
  {
    id: IDS.LONG,
    name: "Long",
    defaultColors: ["#37423C"],
    colorable: true,
    component: components[IDS.LONG],
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
