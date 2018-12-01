import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import BlackBoots1 from "./BlackBoots1"
import BrownBoots from "./BrownBoots"
import BrownShoes from "./BrownShoes"
import StrapBoots from "./StrapBoots"

const CATEGORY = "footwear"

export const IDS = {
  BLACK_BOOTS1: "BlackBoots1",
  BROWN_BOOTS: "BrownBoots",
  BROWN_SHOES: "BrownShoes",
  STRAP_BOOTS: "StrapBoots"
}

export const components = {
  [IDS.BLACK_BOOTS1]: BlackBoots1,
  [IDS.BROWN_BOOTS]: BrownBoots,
  [IDS.BROWN_SHOES]: BrownShoes,
  [IDS.STRAP_BOOTS]: StrapBoots
}

export const Group = ({ props }) => (
  <g id="footwear">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.BLACK_BOOTS1,
    name: "Black Boots1",
    layerId: 0,
    colors: 1,
    component: components[IDS.BLACK_BOOTS1]
  },
  {
    id: IDS.BROWN_BOOTS,
    name: "Brown Boots",
    layerId: 0,
    colors: 1,
    component: components[IDS.BROWN_BOOTS]
  },
  {
    id: IDS.BROWN_SHOES,
    name: "Brown Shoes",
    layerId: 0,
    colors: 1,
    component: components[IDS.BROWN_SHOES]
  },
  {
    id: IDS.STRAP_BOOTS,
    name: "Strap Boots",
    layerId: 0,
    colors: 1,
    component: components[IDS.STRAP_BOOTS]
  }
])

export default connectToBuilder(components, CATEGORY)
