import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import WarhammerR1 from "./WarhammerR1"
import MaceR from "./MaceR"
import BowRight from "./BowRight"
import StaffRight from "./StaffRight"
import Axe1Right from "./Axe1Right"
import LuteRight1 from "./LuteRight1"
import DaggerRight1 from "./DaggerRight1"
import GoldAxeRight from "./GoldAxeRight"
import BattleAxeRight from "./BattleAxeRight"
import MorningStarRight2 from "./MorningStarRight2"
import LongswordRight from "./LongswordRight"
import ShortswordRight2 from "./ShortswordRight2"
import SlingShoRight from "./SlingShoRight"

const CATEGORY = "rightHandItem"

export const IDS = {
  WARHAMMER_R1: "WarhammerR1",
  MACE_R: "MaceR",
  BOW_RIGHT: "BowRight",
  STAFF_RIGHT: "StaffRight",
  AXE1_RIGHT: "Axe1Right",
  LUTE_RIGHT1: "LuteRight1",
  DAGGER_RIGHT1: "DaggerRight1",
  GOLD_AXE_RIGHT: "GoldAxeRight",
  BATTLE_AXE_RIGHT: "BattleAxeRight",
  MORNING_STAR_RIGHT2: "MorningStarRight2",
  LONGSWORD_RIGHT: "LongswordRight",
  SHORTSWORD_RIGHT2: "ShortswordRight2",
  SLING_SHO_RIGHT: "SlingShoRight"
}

export const components = {
  [IDS.WARHAMMER_R1]: WarhammerR1,
  [IDS.MACE_R]: MaceR,
  [IDS.BOW_RIGHT]: BowRight,
  [IDS.STAFF_RIGHT]: StaffRight,
  [IDS.AXE1_RIGHT]: Axe1Right,
  [IDS.LUTE_RIGHT1]: LuteRight1,
  [IDS.DAGGER_RIGHT1]: DaggerRight1,
  [IDS.GOLD_AXE_RIGHT]: GoldAxeRight,
  [IDS.BATTLE_AXE_RIGHT]: BattleAxeRight,
  [IDS.MORNING_STAR_RIGHT2]: MorningStarRight2,
  [IDS.LONGSWORD_RIGHT]: LongswordRight,
  [IDS.SHORTSWORD_RIGHT2]: ShortswordRight2,
  [IDS.SLING_SHO_RIGHT]: SlingShoRight
}

export const Group = ({ props }) => (
  <g id="rightHandItem">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.WARHAMMER_R1,
    name: "Warhammer R1",
    layerId: 0,
    colors: 1,
    component: components[IDS.WARHAMMER_R1]
  },
  {
    id: IDS.MACE_R,
    name: "Mace R",
    layerId: 0,
    colors: 1,
    component: components[IDS.MACE_R]
  },
  {
    id: IDS.BOW_RIGHT,
    name: "Bow Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.BOW_RIGHT]
  },
  {
    id: IDS.STAFF_RIGHT,
    name: "Staff Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.STAFF_RIGHT]
  },
  {
    id: IDS.AXE1_RIGHT,
    name: "Axe1 Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.AXE1_RIGHT]
  },
  {
    id: IDS.LUTE_RIGHT1,
    name: "Lute Right1",
    layerId: 0,
    colors: 1,
    component: components[IDS.LUTE_RIGHT1]
  },
  {
    id: IDS.DAGGER_RIGHT1,
    name: "Dagger Right1",
    layerId: 0,
    colors: 1,
    component: components[IDS.DAGGER_RIGHT1]
  },
  {
    id: IDS.GOLD_AXE_RIGHT,
    name: "Gold Axe Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.GOLD_AXE_RIGHT]
  },
  {
    id: IDS.BATTLE_AXE_RIGHT,
    name: "Battle Axe Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.BATTLE_AXE_RIGHT]
  },
  {
    id: IDS.MORNING_STAR_RIGHT2,
    name: "Morning Star Right2",
    layerId: 0,
    colors: 1,
    component: components[IDS.MORNING_STAR_RIGHT2]
  },
  {
    id: IDS.LONGSWORD_RIGHT,
    name: "Longsword Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.LONGSWORD_RIGHT]
  },
  {
    id: IDS.SHORTSWORD_RIGHT2,
    name: "Shortsword Right2",
    layerId: 0,
    colors: 1,
    component: components[IDS.SHORTSWORD_RIGHT2]
  },
  {
    id: IDS.SLING_SHO_RIGHT,
    name: "Sling Sho Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.SLING_SHO_RIGHT]
  }
])

export default connectToBuilder(components, CATEGORY)
