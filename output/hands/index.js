import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import RightHand from "./RightHand"
import LeftHand from "./LeftHand"

const CATEGORY = "hands"
const CHARACTER = "ManGnome"
export const IDS = {
  RIGHT_HAND: "RightHand",
  LEFT_HAND: "LeftHand"
}

export const components = {
  [IDS.RIGHT_HAND]: RightHand,
  [IDS.LEFT_HAND]: LeftHand
}

export const Group = ({ props }) => (
  <g id="hands">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.RIGHT_HAND,
    name: "Right Hand",
    defaultColors: ["#E7B080"],
    colorable: false,
    component: components[IDS.RIGHT_HAND],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.LEFT_HAND,
    name: "Left Hand",
    defaultColors: ["#E7B080"],
    colorable: false,
    component: components[IDS.LEFT_HAND],
    inUI: false,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
