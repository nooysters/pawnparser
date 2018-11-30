import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import ShoulderPlate from "./ShoulderPlate"
import ShoulderPlateGold from "./ShoulderPlateGold"
import LeatherShoulderLayered from "./LeatherShoulderLayered"
import NobelCape from "./NobelCape"

const CATEGORY = "shoulders"

export const IDS = {
  SHOULDER_PLATE: "ShoulderPlate",
  SHOULDER_PLATE_GOLD: "ShoulderPlateGold",
  LEATHER_SHOULDER_LAYERED: "LeatherShoulderLayered",
  NOBEL_CAPE: "NobelCape"
}

export const components = {
  [IDS.SHOULDER_PLATE]: ShoulderPlate,
  [IDS.SHOULDER_PLATE_GOLD]: ShoulderPlateGold,
  [IDS.LEATHER_SHOULDER_LAYERED]: LeatherShoulderLayered,
  [IDS.NOBEL_CAPE]: NobelCape
}

export const Group = () => <g id="shoulders">{components}</g>

uiSchemaService.register(CATEGORY, [
  {
    id: [IDS.SHOULDER_PLATE],
    name: "Shoulder Plate",
    layerId: 0,
    colors: 1,
    component: components[IDS.SHOULDER_PLATE]
  },
  {
    id: [IDS.SHOULDER_PLATE_GOLD],
    name: "Shoulder Plate Gold",
    layerId: 0,
    colors: 1,
    component: components[IDS.SHOULDER_PLATE_GOLD]
  },
  {
    id: [IDS.LEATHER_SHOULDER_LAYERED],
    name: "Leather Shoulder Layered",
    layerId: 0,
    colors: 1,
    component: components[IDS.LEATHER_SHOULDER_LAYERED]
  },
  {
    id: [IDS.NOBEL_CAPE],
    name: "Nobel Cape",
    layerId: 0,
    colors: 1,
    component: components[IDS.NOBEL_CAPE]
  }
])

export default connectToBuilder(components, CATEGORY)
