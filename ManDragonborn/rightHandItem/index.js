import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import BroadSwordR from "./BroadSwordR"
import SunstaffR from "./SunstaffR"
import MaulR from "./MaulR"
import TorchR from "./TorchR"
import PoleArmR from "./PoleArmR"
import GreatAxeR from "./GreatAxeR"
import SlingShotR from "./SlingShotR"
import LuteR from "./LuteR"
import ClubR from "./ClubR"
import LongBowR from "./LongBowR"
import DragonStaffR from "./DragonStaffR"

const CATEGORY = "rightHandItem"
const CHARACTER = "ManDragonborn"
export const IDS = {
  BROAD_SWORD_R: "BroadSwordR",
  SUNSTAFF_R: "SunstaffR",
  MAUL_R: "MaulR",
  TORCH_R: "TorchR",
  POLE_ARM_R: "PoleArmR",
  GREAT_AXE_R: "GreatAxeR",
  SLING_SHOT_R: "SlingShotR",
  LUTE_R: "LuteR",
  CLUB_R: "ClubR",
  LONG_BOW_R: "LongBowR",
  DRAGON_STAFF_R: "DragonStaffR"
}

export const components = {
  [IDS.BROAD_SWORD_R]: BroadSwordR,
  [IDS.SUNSTAFF_R]: SunstaffR,
  [IDS.MAUL_R]: MaulR,
  [IDS.TORCH_R]: TorchR,
  [IDS.POLE_ARM_R]: PoleArmR,
  [IDS.GREAT_AXE_R]: GreatAxeR,
  [IDS.SLING_SHOT_R]: SlingShotR,
  [IDS.LUTE_R]: LuteR,
  [IDS.CLUB_R]: ClubR,
  [IDS.LONG_BOW_R]: LongBowR,
  [IDS.DRAGON_STAFF_R]: DragonStaffR
}

export const Group = ({ props }) => (
  <g id="rightHandItem">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.BROAD_SWORD_R,
    name: "Broad Sword R",
    defaultColors: ["#898888", "#FFFFFF"],
    colorable: true,
    component: components[IDS.BROAD_SWORD_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SUNSTAFF_R,
    name: "Sunstaff R",
    defaultColors: ["#664000", "#FFFFFF", "#944200", "#BF8A00", "#SVGID_"],
    colorable: true,
    component: components[IDS.SUNSTAFF_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.MAUL_R,
    name: "Maul R",
    defaultColors: ["#898888", "#FFFFFF"],
    colorable: true,
    component: components[IDS.MAUL_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.TORCH_R,
    name: "Torch R",
    defaultColors: [
      "#664000",
      "#F1D212",
      "#FFD400",
      "#FFD500",
      "#SVGID_",
      "#FFFFFF",
      "#F4B719",
      "#F49A35",
      "#F37B20",
      "#F1662E",
      "#EE4223"
    ],
    colorable: false,
    component: components[IDS.TORCH_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.POLE_ARM_R,
    name: "Pole Arm R",
    defaultColors: ["#898888", "#FFFFFF"],
    colorable: true,
    component: components[IDS.POLE_ARM_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.GREAT_AXE_R,
    name: "Great Axe R",
    defaultColors: ["#9E9E9E", "#21366C"],
    colorable: true,
    component: components[IDS.GREAT_AXE_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SLING_SHOT_R,
    name: "Sling Shot R",
    defaultColors: ["#362812", "#454545", "#949494", "#724F1F"],
    colorable: false,
    component: components[IDS.SLING_SHOT_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.LUTE_R,
    name: "Lute R",
    defaultColors: ["#94712B", "#D9A53F", "#695020", "#B68B34", "#8E6D2B"],
    colorable: false,
    component: components[IDS.LUTE_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.CLUB_R,
    name: "Club R",
    defaultColors: ["#664000", "#FFFFFF"],
    colorable: true,
    component: components[IDS.CLUB_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.LONG_BOW_R,
    name: "Long Bow R",
    defaultColors: ["#5E4E2D", "#21376C", "#FFFFFF"],
    colorable: true,
    component: components[IDS.LONG_BOW_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.DRAGON_STAFF_R,
    name: "Dragon Staff R",
    defaultColors: ["#EFCA14", "#FFFFFF", "#353891", "#21376C"],
    colorable: true,
    component: components[IDS.DRAGON_STAFF_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
