import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Peg from "./Peg"
import HalfCircle from "./HalfCircle"

const CATEGORY = "base"
const CHARACTER = "ManGnome"
export const IDS = {
  PEG: "Peg",
  HALF_CIRCLE: "HalfCircle"
}

export const components = {
  [IDS.PEG]: Peg,
  [IDS.HALF_CIRCLE]: HalfCircle
}

export const Group = ({ props }) => (
  <g id="base">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.PEG,
    name: "Peg",
    defaultColors: ["#3F3F40"],
    colorable: false,
    component: components[IDS.PEG],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.HALF_CIRCLE,
    name: "Half Circle",
    defaultColors: [],
    colorable: false,
    component: components[IDS.HALF_CIRCLE],
    inUI: true,
    enabled: true,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
