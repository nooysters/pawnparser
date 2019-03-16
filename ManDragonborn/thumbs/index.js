import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Thumbs from "./Thumbs"

const CATEGORY = "thumbs"
const CHARACTER = "ManDragonborn"
export const IDS = {
  THUMBS: "Thumbs"
}

export const components = {
  [IDS.THUMBS]: Thumbs
}

export const Group = ({ props }) => (
  <g id="thumbs">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.THUMBS,
    name: "Thumbs",
    defaultColors: ["#DEA043", "#21366C"],
    colorable: false,
    component: components[IDS.THUMBS],
    inUI: true,
    enabled: true,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
