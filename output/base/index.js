import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Peg from "./Peg"
import HalfCircle from "./HalfCircle"

const CATEGORY = "base"

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

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.PEG,
    name: "Peg",
    layerId: 0,
    colors: 1,
    component: components[IDS.PEG],
    enabled: true
  },
  {
    id: IDS.HALF_CIRCLE,
    name: "Half Circle",
    layerId: 0,
    colors: 1,
    component: components[IDS.HALF_CIRCLE],
    enabled: true
  }
])

export default connectToBuilder(components, CATEGORY)
