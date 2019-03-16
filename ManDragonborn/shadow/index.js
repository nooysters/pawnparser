import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import RamHorns from "./RamHorns"
import Antlers from "./Antlers"
import GoatHorns from "./GoatHorns"
import WideHorns from "./WideHorns"
import TatteredCape from "./TatteredCape"
import Tail from "./Tail"
import LuteL from "./LuteL"
import LuteR from "./LuteR"
import GreatAxeL from "./GreatAxeL"
import GreatAxeR from "./GreatAxeR"
import TorchL from "./TorchL"
import TorchR from "./TorchR"
import MaulL from "./MaulL"
import MaulR from "./MaulR"
import ClubL from "./ClubL"
import ClubR from "./ClubR"
import SunstaffR from "./SunstaffR"
import SunstaffL from "./SunstaffL"
import BroadSwordL from "./BroadSwordL"
import BroadSwordR from "./BroadSwordR"
import PoleArmL from "./PoleArmL"
import PoleArmR from "./PoleArmR"
import SlingShotL from "./SlingShotL"
import SlingShotR from "./SlingShotR"
import FrontShieldR from "./FrontShieldR"
import FrontShieldL from "./FrontShieldL"
import LongBowR from "./LongBowR"
import LongBowL from "./LongBowL"
import Cape from "./Cape"
import Cloak from "./Cloak"
import BlueFlameRight from "./BlueFlameRight"
import BlueFlameLeft from "./BlueFlameLeft"
import FlameLeft from "./FlameLeft"
import FlameRight from "./FlameRight"
import BookSpellL from "./BookSpellL"
import SpellBookL from "./SpellBookL"
import DragonStaffR from "./DragonStaffR"
import BodyBase from "./BodyBase"

const CATEGORY = "shadow"
const CHARACTER = "ManDragonborn"
export const IDS = {
  RAM_HORNS: "RamHorns",
  ANTLERS: "Antlers",
  GOAT_HORNS: "GoatHorns",
  WIDE_HORNS: "WideHorns",
  TATTERED_CAPE: "TatteredCape",
  TAIL: "Tail",
  LUTE_L: "LuteL",
  LUTE_R: "LuteR",
  GREAT_AXE_L: "GreatAxeL",
  GREAT_AXE_R: "GreatAxeR",
  TORCH_L: "TorchL",
  TORCH_R: "TorchR",
  MAUL_L: "MaulL",
  MAUL_R: "MaulR",
  CLUB_L: "ClubL",
  CLUB_R: "ClubR",
  SUNSTAFF_R: "SunstaffR",
  SUNSTAFF_L: "SunstaffL",
  BROAD_SWORD_L: "BroadSwordL",
  BROAD_SWORD_R: "BroadSwordR",
  POLE_ARM_L: "PoleArmL",
  POLE_ARM_R: "PoleArmR",
  SLING_SHOT_L: "SlingShotL",
  SLING_SHOT_R: "SlingShotR",
  FRONT_SHIELD_R: "FrontShieldR",
  FRONT_SHIELD_L: "FrontShieldL",
  LONG_BOW_R: "LongBowR",
  LONG_BOW_L: "LongBowL",
  CAPE: "Cape",
  CLOAK: "Cloak",
  BLUE_FLAME_RIGHT: "BlueFlameRight",
  BLUE_FLAME_LEFT: "BlueFlameLeft",
  FLAME_LEFT: "FlameLeft",
  FLAME_RIGHT: "FlameRight",
  BOOK_SPELL_L: "BookSpellL",
  SPELL_BOOK_L: "SpellBookL",
  DRAGON_STAFF_R: "DragonStaffR",
  BODY_BASE: "BodyBase"
}

