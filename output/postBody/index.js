import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import NobelCape from "./NobelCape"
import OpenCloak from "./OpenCloak"

const CATEGORY = "postBody"

export const IDS = {
  NOBEL_CAPE: "NobelCape",
  OPEN_CLOAK: "OpenCloak"
}

export const components = {
  [IDS.NOBEL_CAPE]: NobelCape,
  [IDS.OPEN_CLOAK]: OpenCloak
}

export const Group = ({ props }) => (
  <g id="postBody">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.NOBEL_CAPE,
    name: "Nobel Cape",
    defaultColors: ["#8D4D3A"],
    colorable: false,
    component: components[IDS.NOBEL_CAPE],
    inUI: false,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.OPEN_CLOAK,
    name: "Open Cloak",
    defaultColors: ["#2B3B21"],
    colorable: false,
    component: components[IDS.OPEN_CLOAK],
    inUI: false,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, CATEGORY)
