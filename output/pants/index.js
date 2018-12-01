import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Knickers from "./Knickers"

const CATEGORY = "pants"

export const IDS = {
  KNICKERS: "Knickers"
}

export const components = {
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
    id: IDS.KNICKERS,
    name: "Knickers",
    layerId: 0,
    colors: 1,
    component: components[IDS.KNICKERS]
  }
])

export default connectToBuilder(components, CATEGORY)
