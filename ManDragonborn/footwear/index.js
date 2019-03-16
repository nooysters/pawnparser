import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import SteelBoots from "./SteelBoots"

const CATEGORY = "footwear"
const CHARACTER = "ManDragonborn"
export const IDS = {
  STEEL_BOOTS: "SteelBoots"
}

export const components = {
  [IDS.STEEL_BOOTS]: SteelBoots
}

export const Group = ({ props }) => (
  <g id="footwear">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.STEEL_BOOTS,
    name: "Steel Boots",
    defaultColors: ["#BBBDBF", "#21366C", "#FFFFFF", "#4F4845", "#D0D2D3"],
    colorable: true,
    component: components[IDS.STEEL_BOOTS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
