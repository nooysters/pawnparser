import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import WarhammerL from "./WarhammerL"
import MaceL from "./MaceL"
import BowLeft1 from "./BowLeft1"
import StaffLeft from "./StaffLeft"
import Axe1Left from "./Axe1Left"
import LuteLeft2 from "./LuteLeft2"
import DaggerLeft2 from "./DaggerLeft2"
import GoldAxeLeft from "./GoldAxeLeft"
import BattleAxeLeft from "./BattleAxeLeft"
import MorningStarLeft1 from "./MorningStarLeft1"
import LongswordLeft from "./LongswordLeft"
import ShortswordLeft1 from "./ShortswordLeft1"
import SlingShotLeft from "./SlingShotLeft"

const CATEGORY = "leftHandItem"

export const IDS = {
  WARHAMMER_L: "WarhammerL",
  MACE_L: "MaceL",
  BOW_LEFT1: "BowLeft1",
  STAFF_LEFT: "StaffLeft",
  AXE1_LEFT: "Axe1Left",
  LUTE_LEFT2: "LuteLeft2",
  DAGGER_LEFT2: "DaggerLeft2",
  GOLD_AXE_LEFT: "GoldAxeLeft",
  BATTLE_AXE_LEFT: "BattleAxeLeft",
  MORNING_STAR_LEFT1: "MorningStarLeft1",
  LONGSWORD_LEFT: "LongswordLeft",
  SHORTSWORD_LEFT1: "ShortswordLeft1",
  SLING_SHOT_LEFT: "SlingShotLeft"
}

export const components = {
  [IDS.WARHAMMER_L]: WarhammerL,
  [IDS.MACE_L]: MaceL,
  [IDS.BOW_LEFT1]: BowLeft1,
  [IDS.STAFF_LEFT]: StaffLeft,
  [IDS.AXE1_LEFT]: Axe1Left,
  [IDS.LUTE_LEFT2]: LuteLeft2,
  [IDS.DAGGER_LEFT2]: DaggerLeft2,
  [IDS.GOLD_AXE_LEFT]: GoldAxeLeft,
  [IDS.BATTLE_AXE_LEFT]: BattleAxeLeft,
  [IDS.MORNING_STAR_LEFT1]: MorningStarLeft1,
  [IDS.LONGSWORD_LEFT]: LongswordLeft,
  [IDS.SHORTSWORD_LEFT1]: ShortswordLeft1,
  [IDS.SLING_SHOT_LEFT]: SlingShotLeft
}

export const Group = () => (
  <g id="leftHandItem">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: [IDS.WARHAMMER_L],
    name: "Warhammer L",
    layerId: 0,
    colors: 1,
    component: components[IDS.WARHAMMER_L]
  },
  {
    id: [IDS.MACE_L],
    name: "Mace L",
    layerId: 0,
    colors: 1,
    component: components[IDS.MACE_L]
  },
  {
    id: [IDS.BOW_LEFT1],
    name: "Bow Left1",
    layerId: 0,
    colors: 1,
    component: components[IDS.BOW_LEFT1]
  },
  {
    id: [IDS.STAFF_LEFT],
    name: "Staff Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.STAFF_LEFT]
  },
  {
    id: [IDS.AXE1_LEFT],
    name: "Axe1 Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.AXE1_LEFT]
  },
  {
    id: [IDS.LUTE_LEFT2],
    name: "Lute Left2",
    layerId: 0,
    colors: 1,
    component: components[IDS.LUTE_LEFT2]
  },
  {
    id: [IDS.DAGGER_LEFT2],
    name: "Dagger Left2",
    layerId: 0,
    colors: 1,
    component: components[IDS.DAGGER_LEFT2]
  },
  {
    id: [IDS.GOLD_AXE_LEFT],
    name: "Gold Axe Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.GOLD_AXE_LEFT]
  },
  {
    id: [IDS.BATTLE_AXE_LEFT],
    name: "Battle Axe Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.BATTLE_AXE_LEFT]
  },
  {
    id: [IDS.MORNING_STAR_LEFT1],
    name: "Morning Star Left1",
    layerId: 0,
    colors: 1,
    component: components[IDS.MORNING_STAR_LEFT1]
  },
  {
    id: [IDS.LONGSWORD_LEFT],
    name: "Longsword Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.LONGSWORD_LEFT]
  },
  {
    id: [IDS.SHORTSWORD_LEFT1],
    name: "Shortsword Left1",
    layerId: 0,
    colors: 1,
    component: components[IDS.SHORTSWORD_LEFT1]
  },
  {
    id: [IDS.SLING_SHOT_LEFT],
    name: "Sling Shot Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.SLING_SHOT_LEFT]
  }
])

export default connectToBuilder(components, CATEGORY)
