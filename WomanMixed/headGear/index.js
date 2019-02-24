import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import DragonSkull from "./DragonSkull"
import Turban from "./Turban"
import SunHat from "./SunHat"

const CATEGORY = "headGear"
const CHARACTER = "WomanMixed"
export const IDS = {
  DRAGON_SKULL: "DragonSkull",
  TURBAN: "Turban",
  SUN_HAT: "SunHat"
}

export const components = {
  [IDS.DRAGON_SKULL]: DragonSkull,
  [IDS.TURBAN]: Turban,
  [IDS.SUN_HAT]: SunHat
}

export const Group = ({ props }) => (
  <g id="headGear">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.DRAGON_SKULL,
    name: "Dragon Skull",
    defaultColors: [
      "#262261",
      "#B5B5AE",
      "#SVGID_",
      "#33322F",
      "#BF0A00",
      "#E59572",
      "#FFF4BF",
      "#FFF7D2",
      "#FFFBE6",
      "#FFFDF4",
      "#FFFFFD",
      "#FFFFFF",
      "#E7A4A0"
    ],
    colorable: false,
    component: components[IDS.DRAGON_SKULL],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.TURBAN,
    name: "Turban",
    defaultColors: ["#785C8E", "#96842D"],
    colorable: true,
    component: components[IDS.TURBAN],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SUN_HAT,
    name: "Sun Hat",
    defaultColors: ["#2E94AF", "#262261", "#FFFFFF"],
    colorable: true,
    component: components[IDS.SUN_HAT],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
