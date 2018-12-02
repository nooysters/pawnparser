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

export const Group = ({ props }) => (
  <g id="shoulders">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.SHOULDER_PLATE,
    name: "Shoulder Plate",
    layerId: 0,
    colors: 1,
    component: components[IDS.SHOULDER_PLATE],
    enabled: true
  },
  {
    id: IDS.SHOULDER_PLATE_GOLD,
    name: "Shoulder Plate Gold",
    layerId: 0,
    colors: 1,
    component: components[IDS.SHOULDER_PLATE_GOLD],
    enabled: true
  },
  {
    id: IDS.LEATHER_SHOULDER_LAYERED,
    name: "Leather Shoulder Layered",
    layerId: 0,
    colors: 1,
    component: components[IDS.LEATHER_SHOULDER_LAYERED],
    enabled: true
  },
  {
    id: IDS.NOBEL_CAPE,
    name: "Nobel Cape",
    layerId: 0,
    colors: 1,
    component: components[IDS.NOBEL_CAPE],
    enabled: true
  }
])

export default connectToBuilder(components, CATEGORY)
