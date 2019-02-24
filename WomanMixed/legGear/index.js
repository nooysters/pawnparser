import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import KneeL from "./KneeL"
import StrapsLt from "./StrapsLt"
import StrapsLb from "./StrapsLb"
import Knee from "./Knee"
import StrapsRt from "./StrapsRt"
import StrapsRb from "./StrapsRb"

const CATEGORY = "legGear"
const CHARACTER = "WomanMixed"
export const IDS = {
  KNEE_L: "KneeL",
  STRAPS_LT: "StrapsLt",
  STRAPS_LB: "StrapsLb",
  KNEE: "Knee",
  STRAPS_RT: "StrapsRt",
  STRAPS_RB: "StrapsRb"
}

export const components = {
  [IDS.KNEE_L]: KneeL,
  [IDS.STRAPS_LT]: StrapsLt,
  [IDS.STRAPS_LB]: StrapsLb,
  [IDS.KNEE]: Knee,
  [IDS.STRAPS_RT]: StrapsRt,
  [IDS.STRAPS_RB]: StrapsRb
}

export const Group = ({ props }) => (
  <g id="legGear">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.KNEE_L,
    name: "Knee L",
    defaultColors: ["#996841", "#282560", "#FFFFFF"],
    colorable: true,
    component: components[IDS.KNEE_L],
    inUI: true,
    enabled: false,
    subGroupId: 6
  },
  {
    id: IDS.STRAPS_LT,
    name: "Straps Lt",
    defaultColors: ["#573B25"],
    colorable: true,
    component: components[IDS.STRAPS_LT],
    inUI: true,
    enabled: false,
    subGroupId: 5
  },
  {
    id: IDS.STRAPS_LB,
    name: "Straps Lb",
    defaultColors: ["#573B25"],
    colorable: true,
    component: components[IDS.STRAPS_LB],
    inUI: true,
    enabled: false,
    subGroupId: 4
  },
  {
    id: IDS.KNEE,
    name: "Knee",
    defaultColors: ["#996841", "#282560", "#FFFFFF"],
    colorable: true,
    component: components[IDS.KNEE],
    inUI: true,
    enabled: false,
    subGroupId: 3
  },
  {
    id: IDS.STRAPS_RT,
    name: "Straps Rt",
    defaultColors: ["#573B25"],
    colorable: true,
    component: components[IDS.STRAPS_RT],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.STRAPS_RB,
    name: "Straps Rb",
    defaultColors: ["#573B25"],
    colorable: true,
    component: components[IDS.STRAPS_RB],
    inUI: true,
    enabled: false,
    subGroupId: 1
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
