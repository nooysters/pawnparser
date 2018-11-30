import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import PlateBasiceGauntlets from "./PlateBasiceGauntlets"
import PlateGoldGauntlets from "./PlateGoldGauntlets"

const CATEGORY = "gauntlets"

export const IDS = {
  PLATE_BASICE_GAUNTLETS: "PlateBasiceGauntlets",
  PLATE_GOLD_GAUNTLETS: "PlateGoldGauntlets"
}

export const components = {
  [IDS.PLATE_BASICE_GAUNTLETS]: PlateBasiceGauntlets,
  [IDS.PLATE_GOLD_GAUNTLETS]: PlateGoldGauntlets
}

export const Group = () => <g id="gauntlets">{components}</g>

uiSchemaService.register(CATEGORY, [
  {
    id: [IDS.PLATE_BASICE_GAUNTLETS],
    name: "Plate Basice Gauntlets",
    layerId: 0,
    colors: 1,
    component: components[IDS.PLATE_BASICE_GAUNTLETS]
  },
  {
    id: [IDS.PLATE_GOLD_GAUNTLETS],
    name: "Plate Gold Gauntlets",
    layerId: 0,
    colors: 1,
    component: components[IDS.PLATE_GOLD_GAUNTLETS]
  }
])

export default connectToBuilder(components, CATEGORY)
