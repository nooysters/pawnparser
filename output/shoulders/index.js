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
    colors: 1,
    component: components[IDS.SHOULDER_PLATE],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SHOULDER_PLATE_GOLD,
    name: "Shoulder Plate Gold",
    colors: 1,
    component: components[IDS.SHOULDER_PLATE_GOLD],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.LEATHER_SHOULDER_LAYERED,
    name: "Leather Shoulder Layered",
    colors: 1,
    component: components[IDS.LEATHER_SHOULDER_LAYERED],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.NOBEL_CAPE,
    name: "Nobel Cape",
    colors: 1,
    component: components[IDS.NOBEL_CAPE],
    inUI: true,
    enabled: false,
    subGroupId: 1
  }
])

export default connectToBuilder(components, CATEGORY)
