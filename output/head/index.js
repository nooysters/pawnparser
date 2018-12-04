import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import HeadBase from "./HeadBase"

const CATEGORY = "head"

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

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.HEAD_BASE,
    name: "Head Base",
    colors: 1,
    component: components[IDS.HEAD_BASE],
    inUI: false,
    enabled: true,
    subGroupId: 0
  }
])

export default connectToBuilder(components, CATEGORY)
