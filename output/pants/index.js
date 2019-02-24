import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import ShortPants from "./ShortPants"
import Pants from "./Pants"

const CATEGORY = "pants"
const CHARACTER = "WomanDwarf"
export const IDS = {
  SHORT_PANTS: "ShortPants",
  PANTS: "Pants"
}

export const components = {
  [IDS.SHORT_PANTS]: ShortPants,
  [IDS.PANTS]: Pants
}

export const Group = ({ props }) => (
  <g id="pants">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.SHORT_PANTS,
    name: "Short Pants",
    defaultColors: ["#643A00"],
    colorable: true,
    component: components[IDS.SHORT_PANTS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.PANTS,
    name: "Pants",
    defaultColors: ["#643A00"],
    colorable: true,
    component: components[IDS.PANTS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
