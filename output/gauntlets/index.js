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

export const Group = ({ props }) => (
  <g id="gauntlets">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.PLATE_BASICE_GAUNTLETS,
    name: "Plate Basice Gauntlets",
    colors: 1,
    component: components[IDS.PLATE_BASICE_GAUNTLETS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.PLATE_GOLD_GAUNTLETS,
    name: "Plate Gold Gauntlets",
    colors: 1,
    component: components[IDS.PLATE_GOLD_GAUNTLETS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, CATEGORY)
