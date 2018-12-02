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
    layerId: 0,
    colors: 1,
    component: components[IDS.NOBEL_CAPE],
    enabled: false
  },
  {
    id: IDS.OPEN_CLOAK,
    name: "Open Cloak",
    layerId: 0,
    colors: 1,
    component: components[IDS.OPEN_CLOAK],
    enabled: false
  }
])

export default connectToBuilder(components, CATEGORY)
