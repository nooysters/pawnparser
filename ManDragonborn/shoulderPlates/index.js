import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import RightShoulderGuard from "./RightShoulderGuard"
import LeftShoulderGuard from "./LeftShoulderGuard"
import LeafPlateR from "./LeafPlateR"
import LeafPlateL from "./LeafPlateL"
import Cape from "./Cape"

const CATEGORY = "shoulderPlates"
const CHARACTER = "ManDragonborn"
export const IDS = {
  RIGHT_SHOULDER_GUARD: "RightShoulderGuard",
  LEFT_SHOULDER_GUARD: "LeftShoulderGuard",
  LEAF_PLATE_R: "LeafPlateR",
  LEAF_PLATE_L: "LeafPlateL",
  CAPE: "Cape"
}

export const components = {
  [IDS.RIGHT_SHOULDER_GUARD]: RightShoulderGuard,
  [IDS.LEFT_SHOULDER_GUARD]: LeftShoulderGuard,
  [IDS.LEAF_PLATE_R]: LeafPlateR,
  [IDS.LEAF_PLATE_L]: LeafPlateL,
  [IDS.CAPE]: Cape
}

export const Group = ({ props }) => (
  <g id="shoulderPlates">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.RIGHT_SHOULDER_GUARD,
    name: "Right Shoulder Guard",
    defaultColors: ["#898888"],
    colorable: true,
    component: components[IDS.RIGHT_SHOULDER_GUARD],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.LEFT_SHOULDER_GUARD,
    name: "Left Shoulder Guard",
    defaultColors: ["#898888"],
    colorable: true,
    component: components[IDS.LEFT_SHOULDER_GUARD],
    inUI: true,
    enabled: false,
    subGroupId: 1
  },
  {
    id: IDS.LEAF_PLATE_R,
    name: "Leaf Plate R",
    defaultColors: ["#BBBDBF", "#231F20", "#D0D2D3"],
    colorable: false,
    component: components[IDS.LEAF_PLATE_R],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.LEAF_PLATE_L,
    name: "Leaf Plate L",
    defaultColors: ["#BBBDBF", "#231F20", "#D0D2D3"],
    colorable: false,
    component: components[IDS.LEAF_PLATE_L],
    inUI: true,
    enabled: false,
    subGroupId: 1
  },
  {
    id: IDS.CAPE,
    name: "Cape",
    defaultColors: [
      "#505F94",
      "#303854",
      "#D8A16D",
      "#SVGID_",
      "#FFFFFF",
      "#AC7C56",
      "#F9BD7C",
      "#454273"
    ],
    colorable: false,
    component: components[IDS.CAPE],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
