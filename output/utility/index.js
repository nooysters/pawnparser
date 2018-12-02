import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import BotaBagRight from "./BotaBagRight"
import BotaBagLeft from "./BotaBagLeft"
import QuiverRight from "./QuiverRight"
import QuiverLeft from "./QuiverLeft"
import DaggerRight from "./DaggerRight"
import DaggerLeft from "./DaggerLeft"
import SwordRightHip from "./SwordRightHip"
import SwordLeftHip from "./SwordLeftHip"
import ScrollRight from "./ScrollRight"
import ScrollLeft from "./ScrollLeft"

const CATEGORY = "utility"

export const IDS = {
  BOTA_BAG_RIGHT: "BotaBagRight",
  BOTA_BAG_LEFT: "BotaBagLeft",
  QUIVER_RIGHT: "QuiverRight",
  QUIVER_LEFT: "QuiverLeft",
  DAGGER_RIGHT: "DaggerRight",
  DAGGER_LEFT: "DaggerLeft",
  SWORD_RIGHT_HIP: "SwordRightHip",
  SWORD_LEFT_HIP: "SwordLeftHip",
  SCROLL_RIGHT: "ScrollRight",
  SCROLL_LEFT: "ScrollLeft"
}

export const components = {
  [IDS.BOTA_BAG_RIGHT]: BotaBagRight,
  [IDS.BOTA_BAG_LEFT]: BotaBagLeft,
  [IDS.QUIVER_RIGHT]: QuiverRight,
  [IDS.QUIVER_LEFT]: QuiverLeft,
  [IDS.DAGGER_RIGHT]: DaggerRight,
  [IDS.DAGGER_LEFT]: DaggerLeft,
  [IDS.SWORD_RIGHT_HIP]: SwordRightHip,
  [IDS.SWORD_LEFT_HIP]: SwordLeftHip,
  [IDS.SCROLL_RIGHT]: ScrollRight,
  [IDS.SCROLL_LEFT]: ScrollLeft
}

export const Group = ({ props }) => (
  <g id="utility">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.BOTA_BAG_RIGHT,
    name: "Bota Bag Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.BOTA_BAG_RIGHT],
    enabled: true
  },
  {
    id: IDS.BOTA_BAG_LEFT,
    name: "Bota Bag Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.BOTA_BAG_LEFT],
    enabled: true
  },
  {
    id: IDS.QUIVER_RIGHT,
    name: "Quiver Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.QUIVER_RIGHT],
    enabled: true
  },
  {
    id: IDS.QUIVER_LEFT,
    name: "Quiver Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.QUIVER_LEFT],
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
    id: IDS.DAGGER_LEFT,
    name: "Dagger Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.DAGGER_LEFT],
    enabled: true
  },
  {
    id: IDS.SWORD_RIGHT_HIP,
    name: "Sword Right Hip",
    layerId: 0,
    colors: 1,
    component: components[IDS.SWORD_RIGHT_HIP],
    enabled: true
  },
  {
    id: IDS.SWORD_LEFT_HIP,
    name: "Sword Left Hip",
    layerId: 0,
    colors: 1,
    component: components[IDS.SWORD_LEFT_HIP],
    enabled: true
  },
  {
    id: IDS.SCROLL_RIGHT,
    name: "Scroll Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.SCROLL_RIGHT],
    enabled: true
  },
  {
    id: IDS.SCROLL_LEFT,
    name: "Scroll Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.SCROLL_LEFT],
    enabled: true
  }
])

export default connectToBuilder(components, CATEGORY)
