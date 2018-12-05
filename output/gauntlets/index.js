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
    defaultColors: ["#9E9E9E", "#808080", "#B8B8B8"],
    colorable: false,
    component: components[IDS.PLATE_BASICE_GAUNTLETS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.PLATE_GOLD_GAUNTLETS,
    name: "Plate Gold Gauntlets",
    defaultColors: ["#A59A76", "#8A784E", "#EED793"],
    colorable: false,
    component: components[IDS.PLATE_GOLD_GAUNTLETS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, CATEGORY)
