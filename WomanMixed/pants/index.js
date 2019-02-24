import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import TightPants from "./TightPants"
import Boots from "./Boots"

const CATEGORY = "pants"
const CHARACTER = "WomanMixed"
export const IDS = {
  TIGHT_PANTS: "TightPants",
  BOOTS: "Boots"
}

export const components = {
  [IDS.TIGHT_PANTS]: TightPants,
  [IDS.BOOTS]: Boots
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
    id: IDS.TIGHT_PANTS,
    name: "Tight Pants",
    defaultColors: ["#A6A8AB"],
    colorable: true,
    component: components[IDS.TIGHT_PANTS],
    inUI: true,
    enabled: true,
    subGroupId: 1
  },
  {
    id: IDS.BOOTS,
    name: "Boots",
    defaultColors: ["#996841", "#282560", "#FFFFFF", "#573B25", "#3D3D3D"],
    colorable: true,
    component: components[IDS.BOOTS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
