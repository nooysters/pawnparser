import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Head from "./Head"

const CATEGORY = "head"
const CHARACTER = "WomanMixed"
export const IDS = {
  HEAD: "Head"
}

export const components = {
  [IDS.HEAD]: Head
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
    id: IDS.HEAD,
    name: "Head",
    defaultColors: ["#262261", "#CD977A"],
    colorable: false,
    component: components[IDS.HEAD],
    inUI: false,
    enabled: true,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
