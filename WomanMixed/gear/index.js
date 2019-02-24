import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Pouch from "./Pouch"
import SideBodyBagR from "./SideBodyBagR"
import SideBodyBag from "./SideBodyBag"
import QuiverR from "./QuiverR"
import QuiverL from "./QuiverL"

const CATEGORY = "gear"
const CHARACTER = "WomanMixed"
export const IDS = {
  POUCH: "Pouch",
  SIDE_BODY_BAG_R: "SideBodyBagR",
  SIDE_BODY_BAG: "SideBodyBag",
  QUIVER_R: "QuiverR",
  QUIVER_L: "QuiverL"
}

export const components = {
  [IDS.POUCH]: Pouch,
  [IDS.SIDE_BODY_BAG_R]: SideBodyBagR,
  [IDS.SIDE_BODY_BAG]: SideBodyBag,
  [IDS.QUIVER_R]: QuiverR,
  [IDS.QUIVER_L]: QuiverL
}

export const Group = ({ props }) => (
  <g id="gear">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.POUCH,
    name: "Pouch",
    defaultColors: ["#4D391B", "#7D5B3C", "#362812", "#A76F3A"],
    colorable: false,
    component: components[IDS.POUCH],
    inUI: true,
    enabled: false,
    subGroupId: 4
  },
  {
    id: IDS.SIDE_BODY_BAG_R,
    name: "Side Body Bag R",
    defaultColors: ["#724B2B", "#FFFFFF"],
    colorable: true,
    component: components[IDS.SIDE_BODY_BAG_R],
    inUI: true,
    enabled: false,
    subGroupId: 3
  },
  {
    id: IDS.SIDE_BODY_BAG,
    name: "Side Body Bag",
    defaultColors: ["#724B2B", "#FFFFFF"],
    colorable: true,
    component: components[IDS.SIDE_BODY_BAG],
    inUI: true,
    enabled: false,
    subGroupId: 3
  },
  {
    id: IDS.QUIVER_R,
    name: "Quiver R",
    defaultColors: [
      "#542911",
      "#8A5D3B",
      "#C3996B",
      "#6E634F",
      "#4076B7",
      "#42A2DA",
      "#9E7731",
      "#359B5A",
      "#63C197"
    ],
    colorable: false,
    component: components[IDS.QUIVER_R],
    inUI: true,
    enabled: false,
    subGroupId: 6
  },
  {
    id: IDS.QUIVER_L,
    name: "Quiver L",
    defaultColors: [
      "#542911",
      "#8A5D3B",
      "#C3996B",
      "#6E634F",
      "#4076B7",
      "#42A2DA",
      "#9E7731",
      "#359B5A",
      "#63C197"
    ],
    colorable: false,
    component: components[IDS.QUIVER_L],
    inUI: true,
    enabled: false,
    subGroupId: 5
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
