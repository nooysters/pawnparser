import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import TatteredCape from "./TatteredCape"
import Tail from "./Tail"

const CATEGORY = "background"
const CHARACTER = "WomanMixed"
export const IDS = {
  TATTERED_CAPE: "TatteredCape",
  TAIL: "Tail"
}

export const components = {
  [IDS.TATTERED_CAPE]: TatteredCape,
  [IDS.TAIL]: Tail
}

export const Group = ({ props }) => (
  <g id="background">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.TATTERED_CAPE,
    name: "Tattered Cape",
    defaultColors: ["#9B0000", "#000000", "#grad_2"],
    colorable: true,
    component: components[IDS.TATTERED_CAPE],
    inUI: true,
    enabled: false,
    subGroupId: 1
  },
  {
    id: IDS.TAIL,
    name: "Tail",
    defaultColors: ["#CD977A"],
    colorable: false,
    component: components[IDS.TAIL],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
