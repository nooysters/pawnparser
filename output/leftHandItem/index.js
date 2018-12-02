import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import WarhammerL from "./WarhammerL"
import MaceL from "./MaceL"
import BowLeft from "./BowLeft"
import StaffLeft from "./StaffLeft"
import AxeLeft from "./AxeLeft"
import LuteLeft from "./LuteLeft"
import DaggerLeft from "./DaggerLeft"
import GoldAxeLeft from "./GoldAxeLeft"
import BattleAxeLeft from "./BattleAxeLeft"
import MorningStarLeft from "./MorningStarLeft"
import LongswordLeft from "./LongswordLeft"
import ShortswordLeft from "./ShortswordLeft"
import SlingShotLeft from "./SlingShotLeft"

const CATEGORY = "leftHandItem"

export const IDS = {
  WARHAMMER_L: "WarhammerL",
  MACE_L: "MaceL",
  BOW_LEFT: "BowLeft",
  STAFF_LEFT: "StaffLeft",
  AXE_LEFT: "AxeLeft",
  LUTE_LEFT: "LuteLeft",
  DAGGER_LEFT: "DaggerLeft",
  GOLD_AXE_LEFT: "GoldAxeLeft",
  BATTLE_AXE_LEFT: "BattleAxeLeft",
  MORNING_STAR_LEFT: "MorningStarLeft",
  LONGSWORD_LEFT: "LongswordLeft",
  SHORTSWORD_LEFT: "ShortswordLeft",
  SLING_SHOT_LEFT: "SlingShotLeft"
}

export const components = {
  [IDS.WARHAMMER_L]: WarhammerL,
  [IDS.MACE_L]: MaceL,
  [IDS.BOW_LEFT]: BowLeft,
  [IDS.STAFF_LEFT]: StaffLeft,
  [IDS.AXE_LEFT]: AxeLeft,
  [IDS.LUTE_LEFT]: LuteLeft,
  [IDS.DAGGER_LEFT]: DaggerLeft,
  [IDS.GOLD_AXE_LEFT]: GoldAxeLeft,
  [IDS.BATTLE_AXE_LEFT]: BattleAxeLeft,
  [IDS.MORNING_STAR_LEFT]: MorningStarLeft,
  [IDS.LONGSWORD_LEFT]: LongswordLeft,
  [IDS.SHORTSWORD_LEFT]: ShortswordLeft,
  [IDS.SLING_SHOT_LEFT]: SlingShotLeft
}

export const Group = ({ props }) => (
  <g id="leftHandItem">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.WARHAMMER_L,
    name: "Warhammer L",
    layerId: 0,
    colors: 1,
    component: components[IDS.WARHAMMER_L],
    enabled: true
  },
  {
    id: IDS.MACE_L,
    name: "Mace L",
    layerId: 0,
    colors: 1,
    component: components[IDS.MACE_L],
    enabled: true
  },
  {
    id: IDS.BOW_LEFT,
    name: "Bow Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.BOW_LEFT],
    enabled: true
  },
  {
    id: IDS.STAFF_LEFT,
    name: "Staff Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.STAFF_LEFT],
    enabled: true
  },
  {
    id: IDS.AXE_LEFT,
    name: "Axe Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.AXE_LEFT],
    enabled: true
  },
  {
    id: IDS.LUTE_LEFT,
    name: "Lute Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.LUTE_LEFT],
    enabled: true
  },
  {
    id: IDS.DAGGER_LEFT,
    name: "Dagger Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.DAGGER_LEFT],
    enabled: true
  },
  {
    id: IDS.GOLD_AXE_LEFT,
    name: "Gold Axe Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.GOLD_AXE_LEFT],
    enabled: true
  },
  {
    id: IDS.BATTLE_AXE_LEFT,
    name: "Battle Axe Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.BATTLE_AXE_LEFT],
    enabled: true
  },
  {
    id: IDS.MORNING_STAR_LEFT,
    name: "Morning Star Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.MORNING_STAR_LEFT],
    enabled: true
  },
  {
    id: IDS.LONGSWORD_LEFT,
    name: "Longsword Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.LONGSWORD_LEFT],
    enabled: true
  },
  {
    id: IDS.SHORTSWORD_LEFT,
    name: "Shortsword Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.SHORTSWORD_LEFT],
    enabled: true
  },
  {
    id: IDS.SLING_SHOT_LEFT,
    name: "Sling Shot Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.SLING_SHOT_LEFT],
    enabled: true
  }
])

export default connectToBuilder(components, CATEGORY)
