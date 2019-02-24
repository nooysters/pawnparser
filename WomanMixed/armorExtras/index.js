import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import LeatherTard from "./LeatherTard"
import Belt from "./Belt"
import Skirt from "./Skirt"
import Ring from "./Ring"

const CATEGORY = "armorExtras"
const CHARACTER = "WomanMixed"
export const IDS = {
  LEATHER_TARD: "LeatherTard",
  BELT: "Belt",
  SKIRT: "Skirt",
  RING: "Ring"
}

export const components = {
  [IDS.LEATHER_TARD]: LeatherTard,
  [IDS.BELT]: Belt,
  [IDS.SKIRT]: Skirt,
  [IDS.RING]: Ring
}

export const Group = ({ props }) => (
  <g id="armorExtras">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.LEATHER_TARD,
    name: "Leather Tard",
    defaultColors: ["#754C28", "#262261"],
    colorable: true,
    component: components[IDS.LEATHER_TARD],
    inUI: true,
    enabled: false,
    subGroupId: 3
  },
  {
    id: IDS.BELT,
    name: "Belt",
    defaultColors: ["#996841", "#262261"],
    colorable: true,
    component: components[IDS.BELT],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.SKIRT,
    name: "Skirt",
    defaultColors: ["#996841", "#573B25", "#262261"],
    colorable: true,
    component: components[IDS.SKIRT],
    inUI: true,
    enabled: false,
    subGroupId: 1
  },
  {
    id: IDS.RING,
    name: "Ring",
    defaultColors: ["#D89628"],
    colorable: true,
    component: components[IDS.RING],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
