import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import HairOne from "./HairOne"

const CATEGORY = "hair"

export const IDS = {
  HAIR_ONE: "HairOne"
}

export const components = {
  [IDS.HAIR_ONE]: HairOne
}

export const Group = ({ props }) => (
  <g id="hair">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.HAIR_ONE,
    name: "Hair One",
    defaultColors: ["#EAD8CC"],
    colorable: true,
    component: components[IDS.HAIR_ONE],
    inUI: true,
    enabled: true,
    subGroupId: 0
  }
])

export default connectToBuilder(components, CATEGORY)
