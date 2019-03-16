import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Banner from "./Banner"
import CodPiece from "./CodPiece"
import Buckle from "./Buckle"

const CATEGORY = "armorExtras"
const CHARACTER = "ManDragonborn"
export const IDS = {
  BANNER: "Banner",
  COD_PIECE: "CodPiece",
  BUCKLE: "Buckle"
}

export const components = {
  [IDS.BANNER]: Banner,
  [IDS.COD_PIECE]: CodPiece,
  [IDS.BUCKLE]: Buckle
}

export const Group = ({ props }) => (
  <g id="armorExtras">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.BANNER,
    name: "Banner",
    defaultColors: ["#4D576B", "#9D9D9D", "#3D527E"],
    colorable: false,
    component: components[IDS.BANNER],
    inUI: true,
    enabled: false,
    subGroupId: 3
  },
  {
    id: IDS.COD_PIECE,
    name: "Cod Piece",
    defaultColors: [
      "#964922",
      "#FFFFFF",
      "#21376C",
      "#B3B3B3",
      "#9D9D9D",
      "#CCCCCC",
      "#4D4D4D",
      "#36479C",
      "#304B60"
    ],
    colorable: true,
    component: components[IDS.COD_PIECE],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.BUCKLE,
    name: "Buckle",
    defaultColors: ["#9E812F", "#FFFFFF"],
    colorable: true,
    component: components[IDS.BUCKLE],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
