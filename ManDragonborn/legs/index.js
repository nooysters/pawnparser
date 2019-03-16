import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Pants from "./Pants"
import ThighArmor from "./ThighArmor"

const CATEGORY = "legs"
const CHARACTER = "ManDragonborn"
export const IDS = {
  PANTS: "Pants",
  THIGH_ARMOR: "ThighArmor"
}

export const components = {
  [IDS.PANTS]: Pants,
  [IDS.THIGH_ARMOR]: ThighArmor
}

export const Group = ({ props }) => (
  <g id="legs">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.PANTS,
    name: "Pants",
    defaultColors: ["#35312D"],
    colorable: true,
    component: components[IDS.PANTS],
    inUI: true,
    enabled: false,
    subGroupId: 1
  },
  {
    id: IDS.THIGH_ARMOR,
    name: "Thigh Armor",
    defaultColors: ["#9D9D9D", "#BBBDBF", "#FFFFFF"],
    colorable: false,
    component: components[IDS.THIGH_ARMOR],
    inUI: true,
    enabled: false,
    subGroupId: 1
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
