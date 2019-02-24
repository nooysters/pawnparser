import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Lips from "./Lips"
import Nose from "./Nose"
import Eyes from "./Eyes"
import Brows from "./Brows"
import PointedEars from "./PointedEars"
import Glasses from "./Glasses"

const CATEGORY = "face"
const CHARACTER = "WomanMixed"
export const IDS = {
  LIPS: "Lips",
  NOSE: "Nose",
  EYES: "Eyes",
  BROWS: "Brows",
  POINTED_EARS: "PointedEars",
  GLASSES: "Glasses"
}

export const components = {
  [IDS.LIPS]: Lips,
  [IDS.NOSE]: Nose,
  [IDS.EYES]: Eyes,
  [IDS.BROWS]: Brows,
  [IDS.POINTED_EARS]: PointedEars,
  [IDS.GLASSES]: Glasses
}

export const Group = ({ props }) => (
  <g id="face">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.LIPS,
    name: "Lips",
    defaultColors: ["#A04E55"],
    colorable: true,
    component: components[IDS.LIPS],
    inUI: true,
    enabled: true,
    subGroupId: 3
  },
  {
    id: IDS.NOSE,
    name: "Nose",
    defaultColors: [
      "#F05A22",
      "#EC4923",
      "#EC4823",
      "#E93D24",
      "#E73625",
      "#E63225",
      "#SVGID_",
      "#FFFFFF"
    ],
    colorable: false,
    component: components[IDS.NOSE],
    inUI: true,
    enabled: true,
    subGroupId: 2
  },
  {
    id: IDS.EYES,
    name: "Eyes",
    defaultColors: ["#262261"],
    colorable: true,
    component: components[IDS.EYES],
    inUI: true,
    enabled: true,
    subGroupId: 1
  },
  {
    id: IDS.BROWS,
    name: "Brows",
    defaultColors: ["#231F20"],
    colorable: true,
    component: components[IDS.BROWS],
    inUI: true,
    enabled: true,
    subGroupId: 0
  },
  {
    id: IDS.POINTED_EARS,
    name: "Pointed Ears",
    defaultColors: ["#CD977A"],
    colorable: false,
    component: components[IDS.POINTED_EARS],
    inUI: true,
    enabled: false,
    subGroupId: 4
  },
  {
    id: IDS.GLASSES,
    name: "Glasses",
    defaultColors: ["#5E491B", "#FFFFFF"],
    colorable: true,
    component: components[IDS.GLASSES],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
