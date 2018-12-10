import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import BasicPants from "./BasicPants"
import Knickers from "./Knickers"

const CATEGORY = "pants"

export const IDS = {
  BASIC_PANTS: "BasicPants",
  KNICKERS: "Knickers"
}

export const components = {
  [IDS.BASIC_PANTS]: BasicPants,
  [IDS.KNICKERS]: Knickers
}

export const Group = ({ props }) => (
  <g id="pants">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.BASIC_PANTS,
    name: "Basic Pants",
    defaultColors: ["#646464"],
    colorable: true,
    component: components[IDS.BASIC_PANTS],
    inUI: true,
    enabled: true,
    subGroupId: 0
  },
  {
    id: IDS.KNICKERS,
    name: "Knickers",
    defaultColors: ["#B98957", "#754C29", "#262262"],
    colorable: true,
    component: components[IDS.KNICKERS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, CATEGORY)
