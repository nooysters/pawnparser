import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import NobelCape1 from "./NobelCape1"
import OpenCloak3 from "./OpenCloak3"
import WornShieldRight from "./WornShieldRight"
import WornShieldLeft from "./WornShieldLeft"

const CATEGORY = "postBody"

export const IDS = {
  NOBEL_CAPE1: "NobelCape1",
  OPEN_CLOAK3: "OpenCloak3",
  WORN_SHIELD_RIGHT: "WornShieldRight",
  WORN_SHIELD_LEFT: "WornShieldLeft"
}

export const components = {
  [IDS.NOBEL_CAPE1]: NobelCape1,
  [IDS.OPEN_CLOAK3]: OpenCloak3,
  [IDS.WORN_SHIELD_RIGHT]: WornShieldRight,
  [IDS.WORN_SHIELD_LEFT]: WornShieldLeft
}

export const Group = () => (
  <g id="postBody">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: [IDS.NOBEL_CAPE1],
    name: "Nobel Cape1",
    layerId: 0,
    colors: 1,
    component: components[IDS.NOBEL_CAPE1]
  },
  {
    id: [IDS.OPEN_CLOAK3],
    name: "Open Cloak3",
    layerId: 0,
    colors: 1,
    component: components[IDS.OPEN_CLOAK3]
  },
  {
    id: [IDS.WORN_SHIELD_RIGHT],
    name: "Worn Shield Right",
    layerId: 0,
    colors: 1,
    component: components[IDS.WORN_SHIELD_RIGHT]
  },
  {
    id: [IDS.WORN_SHIELD_LEFT],
    name: "Worn Shield Left",
    layerId: 0,
    colors: 1,
    component: components[IDS.WORN_SHIELD_LEFT]
  }
])

export default connectToBuilder(components, CATEGORY)
