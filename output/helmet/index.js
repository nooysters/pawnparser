import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import LeatherHelm from "./LeatherHelm"
import PlateHelm from "./PlateHelm"
import WizardHat from "./WizardHat"
import Antlers from "./Antlers"
import PlateHelmGold from "./PlateHelmGold"

const CATEGORY = "helmet"

export const IDS = {
  LEATHER_HELM: "LeatherHelm",
  PLATE_HELM: "PlateHelm",
  WIZARD_HAT: "WizardHat",
  ANTLERS: "Antlers",
  PLATE_HELM_GOLD: "PlateHelmGold"
}

export const components = {
  [IDS.LEATHER_HELM]: LeatherHelm,
  [IDS.PLATE_HELM]: PlateHelm,
  [IDS.WIZARD_HAT]: WizardHat,
  [IDS.ANTLERS]: Antlers,
  [IDS.PLATE_HELM_GOLD]: PlateHelmGold
}

export const Group = ({ props }) => (
  <g id="helmet">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.LEATHER_HELM,
    name: "Leather Helm",
    layerId: 0,
    colors: 1,
    component: components[IDS.LEATHER_HELM],
    enabled: true
  },
  {
    id: IDS.PLATE_HELM,
    name: "Plate Helm",
    layerId: 0,
    colors: 1,
    component: components[IDS.PLATE_HELM],
    enabled: true
  },
  {
    id: IDS.WIZARD_HAT,
    name: "Wizard Hat",
    layerId: 0,
    colors: 1,
    component: components[IDS.WIZARD_HAT],
    enabled: true
  },
  {
    id: IDS.ANTLERS,
    name: "Antlers",
    layerId: 0,
    colors: 1,
    component: components[IDS.ANTLERS],
    enabled: true
  },
  {
    id: IDS.PLATE_HELM_GOLD,
    name: "Plate Helm Gold",
    layerId: 0,
    colors: 1,
    component: components[IDS.PLATE_HELM_GOLD],
    enabled: true
  }
])

export default connectToBuilder(components, CATEGORY)
