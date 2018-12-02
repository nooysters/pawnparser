import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import BlackBoots from "./BlackBoots"
import BrownBoots from "./BrownBoots"
import BrownShoes from "./BrownShoes"
import StrapBoots from "./StrapBoots"

const CATEGORY = "footwear"

export const IDS = {
  BLACK_BOOTS: "BlackBoots",
  BROWN_BOOTS: "BrownBoots",
  BROWN_SHOES: "BrownShoes",
  STRAP_BOOTS: "StrapBoots"
}

export const components = {
  [IDS.BLACK_BOOTS]: BlackBoots,
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
    id: IDS.BLACK_BOOTS,
    name: "Black Boots",
    layerId: 0,
    colors: 1,
    component: components[IDS.BLACK_BOOTS],
    enabled: true
  },
  {
    id: IDS.BROWN_BOOTS,
    name: "Brown Boots",
    layerId: 0,
    colors: 1,
    component: components[IDS.BROWN_BOOTS],
    enabled: true
  },
  {
    id: IDS.BROWN_SHOES,
    name: "Brown Shoes",
    layerId: 0,
    colors: 1,
    component: components[IDS.BROWN_SHOES],
    enabled: true
  },
  {
    id: IDS.STRAP_BOOTS,
    name: "Strap Boots",
    layerId: 0,
    colors: 1,
    component: components[IDS.STRAP_BOOTS],
    enabled: true
  }
])

export default connectToBuilder(components, CATEGORY)
