import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Cloak from "./Cloak"
import Fur from "./Fur"
import Skarf from "./Skarf"
import LeafClasp from "./LeafClasp"

const CATEGORY = "overwear"
const CHARACTER = "ManDragonborn"
export const IDS = {
  CLOAK: "Cloak",
  FUR: "Fur",
  SKARF: "Skarf",
  LEAF_CLASP: "LeafClasp"
}

export const components = {
  [IDS.CLOAK]: Cloak,
  [IDS.FUR]: Fur,
  [IDS.SKARF]: Skarf,
  [IDS.LEAF_CLASP]: LeafClasp
}

export const Group = ({ props }) => (
  <g id="overwear">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.CLOAK,
    name: "Cloak",
    defaultColors: ["#304B60", "#21376C"],
    colorable: true,
    component: components[IDS.CLOAK],
    inUI: true,
    enabled: false,
    subGroupId: 3
  },
  {
    id: IDS.FUR,
    name: "Fur",
    defaultColors: ["#8CAAAA"],
    colorable: true,
    component: components[IDS.FUR],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.SKARF,
    name: "Skarf",
    defaultColors: ["#7F0E05"],
    colorable: true,
    component: components[IDS.SKARF],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.LEAF_CLASP,
    name: "Leaf Clasp",
    defaultColors: ["#FCDF54", "#421115"],
    colorable: true,
    component: components[IDS.LEAF_CLASP],
    inUI: true,
    enabled: false,
    subGroupId: 1
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
