import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import WhiteCollar from "./WhiteCollar"
import TuckedInShirt1 from "./TuckedInShirt1"
import PlateArmor1 from "./PlateArmor1"
import LeatherArmor1 from "./LeatherArmor1"
import BardVest from "./BardVest"
import WizardRobe from "./WizardRobe"
import PlateGoldArmor1 from "./PlateGoldArmor1"
import Vest1 from "./Vest1"

const CATEGORY = "shirt"

export const IDS = {
  WHITE_COLLAR: "WhiteCollar",
  TUCKED_IN_SHIRT1: "TuckedInShirt1",
  PLATE_ARMOR1: "PlateArmor1",
  LEATHER_ARMOR1: "LeatherArmor1",
  BARD_VEST: "BardVest",
  WIZARD_ROBE: "WizardRobe",
  PLATE_GOLD_ARMOR1: "PlateGoldArmor1",
  VEST1: "Vest1"
}

export const components = {
  [IDS.WHITE_COLLAR]: WhiteCollar,
  [IDS.TUCKED_IN_SHIRT1]: TuckedInShirt1,
  [IDS.PLATE_ARMOR1]: PlateArmor1,
  [IDS.LEATHER_ARMOR1]: LeatherArmor1,
  [IDS.BARD_VEST]: BardVest,
  [IDS.WIZARD_ROBE]: WizardRobe,
  [IDS.PLATE_GOLD_ARMOR1]: PlateGoldArmor1,
  [IDS.VEST1]: Vest1
}

export const Group = () => (
  <g id="shirt">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: [IDS.WHITE_COLLAR],
    name: "White Collar",
    layerId: 0,
    colors: 1,
    component: components[IDS.WHITE_COLLAR]
  },
  {
    id: [IDS.TUCKED_IN_SHIRT1],
    name: "Tucked In Shirt1",
    layerId: 0,
    colors: 1,
    component: components[IDS.TUCKED_IN_SHIRT1]
  },
  {
    id: [IDS.PLATE_ARMOR1],
    name: "Plate Armor1",
    layerId: 0,
    colors: 1,
    component: components[IDS.PLATE_ARMOR1]
  },
  {
    id: [IDS.LEATHER_ARMOR1],
    name: "Leather Armor1",
    layerId: 0,
    colors: 1,
    component: components[IDS.LEATHER_ARMOR1]
  },
  {
    id: [IDS.BARD_VEST],
    name: "Bard Vest",
    layerId: 0,
    colors: 1,
    component: components[IDS.BARD_VEST]
  },
  {
    id: [IDS.WIZARD_ROBE],
    name: "Wizard Robe",
    layerId: 0,
    colors: 1,
    component: components[IDS.WIZARD_ROBE]
  },
  {
    id: [IDS.PLATE_GOLD_ARMOR1],
    name: "Plate Gold Armor1",
    layerId: 0,
    colors: 1,
    component: components[IDS.PLATE_GOLD_ARMOR1]
  },
  {
    id: [IDS.VEST1],
    name: "Vest1",
    layerId: 0,
    colors: 1,
    component: components[IDS.VEST1]
  }
])

export default connectToBuilder(components, CATEGORY)
