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
    layerId: 0,
    colors: 1,
    component: components[IDS.BASIC_PANTS],
    enabled: true
  },
  {
    id: IDS.KNICKERS,
    name: "Knickers",
    layerId: 0,
    colors: 1,
    component: components[IDS.KNICKERS],
    enabled: true
  }
])

export default connectToBuilder(components, CATEGORY)
