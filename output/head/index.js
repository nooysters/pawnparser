import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import HeadBase from "./HeadBase"

const CATEGORY = "head"
const CHARACTER = "WomanDwarf"
export const IDS = {
  HEAD_BASE: "HeadBase"
}

export const components = {
  [IDS.HEAD_BASE]: HeadBase
}

export const Group = ({ props }) => (
  <g id="head">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.HEAD_BASE,
    name: "Head Base",
    defaultColors: ["#E8B180", "#BE1E2D", "#SVGID_", "#FFFFFF"],
    colorable: false,
    component: components[IDS.HEAD_BASE],
    inUI: false,
    enabled: true,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
