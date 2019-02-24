import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import BodyBase from "./BodyBase"

const CATEGORY = "body"
const CHARACTER = "WomanMixed"
export const IDS = {
  BODY_BASE: "BodyBase"
}

export const components = {
  [IDS.BODY_BASE]: BodyBase
}

export const Group = ({ props }) => (
  <g id="body">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.BODY_BASE,
    name: "Body Base",
    defaultColors: ["#CD977A", "#262261"],
    colorable: false,
    component: components[IDS.BODY_BASE],
    inUI: false,
    enabled: true,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