export const components = {
  [IDS.RAM_HORNS]: RamHorns,
  [IDS.ANTLERS]: Antlers,
  [IDS.GOAT_HORNS]: GoatHorns,
  [IDS.WIDE_HORNS]: WideHorns,
  [IDS.TATTERED_CAPE]: TatteredCape,
  [IDS.TAIL]: Tail,
  [IDS.LUTE_L]: LuteL,
  [IDS.LUTE_R]: LuteR,
  [IDS.GREAT_AXE_L]: GreatAxeL,
  [IDS.GREAT_AXE_R]: GreatAxeR,
  [IDS.TORCH_L]: TorchL,
  [IDS.TORCH_R]: TorchR,
  [IDS.MAUL_L]: MaulL,
  [IDS.MAUL_R]: MaulR,
  [IDS.CLUB_L]: ClubL,
  [IDS.CLUB_R]: ClubR,
  [IDS.SUNSTAFF_R]: SunstaffR,
  [IDS.SUNSTAFF_L]: SunstaffL,
  [IDS.BROAD_SWORD_L]: BroadSwordL,
  [IDS.BROAD_SWORD_R]: BroadSwordR,
  [IDS.POLE_ARM_L]: PoleArmL,
  [IDS.POLE_ARM_R]: PoleArmR,
  [IDS.SLING_SHOT_L]: SlingShotL,
  [IDS.SLING_SHOT_R]: SlingShotR,
  [IDS.FRONT_SHIELD_R]: FrontShieldR,
  [IDS.FRONT_SHIELD_L]: FrontShieldL,
  [IDS.LONG_BOW_R]: LongBowR,
  [IDS.LONG_BOW_L]: LongBowL,
  [IDS.CAPE]: Cape,
  [IDS.CLOAK]: Cloak,
  [IDS.BLUE_FLAME_RIGHT]: BlueFlameRight,
  [IDS.BLUE_FLAME_LEFT]: BlueFlameLeft,
  [IDS.FLAME_LEFT]: FlameLeft,
  [IDS.FLAME_RIGHT]: FlameRight,
  [IDS.BOOK_SPELL_L]: BookSpellL,
  [IDS.SPELL_BOOK_L]: SpellBookL,
  [IDS.DRAGON_STAFF_R]: DragonStaffR,
  [IDS.BODY_BASE]: BodyBase
}

