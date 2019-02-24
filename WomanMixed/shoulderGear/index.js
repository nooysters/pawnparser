import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import ShoulderArmorR from "./ShoulderArmorR"
import ShoulderArmorL from "./ShoulderArmorL"
import ShoulderArmorFancyL from "./ShoulderArmorFancyL"
import ShoulderArmorFancyR from "./ShoulderArmorFancyR"
import PuffySleeves from "./PuffySleeves"

const CATEGORY = "shoulderGear"
const CHARACTER = "WomanMixed"
export const IDS = {
  SHOULDER_ARMOR_R: "ShoulderArmorR",
  SHOULDER_ARMOR_L: "ShoulderArmorL",
  SHOULDER_ARMOR_FANCY_L: "ShoulderArmorFancyL",
  SHOULDER_ARMOR_FANCY_R: "ShoulderArmorFancyR",
  PUFFY_SLEEVES: "PuffySleeves"
}

export const components = {
  [IDS.SHOULDER_ARMOR_R]: ShoulderArmorR,
  [IDS.SHOULDER_ARMOR_L]: ShoulderArmorL,
  [IDS.SHOULDER_ARMOR_FANCY_L]: ShoulderArmorFancyL,
  [IDS.SHOULDER_ARMOR_FANCY_R]: ShoulderArmorFancyR,
  [IDS.PUFFY_SLEEVES]: PuffySleeves
}

export const Group = ({ props }) => (
  <g id="shoulderGear">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.SHOULDER_ARMOR_R,
    name: "Shoulder Armor R",
    defaultColors: ["#573B25", "#FFFFFF"],
    colorable: true,
    component: components[IDS.SHOULDER_ARMOR_R],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.SHOULDER_ARMOR_L,
    name: "Shoulder Armor L",
    defaultColors: ["#573B25", "#FFFFFF"],
    colorable: true,
    component: components[IDS.SHOULDER_ARMOR_L],
    inUI: true,
    enabled: false,
    subGroupId: 1
  },
  {
    id: IDS.SHOULDER_ARMOR_FANCY_L,
    name: "Shoulder Armor Fancy L",
    defaultColors: ["#754C28", "#282560", "#FFFFFF"],
    colorable: true,
    component: components[IDS.SHOULDER_ARMOR_FANCY_L],
    inUI: true,
    enabled: false,
    subGroupId: 1
  },
  {
    id: IDS.SHOULDER_ARMOR_FANCY_R,
    name: "Shoulder Armor Fancy R",
    defaultColors: ["#754C28", "#282560", "#FFFFFF"],
    colorable: true,
    component: components[IDS.SHOULDER_ARMOR_FANCY_R],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.PUFFY_SLEEVES,
    name: "Puffy Sleeves",
    defaultColors: ["#00A69C", "#FFFFFF", "#282560", "#262261"],
    colorable: true,
    component: components[IDS.PUFFY_SLEEVES],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
