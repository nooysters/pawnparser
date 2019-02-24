import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Panties from "./Panties"
import Bra from "./Bra"

const CATEGORY = "underwear"
const CHARACTER = "WomanMixed"
export const IDS = {
  PANTIES: "Panties",
  BRA: "Bra"
}

export const components = {
  [IDS.PANTIES]: Panties,
  [IDS.BRA]: Bra
}

export const Group = ({ props }) => (
  <g id="underwear">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.PANTIES,
    name: "Panties",
    defaultColors: ["#9EDFE8"],
    colorable: true,
    component: components[IDS.PANTIES],
    inUI: true,
    enabled: true,
    subGroupId: 1
  },
  {
    id: IDS.BRA,
    name: "Bra",
    defaultColors: ["#9EDFE8", "#262261"],
    colorable: true,
    component: components[IDS.BRA],
    inUI: true,
    enabled: true,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
