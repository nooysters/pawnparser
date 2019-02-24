import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import LongSkirt from "./LongSkirt"
import MedSkirt from "./MedSkirt"
import ShortSkirt from "./ShortSkirt"

const CATEGORY = "skirts"
const CHARACTER = "WomanMixed"
export const IDS = {
  LONG_SKIRT: "LongSkirt",
  MED_SKIRT: "MedSkirt",
  SHORT_SKIRT: "ShortSkirt"
}

export const components = {
  [IDS.LONG_SKIRT]: LongSkirt,
  [IDS.MED_SKIRT]: MedSkirt,
  [IDS.SHORT_SKIRT]: ShortSkirt
}

export const Group = ({ props }) => (
  <g id="skirts">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.LONG_SKIRT,
    name: "Long Skirt",
    defaultColors: ["#6B6B6B", "#231F20"],
    colorable: true,
    component: components[IDS.LONG_SKIRT],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.MED_SKIRT,
    name: "Med Skirt",
    defaultColors: ["#006B3A", "#231F20"],
    colorable: true,
    component: components[IDS.MED_SKIRT],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SHORT_SKIRT,
    name: "Short Skirt",
    defaultColors: ["#004152"],
    colorable: true,
    component: components[IDS.SHORT_SKIRT],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
