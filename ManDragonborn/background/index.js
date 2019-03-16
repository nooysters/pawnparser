import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import TatteredCape from "./TatteredCape"
import Tail from "./Tail"
import Cape from "./Cape"
import SolidColor from "./SolidColor"
import CloakBack from "./CloakBack"

const CATEGORY = "background"
const CHARACTER = "ManDragonborn"
export const IDS = {
  TATTERED_CAPE: "TatteredCape",
  TAIL: "Tail",
  CAPE: "Cape",
  SOLID_COLOR: "SolidColor",
  CLOAK_BACK: "CloakBack"
}

export const components = {
  [IDS.TATTERED_CAPE]: TatteredCape,
  [IDS.TAIL]: Tail,
  [IDS.CAPE]: Cape,
  [IDS.SOLID_COLOR]: SolidColor,
  [IDS.CLOAK_BACK]: CloakBack
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
    defaultColors: ["#DEA043"],
    colorable: false,
    component: components[IDS.TAIL],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.CAPE,
    name: "Cape",
    defaultColors: ["#505F94", "#2E2C42"],
    colorable: true,
    component: components[IDS.CAPE],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SOLID_COLOR,
    name: "Solid Color",
    defaultColors: ["#848484"],
    colorable: true,
    component: components[IDS.SOLID_COLOR],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.CLOAK_BACK,
    name: "Cloak Back",
    defaultColors: ["#19252D"],
    colorable: true,
    component: components[IDS.CLOAK_BACK],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
