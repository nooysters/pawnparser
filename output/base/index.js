import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import HalfCircle1 from "./HalfCircle1"
import Peg from "./Peg"

const CATEGORY = "base"

export const IDS = {
  HALF_CIRCLE1: "HalfCircle1",
  PEG: "Peg"
}

export const components = {
  [IDS.HALF_CIRCLE1]: HalfCircle1,
  [IDS.PEG]: Peg
}

export const Group = () => <g id="base">{components}</g>

uiSchemaService.register(CATEGORY, [
  {
    id: [IDS.HALF_CIRCLE1],
    name: "Half Circle1",
    layerId: 0,
    colors: 1,
    component: components[IDS.HALF_CIRCLE1]
  },
  {
    id: [IDS.PEG],
    name: "Peg",
    layerId: 0,
    colors: 1,
    component: components[IDS.PEG]
  }
])

export default connectToBuilder(components, CATEGORY)
