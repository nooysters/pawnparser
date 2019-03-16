import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import SilverBraces from "./SilverBraces"

const CATEGORY = "braces"
const CHARACTER = "ManDragonborn"
export const IDS = {
  SILVER_BRACES: "SilverBraces"
}

export const components = {
  [IDS.SILVER_BRACES]: SilverBraces
}

export const Group = ({ props }) => (
  <g id="braces">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.SILVER_BRACES,
    name: "Silver Braces",
    defaultColors: ["#BBBDBF", "#9D9D9D"],
    colorable: true,
    component: components[IDS.SILVER_BRACES],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
