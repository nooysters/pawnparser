import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import LeatherHelm1 from "./LeatherHelm1"
import PlateHelm11 from "./PlateHelm11"
import WizardHat from "./WizardHat"
import Antlers1 from "./Antlers1"
import PlateHelmGold from "./PlateHelmGold"

const CATEGORY = "helmet"

export const IDS = {
  LEATHER_HELM1: "LeatherHelm1",
  PLATE_HELM11: "PlateHelm11",
  WIZARD_HAT: "WizardHat",
  ANTLERS1: "Antlers1",
  PLATE_HELM_GOLD: "PlateHelmGold"
}

export const components = {
  [IDS.LEATHER_HELM1]: LeatherHelm1,
  [IDS.PLATE_HELM11]: PlateHelm11,
  [IDS.WIZARD_HAT]: WizardHat,
  [IDS.ANTLERS1]: Antlers1,
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
    id: IDS.LEATHER_HELM1,
    name: "Leather Helm1",
    layerId: 0,
    colors: 1,
    component: components[IDS.LEATHER_HELM1]
  },
  {
    id: IDS.PLATE_HELM11,
    name: "Plate Helm11",
    layerId: 0,
    colors: 1,
    component: components[IDS.PLATE_HELM11]
  },
  {
    id: IDS.WIZARD_HAT,
    name: "Wizard Hat",
    layerId: 0,
    colors: 1,
    component: components[IDS.WIZARD_HAT]
  },
  {
    id: IDS.ANTLERS1,
    name: "Antlers1",
    layerId: 0,
    colors: 1,
    component: components[IDS.ANTLERS1]
  },
  {
    id: IDS.PLATE_HELM_GOLD,
    name: "Plate Helm Gold",
    layerId: 0,
    colors: 1,
    component: components[IDS.PLATE_HELM_GOLD]
  }
])

export default connectToBuilder(components, CATEGORY)
