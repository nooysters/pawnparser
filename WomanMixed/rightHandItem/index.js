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
import OnyxDaggerR from "./OnyxDaggerR"

const CATEGORY = "rightHandItem"
const CHARACTER = "WomanMixed"
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
  ONYX_DAGGER_R: "OnyxDaggerR"
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
  [IDS.ONYX_DAGGER_R]: OnyxDaggerR
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
    defaultColors: ["#888787", "#FFFFFF"],
    colorable: true,
    component: components[IDS.BROAD_SWORD_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SUNSTAFF_R,
    name: "Sunstaff R",
    defaultColors: [
      "#654219",
      "#FFFFFF",
      "#282560",
      "#934520",
      "#BC8A2C",
      "#SVGID_"
    ],
    colorable: true,
    component: components[IDS.SUNSTAFF_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.MAUL_R,
    name: "Maul R",
    defaultColors: ["#888787", "#282560", "#FFFFFF"],
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
    component: components[IDS.TORCH_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.POLE_ARM_R,
    name: "Pole Arm R",
    defaultColors: ["#888787", "#FFFFFF", "#282560"],
    colorable: true,
    component: components[IDS.POLE_ARM_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.GREAT_AXE_R,
    name: "Great Axe R",
    defaultColors: ["#9D9D9D", "#282560"],
    colorable: true,
    component: components[IDS.GREAT_AXE_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SLING_SHOT_R,
    name: "Sling Shot R",
    defaultColors: ["#352915", "#464646", "#939393", "#724F1F"],
    colorable: false,
    component: components[IDS.SLING_SHOT_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.LUTE_R,
    name: "Lute R",
    defaultColors: ["#93712B", "#D8A43D", "#6A5121", "#B58A32", "#8D6D2B"],
    colorable: false,
    component: components[IDS.LUTE_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.CLUB_R,
    name: "Club R",
    defaultColors: ["#654219", "#282560", "#FFFFFF"],
    colorable: true,
    component: components[IDS.CLUB_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.LONG_BOW_R,
    name: "Long Bow R",
    defaultColors: ["#5F4F2D", "#20376C", "#FFFFFF"],
    colorable: true,
    component: components[IDS.LONG_BOW_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.ONYX_DAGGER_R,
    name: "Onyx Dagger R",
    defaultColors: ["#44403F", "#FFFFFF"],
    colorable: true,
    component: components[IDS.ONYX_DAGGER_R],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
