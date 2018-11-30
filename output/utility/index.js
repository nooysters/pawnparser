import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import BotaBagRight from "./BotaBagRight"
import BotaBagLeft1 from "./BotaBagLeft1"
import QuiverRight from "./QuiverRight"
import QuiverLeft1 from "./QuiverLeft1"
import DaggerRight from "./DaggerRight"
import DaggerLeft from "./DaggerLeft"
import SwordRightHip1 from "./SwordRightHip1"
import SwordLeftHip from "./SwordLeftHip"
import ScrollRIght from "./ScrollRIght"
import ScrollRIght1 from "./ScrollRIght1"

const CATEGORY = "utility"

export const IDS = {
  BOTA_BAG_RIGHT: "BotaBagRight",
  BOTA_BAG_LEFT1: "BotaBagLeft1",
  QUIVER_RIGHT: "QuiverRight",
  QUIVER_LEFT1: "QuiverLeft1",
  DAGGER_RIGHT: "DaggerRight",
  DAGGER_LEFT: "DaggerLeft",
  SWORD_RIGHT_HIP1: "SwordRightHip1",
  SWORD_LEFT_HIP: "SwordLeftHip",
  SCROLL_R_IGHT: "ScrollRIght",
  SCROLL_R_IGHT1: "ScrollRIght1"
}

export const components = {
  [IDS.BOTA_BAG_RIGHT]: BotaBagRight,
  [IDS.BOTA_BAG_LEFT1]: BotaBagLeft1,
  [IDS.QUIVER_RIGHT]: QuiverRight,
  [IDS.QUIVER_LEFT1]: QuiverLeft1,
  [IDS.DAGGER_RIGHT]: DaggerRight,
  [IDS.DAGGER_LEFT]: DaggerLeft,
  [IDS.SWORD_RIGHT_HIP1]: SwordRightHip1,
  [IDS.SWORD_LEFT_HIP]: SwordLeftHip,
  [IDS.SCROLL_R_IGHT]: ScrollRIght,
  [IDS.SCROLL_R_IGHT1]: ScrollRIght1
}

export const Group = () => (
  <g id="utility">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: [IDS.BOTA_BAG_RIGHT],
    name: "Bota Bag Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.BOTA_BAG_RIGHT]
  },
  {
    id: [IDS.BOTA_BAG_LEFT1],
    name: "Bota Bag Left1",
    layerId: 0,
    colors: 1,
    component: components[IDS.BOTA_BAG_LEFT1]
  },
  {
    id: [IDS.QUIVER_RIGHT],
    name: "Quiver Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.QUIVER_RIGHT]
  },
  {
    id: [IDS.QUIVER_LEFT1],
    name: "Quiver Left1",
    layerId: 0,
    colors: 1,
    component: components[IDS.QUIVER_LEFT1]
  },
  {
    id: [IDS.DAGGER_RIGHT],
    name: "Dagger Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.DAGGER_RIGHT]
  },
  {
    id: [IDS.DAGGER_LEFT],
    name: "Dagger Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.DAGGER_LEFT]
  },
  {
    id: [IDS.SWORD_RIGHT_HIP1],
    name: "Sword Right Hip1",
    layerId: 0,
    colors: 1,
    component: components[IDS.SWORD_RIGHT_HIP1]
  },
  {
    id: [IDS.SWORD_LEFT_HIP],
    name: "Sword Left Hip",
    layerId: 0,
    colors: 1,
    component: components[IDS.SWORD_LEFT_HIP]
  },
  {
    id: [IDS.SCROLL_R_IGHT],
    name: "Scroll R Ight",
    layerId: 0,
    colors: 1,
    component: components[IDS.SCROLL_R_IGHT]
  },
  {
    id: [IDS.SCROLL_R_IGHT1],
    name: "Scroll R Ight1",
    layerId: 0,
    colors: 1,
    component: components[IDS.SCROLL_R_IGHT1]
  }
])

export default connectToBuilder(components, CATEGORY)
