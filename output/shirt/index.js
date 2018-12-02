import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import WhiteCollar from "./WhiteCollar"
import TuckedInShirt from "./TuckedInShirt"
import PlateArmor from "./PlateArmor"
import LeatherArmor from "./LeatherArmor"
import BardVest from "./BardVest"
import WizardRobe from "./WizardRobe"
import PlateGoldArmor from "./PlateGoldArmor"
import Vest from "./Vest"

const CATEGORY = "shirt"

export const IDS = {
  WHITE_COLLAR: "WhiteCollar",
  TUCKED_IN_SHIRT: "TuckedInShirt",
  PLATE_ARMOR: "PlateArmor",
  LEATHER_ARMOR: "LeatherArmor",
  BARD_VEST: "BardVest",
  WIZARD_ROBE: "WizardRobe",
  PLATE_GOLD_ARMOR: "PlateGoldArmor",
  VEST: "Vest"
}

export const components = {
  [IDS.WHITE_COLLAR]: WhiteCollar,
  [IDS.TUCKED_IN_SHIRT]: TuckedInShirt,
  [IDS.PLATE_ARMOR]: PlateArmor,
  [IDS.LEATHER_ARMOR]: LeatherArmor,
  [IDS.BARD_VEST]: BardVest,
  [IDS.WIZARD_ROBE]: WizardRobe,
  [IDS.PLATE_GOLD_ARMOR]: PlateGoldArmor,
  [IDS.VEST]: Vest
}

export const Group = ({ props }) => (
  <g id="shirt">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.WHITE_COLLAR,
    name: "White Collar",
    layerId: 0,
    colors: 1,
    component: components[IDS.WHITE_COLLAR],
    enabled: true
  },
  {
    id: IDS.TUCKED_IN_SHIRT,
    name: "Tucked In Shirt",
    layerId: 0,
    colors: 1,
    component: components[IDS.TUCKED_IN_SHIRT],
    enabled: true
  },
  {
    id: IDS.PLATE_ARMOR,
    name: "Plate Armor",
    layerId: 0,
    colors: 1,
    component: components[IDS.PLATE_ARMOR],
    enabled: true
  },
  {
    id: IDS.LEATHER_ARMOR,
    name: "Leather Armor",
    layerId: 0,
    colors: 1,
    component: components[IDS.LEATHER_ARMOR],
    enabled: true
  },
  {
    id: IDS.BARD_VEST,
    name: "Bard Vest",
    layerId: 0,
    colors: 1,
    component: components[IDS.BARD_VEST],
    enabled: true
  },
  {
    id: IDS.WIZARD_ROBE,
    name: "Wizard Robe",
    layerId: 0,
    colors: 1,
    component: components[IDS.WIZARD_ROBE],
    enabled: true
  },
  {
    id: IDS.PLATE_GOLD_ARMOR,
    name: "Plate Gold Armor",
    layerId: 0,
    colors: 1,
    component: components[IDS.PLATE_GOLD_ARMOR],
    enabled: true
  },
  {
    id: IDS.VEST,
    name: "Vest",
    layerId: 0,
    colors: 1,
    component: components[IDS.VEST],
    enabled: true
  }
])

export default connectToBuilder(components, CATEGORY)
