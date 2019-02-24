import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import HalfTank from "./HalfTank"
import MediumSleve from "./MediumSleve"
import Dicky from "./Dicky"

const CATEGORY = "shirts"
const CHARACTER = "WomanMixed"
export const IDS = {
  HALF_TANK: "HalfTank",
  MEDIUM_SLEVE: "MediumSleve",
  DICKY: "Dicky"
}

export const components = {
  [IDS.HALF_TANK]: HalfTank,
  [IDS.MEDIUM_SLEVE]: MediumSleve,
  [IDS.DICKY]: Dicky
}

export const Group = ({ props }) => (
  <g id="shirts">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.HALF_TANK,
    name: "Half Tank",
    defaultColors: ["#CBC8A9", "#262261", "#FFFFFF"],
    colorable: true,
    component: components[IDS.HALF_TANK],
    inUI: true,
    enabled: true,
    subGroupId: 1
  },
  {
    id: IDS.MEDIUM_SLEVE,
    name: "Medium Sleve",
    defaultColors: ["#00A69C", "#262261", "#FFFFFF"],
    colorable: true,
    component: components[IDS.MEDIUM_SLEVE],
    inUI: true,
    enabled: false,
    subGroupId: 1
  },
  {
    id: IDS.DICKY,
    name: "Dicky",
    defaultColors: ["#746880", "#262261"],
    colorable: true,
    component: components[IDS.DICKY],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
