import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import WarhammerR from "./WarhammerR"
import MaceR from "./MaceR"
import BowRight from "./BowRight"
import StaffRight from "./StaffRight"
import AxeRight from "./AxeRight"
import LuteRight from "./LuteRight"
import DaggerRight from "./DaggerRight"
import GoldAxeRight from "./GoldAxeRight"
import BattleAxeRight from "./BattleAxeRight"
import MorningStarRight from "./MorningStarRight"
import LongswordRight from "./LongswordRight"
import ShortswordRight from "./ShortswordRight"
import SlingShoRight from "./SlingShoRight"

const CATEGORY = "rightHandItem"

export const IDS = {
  WARHAMMER_R: "WarhammerR",
  MACE_R: "MaceR",
  BOW_RIGHT: "BowRight",
  STAFF_RIGHT: "StaffRight",
  AXE_RIGHT: "AxeRight",
  LUTE_RIGHT: "LuteRight",
  DAGGER_RIGHT: "DaggerRight",
  GOLD_AXE_RIGHT: "GoldAxeRight",
  BATTLE_AXE_RIGHT: "BattleAxeRight",
  MORNING_STAR_RIGHT: "MorningStarRight",
  LONGSWORD_RIGHT: "LongswordRight",
  SHORTSWORD_RIGHT: "ShortswordRight",
  SLING_SHO_RIGHT: "SlingShoRight"
}

export const components = {
  [IDS.WARHAMMER_R]: WarhammerR,
  [IDS.MACE_R]: MaceR,
  [IDS.BOW_RIGHT]: BowRight,
  [IDS.STAFF_RIGHT]: StaffRight,
  [IDS.AXE_RIGHT]: AxeRight,
  [IDS.LUTE_RIGHT]: LuteRight,
  [IDS.DAGGER_RIGHT]: DaggerRight,
  [IDS.GOLD_AXE_RIGHT]: GoldAxeRight,
  [IDS.BATTLE_AXE_RIGHT]: BattleAxeRight,
  [IDS.MORNING_STAR_RIGHT]: MorningStarRight,
  [IDS.LONGSWORD_RIGHT]: LongswordRight,
  [IDS.SHORTSWORD_RIGHT]: ShortswordRight,
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
    id: IDS.WARHAMMER_R,
    name: "Warhammer R",
    layerId: 0,
    colors: 1,
    component: components[IDS.WARHAMMER_R],
    enabled: true
  },
  {
    id: IDS.MACE_R,
    name: "Mace R",
    layerId: 0,
    colors: 1,
    component: components[IDS.MACE_R],
    enabled: true
  },
  {
    id: IDS.BOW_RIGHT,
    name: "Bow Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.BOW_RIGHT],
    enabled: true
  },
  {
    id: IDS.STAFF_RIGHT,
    name: "Staff Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.STAFF_RIGHT],
    enabled: true
  },
  {
    id: IDS.AXE_RIGHT,
    name: "Axe Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.AXE_RIGHT],
    enabled: true
  },
  {
    id: IDS.LUTE_RIGHT,
    name: "Lute Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.LUTE_RIGHT],
    enabled: true
  },
  {
    id: IDS.DAGGER_RIGHT,
    name: "Dagger Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.DAGGER_RIGHT],
    enabled: true
  },
  {
    id: IDS.GOLD_AXE_RIGHT,
    name: "Gold Axe Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.GOLD_AXE_RIGHT],
    enabled: true
  },
  {
    id: IDS.BATTLE_AXE_RIGHT,
    name: "Battle Axe Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.BATTLE_AXE_RIGHT],
    enabled: true
  },
  {
    id: IDS.MORNING_STAR_RIGHT,
    name: "Morning Star Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.MORNING_STAR_RIGHT],
    enabled: true
  },
  {
    id: IDS.LONGSWORD_RIGHT,
    name: "Longsword Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.LONGSWORD_RIGHT],
    enabled: true
  },
  {
    id: IDS.SHORTSWORD_RIGHT,
    name: "Shortsword Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.SHORTSWORD_RIGHT],
    enabled: true
  },
  {
    id: IDS.SLING_SHO_RIGHT,
    name: "Sling Sho Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.SLING_SHO_RIGHT],
    enabled: true
  }
])

export default connectToBuilder(components, CATEGORY)
