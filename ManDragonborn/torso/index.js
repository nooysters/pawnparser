import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import ChestPlateHeavy from "./ChestPlateHeavy"

const CATEGORY = "torso"
const CHARACTER = "ManDragonborn"
export const IDS = {
  CHEST_PLATE_HEAVY: "ChestPlateHeavy"
}

export const components = {
  [IDS.CHEST_PLATE_HEAVY]: ChestPlateHeavy
}

export const Group = ({ props }) => (
  <g id="torso">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.CHEST_PLATE_HEAVY,
    name: "Chest Plate Heavy",
    defaultColors: ["#9D9D9D", "#BBBDBF", "#FFFFFF"],
    colorable: true,
    component: components[IDS.CHEST_PLATE_HEAVY],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
