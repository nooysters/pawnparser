import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Peg1 from "./Peg1"
import HalfCircle1 from "./HalfCircle1"

const CATEGORY = "base"

export const IDS = {
  PEG1: "Peg1",
  HALF_CIRCLE1: "HalfCircle1"
}

export const components = {
  [IDS.PEG1]: Peg1,
  [IDS.HALF_CIRCLE1]: HalfCircle1
}

export const Group = () => (
  <g id="base">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: [IDS.PEG1],
    name: "Peg1",
    layerId: 0,
    colors: 1,
    component: components[IDS.PEG1]
  },
  {
    id: [IDS.HALF_CIRCLE1],
    name: "Half Circle1",
    layerId: 0,
    colors: 1,
    component: components[IDS.HALF_CIRCLE1]
  }
])

export default connectToBuilder(components, CATEGORY)
