import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import BroadSwordL from "./BroadSwordL"
import SunstaffL from "./SunstaffL"
import MaulL from "./MaulL"
import TorchL from "./TorchL"
import PoleArmL from "./PoleArmL"
import GreatAxeL from "./GreatAxeL"
import SlingShotL from "./SlingShotL"
import LuteL from "./LuteL"
import ClubL from "./ClubL"
import LongBowL from "./LongBowL"
import OnyxDaggerL from "./OnyxDaggerL"

const CATEGORY = "leftHandItem"
const CHARACTER = "WomanMixed"
export const IDS = {
  BROAD_SWORD_L: "BroadSwordL",
  SUNSTAFF_L: "SunstaffL",
  MAUL_L: "MaulL",
  TORCH_L: "TorchL",
  POLE_ARM_L: "PoleArmL",
  GREAT_AXE_L: "GreatAxeL",
  SLING_SHOT_L: "SlingShotL",
  LUTE_L: "LuteL",
  CLUB_L: "ClubL",
  LONG_BOW_L: "LongBowL",
  ONYX_DAGGER_L: "OnyxDaggerL"
}

export const components = {
  [IDS.BROAD_SWORD_L]: BroadSwordL,
  [IDS.SUNSTAFF_L]: SunstaffL,
  [IDS.MAUL_L]: MaulL,
  [IDS.TORCH_L]: TorchL,
  [IDS.POLE_ARM_L]: PoleArmL,
  [IDS.GREAT_AXE_L]: GreatAxeL,
  [IDS.SLING_SHOT_L]: SlingShotL,
  [IDS.LUTE_L]: LuteL,
  [IDS.CLUB_L]: ClubL,
  [IDS.LONG_BOW_L]: LongBowL,
  [IDS.ONYX_DAGGER_L]: OnyxDaggerL
}

export const Group = ({ props }) => (
  <g id="leftHandItem">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.BROAD_SWORD_L,
    name: "Broad Sword L",
    defaultColors: ["#888787", "#FFFFFF"],
    colorable: true,
    component: components[IDS.BROAD_SWORD_L],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SUNSTAFF_L,
    name: "Sunstaff L",
    defaultColors: [
      "#654219",
      "#FFFFFF",
      "#282560",
      "#934520",
      "#BC8A2C",
      "#SVGID_"
    ],
    colorable: true,
    component: components[IDS.SUNSTAFF_L],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.MAUL_L,
    name: "Maul L",
    defaultColors: ["#888787", "#282560", "#FFFFFF"],
    colorable: true,
    component: components[IDS.MAUL_L],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.TORCH_L,
    name: "Torch L",
    defaultColors: [
      "#654219",
      "#282560",
      "#F0D118",
      "#FDD301",
      "#FDD400",
      "#SVGID_",
      "#FFFFFF",
      "#F2B61B",
      "#F39934",
      "#F17B21",
      "#F0672F",
      "#ED4424"
    ],
    colorable: false,
    component: components[IDS.TORCH_L],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.POLE_ARM_L,
    name: "Pole Arm L",
    defaultColors: ["#888787", "#FFFFFF", "#282560"],
    colorable: true,
    component: components[IDS.POLE_ARM_L],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.GREAT_AXE_L,
    name: "Great Axe L",
    defaultColors: ["#9D9D9D", "#282560"],
    colorable: true,
    component: components[IDS.GREAT_AXE_L],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SLING_SHOT_L,
    name: "Sling Shot L",
    defaultColors: ["#352915", "#464646", "#939393", "#724F1F"],
    colorable: false,
    component: components[IDS.SLING_SHOT_L],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.LUTE_L,
    name: "Lute L",
    defaultColors: ["#93712B", "#D8A43D", "#6A5121", "#B58A32", "#8D6D2B"],
    colorable: false,
    component: components[IDS.LUTE_L],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.CLUB_L,
    name: "Club L",
    defaultColors: ["#654219", "#282560", "#FFFFFF"],
    colorable: true,
    component: components[IDS.CLUB_L],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.LONG_BOW_L,
    name: "Long Bow L",
    defaultColors: ["#5F4F2D", "#20376C", "#FFFFFF"],
    colorable: true,
    component: components[IDS.LONG_BOW_L],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.ONYX_DAGGER_L,
    name: "Onyx Dagger L",
    defaultColors: ["#44403F", "#FFFFFF"],
    colorable: true,
    component: components[IDS.ONYX_DAGGER_L],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
