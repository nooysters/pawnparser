import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import FlameLeft from "./FlameLeft"
import FlameRight from "./FlameRight"
import BlueFlameLeft from "./BlueFlameLeft"
import BlueFlameRight from "./BlueFlameRight"
import FireFistsL from "./FireFistsL"
import FireFistsR from "./FireFistsR"
import FrontShieldL from "./FrontShieldL"
import FrontShieldR from "./FrontShieldR"

const CATEGORY = "foreGround"
const CHARACTER = "WomanMixed"
export const IDS = {
  FLAME_LEFT: "FlameLeft",
  FLAME_RIGHT: "FlameRight",
  BLUE_FLAME_LEFT: "BlueFlameLeft",
  BLUE_FLAME_RIGHT: "BlueFlameRight",
  FIRE_FISTS_L: "FireFistsL",
  FIRE_FISTS_R: "FireFistsR",
  FRONT_SHIELD_L: "FrontShieldL",
  FRONT_SHIELD_R: "FrontShieldR"
}

export const components = {
  [IDS.FLAME_LEFT]: FlameLeft,
  [IDS.FLAME_RIGHT]: FlameRight,
  [IDS.BLUE_FLAME_LEFT]: BlueFlameLeft,
  [IDS.BLUE_FLAME_RIGHT]: BlueFlameRight,
  [IDS.FIRE_FISTS_L]: FireFistsL,
  [IDS.FIRE_FISTS_R]: FireFistsR,
  [IDS.FRONT_SHIELD_L]: FrontShieldL,
  [IDS.FRONT_SHIELD_R]: FrontShieldR
}

export const Group = ({ props }) => (
  <g id="foreGround">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.FLAME_LEFT,
    name: "Flame Left",
    defaultColors: [
      "#F1D212",
      "#F4B81A",
      "#F49A35",
      "#F47B20",
      "#F1662F",
      "#EF4223"
    ],
    colorable: false,
    component: components[IDS.FLAME_LEFT],
    inUI: true,
    enabled: false,
    subGroupId: 4
  },
  {
    id: IDS.FLAME_RIGHT,
    name: "Flame Right",
    defaultColors: [
      "#F1D212",
      "#F4B81A",
      "#F49A35",
      "#F47B20",
      "#F1662F",
      "#EF4223"
    ],
    colorable: false,
    component: components[IDS.FLAME_RIGHT],
    inUI: true,
    enabled: false,
    subGroupId: 3
  },
  {
    id: IDS.BLUE_FLAME_LEFT,
    name: "Blue Flame Left",
    defaultColors: [
      "#80D0DC",
      "#30BFCA",
      "#5BC6D1",
      "#A8DDE6",
      "#C0E6F0",
      "#E5F5F8"
    ],
    colorable: false,
    component: components[IDS.BLUE_FLAME_LEFT],
    inUI: true,
    enabled: false,
    subGroupId: 4
  },
  {
    id: IDS.BLUE_FLAME_RIGHT,
    name: "Blue Flame Right",
    defaultColors: [
      "#80D0DC",
      "#30BFCA",
      "#5BC6D1",
      "#A8DDE6",
      "#C0E6F0",
      "#E5F5F8"
    ],
    colorable: false,
    component: components[IDS.BLUE_FLAME_RIGHT],
    inUI: true,
    enabled: false,
    subGroupId: 3
  },
  {
    id: IDS.FIRE_FISTS_L,
    name: "Fire Fists L",
    defaultColors: [
      "#CC9900",
      "#CC7900",
      "#CC6500",
      "#E15000",
      "#F24000",
      "#FC3600",
      "#FF3300",
      "#SVGID_"
    ],
    colorable: false,
    component: components[IDS.FIRE_FISTS_L],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.FIRE_FISTS_R,
    name: "Fire Fists R",
    defaultColors: [
      "#CC9900",
      "#CC7900",
      "#CC6500",
      "#E15000",
      "#F24000",
      "#FC3600",
      "#FF3300",
      "#SVGID_"
    ],
    colorable: false,
    component: components[IDS.FIRE_FISTS_R],
    inUI: true,
    enabled: false,
    subGroupId: 1
  },
  {
    id: IDS.FRONT_SHIELD_L,
    name: "Front Shield L",
    defaultColors: ["#A8A6A3", "#262261", "#FFFFFF"],
    colorable: true,
    component: components[IDS.FRONT_SHIELD_L],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.FRONT_SHIELD_R,
    name: "Front Shield R",
    defaultColors: ["#A8A6A3", "#262261", "#FFFFFF"],
    colorable: true,
    component: components[IDS.FRONT_SHIELD_R],
    inUI: true,
    enabled: false,
    subGroupId: 1
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
