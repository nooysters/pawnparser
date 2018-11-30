import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import BlueFlameLeft from "./BlueFlameLeft"
import BlueFlameRight from "./BlueFlameRight"
import RoundWoodShieldLeft from "./RoundWoodShieldLeft"
import RoundWoodShieldRight from "./RoundWoodShieldRight"
import RectangleShieldRight from "./RectangleShieldRight"
import RectangleShieldLeft from "./RectangleShieldLeft"
import FlameLeft from "./FlameLeft"
import FlameRight from "./FlameRight"

const CATEGORY = "topLayer"

export const IDS = {
  BLUE_FLAME_LEFT: "BlueFlameLeft",
  BLUE_FLAME_RIGHT: "BlueFlameRight",
  ROUND_WOOD_SHIELD_LEFT: "RoundWoodShieldLeft",
  ROUND_WOOD_SHIELD_RIGHT: "RoundWoodShieldRight",
  RECTANGLE_SHIELD_RIGHT: "RectangleShieldRight",
  RECTANGLE_SHIELD_LEFT: "RectangleShieldLeft",
  FLAME_LEFT: "FlameLeft",
  FLAME_RIGHT: "FlameRight"
}

export const components = {
  [IDS.BLUE_FLAME_LEFT]: BlueFlameLeft,
  [IDS.BLUE_FLAME_RIGHT]: BlueFlameRight,
  [IDS.ROUND_WOOD_SHIELD_LEFT]: RoundWoodShieldLeft,
  [IDS.ROUND_WOOD_SHIELD_RIGHT]: RoundWoodShieldRight,
  [IDS.RECTANGLE_SHIELD_RIGHT]: RectangleShieldRight,
  [IDS.RECTANGLE_SHIELD_LEFT]: RectangleShieldLeft,
  [IDS.FLAME_LEFT]: FlameLeft,
  [IDS.FLAME_RIGHT]: FlameRight
}

export const Group = () => <g id="topLayer">{components}</g>

uiSchemaService.register(CATEGORY, [
  {
    id: [IDS.BLUE_FLAME_LEFT],
    name: "Blue Flame Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.BLUE_FLAME_LEFT]
  },
  {
    id: [IDS.BLUE_FLAME_RIGHT],
    name: "Blue Flame Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.BLUE_FLAME_RIGHT]
  },
  {
    id: [IDS.ROUND_WOOD_SHIELD_LEFT],
    name: "Round Wood Shield Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.ROUND_WOOD_SHIELD_LEFT]
  },
  {
    id: [IDS.ROUND_WOOD_SHIELD_RIGHT],
    name: "Round Wood Shield Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.ROUND_WOOD_SHIELD_RIGHT]
  },
  {
    id: [IDS.RECTANGLE_SHIELD_RIGHT],
    name: "Rectangle Shield Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.RECTANGLE_SHIELD_RIGHT]
  },
  {
    id: [IDS.RECTANGLE_SHIELD_LEFT],
    name: "Rectangle Shield Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.RECTANGLE_SHIELD_LEFT]
  },
  {
    id: [IDS.FLAME_LEFT],
    name: "Flame Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.FLAME_LEFT]
  },
  {
    id: [IDS.FLAME_RIGHT],
    name: "Flame Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.FLAME_RIGHT]
  }
])

export default connectToBuilder(components, CATEGORY)
