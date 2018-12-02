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

export const Group = ({ props }) => (
  <g id="hands">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.LEFT_HAND,
    name: "Left Hand",
    layerId: 0,
    colors: 1,
    component: components[IDS.LEFT_HAND],
    enabled: false
  },
  {
    id: IDS.RIGHT_HAND,
    name: "Right Hand",
    layerId: 0,
    colors: 1,
    component: components[IDS.RIGHT_HAND],
    enabled: false
  }
])

export default connectToBuilder(components, CATEGORY)
