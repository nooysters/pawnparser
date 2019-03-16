import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import FrontShieldL from "./FrontShieldL"
import FrontShieldR from "./FrontShieldR"
import FlameLeft from "./FlameLeft"
import FlameRight from "./FlameRight"
import BlueFlameLeft from "./BlueFlameLeft"
import BlueFlameRight from "./BlueFlameRight"
import SpellBookL from "./SpellBookL"
import BookSpellL from "./BookSpellL"

const CATEGORY = "foreGround"
const CHARACTER = "ManDragonborn"
export const IDS = {
  FRONT_SHIELD_L: "FrontShieldL",
  FRONT_SHIELD_R: "FrontShieldR",
  FLAME_LEFT: "FlameLeft",
  FLAME_RIGHT: "FlameRight",
  BLUE_FLAME_LEFT: "BlueFlameLeft",
  BLUE_FLAME_RIGHT: "BlueFlameRight",
  SPELL_BOOK_L: "SpellBookL",
  BOOK_SPELL_L: "BookSpellL"
}

export const components = {
  [IDS.FRONT_SHIELD_L]: FrontShieldL,
  [IDS.FRONT_SHIELD_R]: FrontShieldR,
  [IDS.FLAME_LEFT]: FlameLeft,
  [IDS.FLAME_RIGHT]: FlameRight,
  [IDS.BLUE_FLAME_LEFT]: BlueFlameLeft,
  [IDS.BLUE_FLAME_RIGHT]: BlueFlameRight,
  [IDS.SPELL_BOOK_L]: SpellBookL,
  [IDS.BOOK_SPELL_L]: BookSpellL
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
    id: IDS.FRONT_SHIELD_L,
    name: "Front Shield L",
    defaultColors: ["#A8A6A3", "#FFFFFF"],
    colorable: true,
    component: components[IDS.FRONT_SHIELD_L],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.FRONT_SHIELD_R,
    name: "Front Shield R",
    defaultColors: ["#A8A6A3", "#FFFFFF"],
    colorable: true,
    component: components[IDS.FRONT_SHIELD_R],
    inUI: true,
    enabled: false,
    subGroupId: 1
  },
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
    id: IDS.SPELL_BOOK_L,
    name: "Spell Book L",
    defaultColors: [
      "#6D502E",
      "#4C4C4D",
      "#EAEAEA",
      "#FFFFFF",
      "#1D1A52",
      "#353891",
      "#DEA043",
      "#21366C"
    ],
    colorable: true,
    component: components[IDS.SPELL_BOOK_L],
    inUI: true,
    enabled: false,
    subGroupId: 5
  },
  {
    id: IDS.BOOK_SPELL_L,
    name: "Book Spell L",
    defaultColors: ["#D6D605"],
    colorable: true,
    component: components[IDS.BOOK_SPELL_L],
    inUI: true,
    enabled: false,
    subGroupId: 6
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
