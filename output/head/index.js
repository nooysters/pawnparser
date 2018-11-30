import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import HeadBase1 from "./HeadBase1"
import EyesRound from "./EyesRound"
import NoseWide from "./NoseWide"

const CATEGORY = "head"

export const IDS = {
  HEAD_BASE1: "HeadBase1",
  EYES_ROUND: "EyesRound",
  NOSE_WIDE: "NoseWide"
}

export const components = {
  [IDS.HEAD_BASE1]: HeadBase1,
  [IDS.EYES_ROUND]: EyesRound,
  [IDS.NOSE_WIDE]: NoseWide
}

export const Group = () => <g id="head">{components}</g>

uiSchemaService.register(CATEGORY, [
  {
    id: [IDS.HEAD_BASE1],
    name: "Head Base1",
    layerId: 0,
    colors: 1,
    component: components[IDS.HEAD_BASE1]
  },
  {
    id: [IDS.EYES_ROUND],
    name: "Eyes Round",
    layerId: 0,
    colors: 1,
    component: components[IDS.EYES_ROUND]
  },
  {
    id: [IDS.NOSE_WIDE],
    name: "Nose Wide",
    layerId: 0,
    colors: 1,
    component: components[IDS.NOSE_WIDE]
  }
])

export default connectToBuilder(components, CATEGORY)
