import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import LeftHand from "./LeftHand"
import RightHand from "./RightHand"

const CATEGORY = "hands"

export const IDS = {
  LEFT_HAND: "LeftHand",
  RIGHT_HAND: "RightHand"
}

export const components = {
  [IDS.LEFT_HAND]: LeftHand,
  [IDS.RIGHT_HAND]: RightHand
}

export const Group = () => <g id="hands">{components}</g>

uiSchemaService.register(CATEGORY, [
  {
    id: [IDS.LEFT_HAND],
    name: "Left Hand",
    layerId: 0,
    colors: 1,
    component: components[IDS.LEFT_HAND]
  },
  {
    id: [IDS.RIGHT_HAND],
    name: "Right Hand",
    layerId: 0,
    colors: 1,
    component: components[IDS.RIGHT_HAND]
  }
])

export default connectToBuilder(components, CATEGORY)
