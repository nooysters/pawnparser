import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import EyeLids from "./EyeLids"
import EyesSquinty from "./EyesSquinty"

const CATEGORY = "face"
const CHARACTER = "ManDragonborn"
export const IDS = {
  EYE_LIDS: "EyeLids",
  EYES_SQUINTY: "EyesSquinty"
}

export const components = {
  [IDS.EYE_LIDS]: EyeLids,
  [IDS.EYES_SQUINTY]: EyesSquinty
}

export const Group = ({ props }) => (
  <g id="face">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.EYE_LIDS,
    name: "Eye Lids",
    defaultColors: ["#3F4040"],
    colorable: true,
    component: components[IDS.EYE_LIDS],
    inUI: true,
    enabled: true,
    subGroupId: 0
  },
  {
    id: IDS.EYES_SQUINTY,
    name: "Eyes Squinty",
    defaultColors: ["#99999A"],
    colorable: true,
    component: components[IDS.EYES_SQUINTY],
    inUI: true,
    enabled: true,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
