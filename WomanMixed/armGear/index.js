import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import ArmBandL from "./ArmBandL"
import ArmBandR from "./ArmBandR"
import ArmPlateR from "./ArmPlateR"
import ArmPlateL from "./ArmPlateL"
import BracesL from "./BracesL"
import BracesR from "./BracesR"
import StrapR from "./StrapR"
import StrapL from "./StrapL"

const CATEGORY = "armGear"
const CHARACTER = "WomanMixed"
export const IDS = {
  ARM_BAND_L: "ArmBandL",
  ARM_BAND_R: "ArmBandR",
  ARM_PLATE_R: "ArmPlateR",
  ARM_PLATE_L: "ArmPlateL",
  BRACES_L: "BracesL",
  BRACES_R: "BracesR",
  STRAP_R: "StrapR",
  STRAP_L: "StrapL"
}

export const components = {
  [IDS.ARM_BAND_L]: ArmBandL,
  [IDS.ARM_BAND_R]: ArmBandR,
  [IDS.ARM_PLATE_R]: ArmPlateR,
  [IDS.ARM_PLATE_L]: ArmPlateL,
  [IDS.BRACES_L]: BracesL,
  [IDS.BRACES_R]: BracesR,
  [IDS.STRAP_R]: StrapR,
  [IDS.STRAP_L]: StrapL
}

export const Group = ({ props }) => (
  <g id="armGear">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.ARM_BAND_L,
    name: "Arm Band L",
    defaultColors: ["#754C28", "#FFFFFF"],
    colorable: true,
    component: components[IDS.ARM_BAND_L],
    inUI: true,
    enabled: false,
    subGroupId: 1
  },
  {
    id: IDS.ARM_BAND_R,
    name: "Arm Band R",
    defaultColors: ["#754C28", "#FFFFFF"],
    colorable: true,
    component: components[IDS.ARM_BAND_R],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.ARM_PLATE_R,
    name: "Arm Plate R",
    defaultColors: ["#754C28", "#FFFFFF", "#282560"],
    colorable: true,
    component: components[IDS.ARM_PLATE_R],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.ARM_PLATE_L,
    name: "Arm Plate L",
    defaultColors: ["#754C28", "#FFFFFF", "#282560"],
    colorable: true,
    component: components[IDS.ARM_PLATE_L],
    inUI: true,
    enabled: false,
    subGroupId: 1
  },
  {
    id: IDS.BRACES_L,
    name: "Braces L",
    defaultColors: ["#754C28", "#282560", "#262261", "#FFFFFF"],
    colorable: true,
    component: components[IDS.BRACES_L],
    inUI: true,
    enabled: false,
    subGroupId: 3
  },
  {
    id: IDS.BRACES_R,
    name: "Braces R",
    defaultColors: ["#754C28", "#282560", "#262261", "#FFFFFF"],
    colorable: true,
    component: components[IDS.BRACES_R],
    inUI: true,
    enabled: false,
    subGroupId: 4
  },
  {
    id: IDS.STRAP_R,
    name: "Strap R",
    defaultColors: ["#573B25"],
    colorable: true,
    component: components[IDS.STRAP_R],
    inUI: true,
    enabled: false,
    subGroupId: 4
  },
  {
    id: IDS.STRAP_L,
    name: "Strap L",
    defaultColors: ["#573B25"],
    colorable: true,
    component: components[IDS.STRAP_L],
    inUI: true,
    enabled: false,
    subGroupId: 3
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