export const Group = ({ props }) => (
  <g id="shadow">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.RAM_HORNS,
    name: "Ram Horns",
    defaultColors: [],
    colorable: false,
    component: components[IDS.RAM_HORNS],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.ANTLERS,
    name: "Antlers",
    defaultColors: [],
    colorable: false,
    component: components[IDS.ANTLERS],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.GOAT_HORNS,
    name: "Goat Horns",
    defaultColors: ["#050505"],
    colorable: false,
    component: components[IDS.GOAT_HORNS],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.WIDE_HORNS,
    name: "Wide Horns",
    defaultColors: [],
    colorable: false,
    component: components[IDS.WIDE_HORNS],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.TATTERED_CAPE,
    name: "Tattered Cape",
    defaultColors: [],
    colorable: false,
    component: components[IDS.TATTERED_CAPE],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.TAIL,
    name: "Tail",
    defaultColors: [],
    colorable: false,
    component: components[IDS.TAIL],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.LUTE_L,
    name: "Lute L",
    defaultColors: [],
    colorable: false,
    component: components[IDS.LUTE_L],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.LUTE_R,
    name: "Lute R",
    defaultColors: [],
    colorable: false,
    component: components[IDS.LUTE_R],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.GREAT_AXE_L,
    name: "Great Axe L",
    defaultColors: [],
    colorable: false,
    component: components[IDS.GREAT_AXE_L],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.GREAT_AXE_R,
    name: "Great Axe R",
    defaultColors: [],
    colorable: false,
    component: components[IDS.GREAT_AXE_R],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.TORCH_L,
    name: "Torch L",
    defaultColors: [],
    colorable: false,
    component: components[IDS.TORCH_L],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.TORCH_R,
    name: "Torch R",
    defaultColors: [],
    colorable: false,
    component: components[IDS.TORCH_R],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.MAUL_L,
    name: "Maul L",
    defaultColors: [],
    colorable: false,
    component: components[IDS.MAUL_L],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.MAUL_R,
    name: "Maul R",
    defaultColors: [],
    colorable: false,
    component: components[IDS.MAUL_R],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.CLUB_L,
    name: "Club L",
    defaultColors: [],
    colorable: false,
    component: components[IDS.CLUB_L],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.CLUB_R,
    name: "Club R",
    defaultColors: [],
    colorable: false,
    component: components[IDS.CLUB_R],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SUNSTAFF_R,
    name: "Sunstaff R",
    defaultColors: [],
    colorable: false,
    component: components[IDS.SUNSTAFF_R],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SUNSTAFF_L,
    name: "Sunstaff L",
    defaultColors: [],
    colorable: false,
    component: components[IDS.SUNSTAFF_L],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.BROAD_SWORD_L,
    name: "Broad Sword L",
    defaultColors: [],
    colorable: false,
    component: components[IDS.BROAD_SWORD_L],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.BROAD_SWORD_R,
    name: "Broad Sword R",
    defaultColors: [],
    colorable: false,
    component: components[IDS.BROAD_SWORD_R],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.POLE_ARM_L,
    name: "Pole Arm L",
    defaultColors: [],
    colorable: false,
    component: components[IDS.POLE_ARM_L],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.POLE_ARM_R,
    name: "Pole Arm R",
    defaultColors: [],
    colorable: false,
    component: components[IDS.POLE_ARM_R],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SLING_SHOT_L,
    name: "Sling Shot L",
    defaultColors: [],
    colorable: false,
    component: components[IDS.SLING_SHOT_L],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SLING_SHOT_R,
    name: "Sling Shot R",
    defaultColors: [],
    colorable: false,
    component: components[IDS.SLING_SHOT_R],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.FRONT_SHIELD_R,
    name: "Front Shield R",
    defaultColors: [],
    colorable: false,
    component: components[IDS.FRONT_SHIELD_R],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.FRONT_SHIELD_L,
    name: "Front Shield L",
    defaultColors: [],
    colorable: false,
    component: components[IDS.FRONT_SHIELD_L],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.LONG_BOW_R,
    name: "Long Bow R",
    defaultColors: [],
    colorable: false,
    component: components[IDS.LONG_BOW_R],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.LONG_BOW_L,
    name: "Long Bow L",
    defaultColors: [],
    colorable: false,
    component: components[IDS.LONG_BOW_L],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.CAPE,
    name: "Cape",
    defaultColors: [],
    colorable: false,
    component: components[IDS.CAPE],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.CLOAK,
    name: "Cloak",
    defaultColors: [],
    colorable: false,
    component: components[IDS.CLOAK],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.BLUE_FLAME_RIGHT,
    name: "Blue Flame Right",
    defaultColors: [],
    colorable: false,
    component: components[IDS.BLUE_FLAME_RIGHT],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.BLUE_FLAME_LEFT,
    name: "Blue Flame Left",
    defaultColors: [],
    colorable: false,
    component: components[IDS.BLUE_FLAME_LEFT],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.FLAME_LEFT,
    name: "Flame Left",
    defaultColors: [],
    colorable: false,
    component: components[IDS.FLAME_LEFT],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.FLAME_RIGHT,
    name: "Flame Right",
    defaultColors: [],
    colorable: false,
    component: components[IDS.FLAME_RIGHT],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.BOOK_SPELL_L,
    name: "Book Spell L",
    defaultColors: [],
    colorable: false,
    component: components[IDS.BOOK_SPELL_L],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.SPELL_BOOK_L,
    name: "Spell Book L",
    defaultColors: [],
    colorable: false,
    component: components[IDS.SPELL_BOOK_L],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.DRAGON_STAFF_R,
    name: "Dragon Staff R",
    defaultColors: [],
    colorable: false,
    component: components[IDS.DRAGON_STAFF_R],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.BODY_BASE,
    name: "Body Base",
    defaultColors: [],
    colorable: false,
    component: components[IDS.BODY_BASE],
    inUI: false,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
