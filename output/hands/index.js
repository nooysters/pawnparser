import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Hands from "./Hands"

const CATEGORY = "hands"
const CHARACTER = "WomanDwarf"
export const IDS = {
  HANDS: "Hands"
}

export const components = {
  [IDS.HANDS]: Hands
}

export const Group = ({ props }) => (
  <g id="hands">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.HANDS,
    name: "Hands",
    defaultColors: ["#E8B180"],
    colorable: false,
    component: components[IDS.HANDS],
    inUI: false,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
