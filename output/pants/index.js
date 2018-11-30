import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Layer27 from "./Layer27"
import Knickers from "./Knickers"

const CATEGORY = "pants"

export const IDS = {
  LAYER27: "Layer27",
  KNICKERS: "Knickers"
}

export const components = {
  [IDS.LAYER27]: Layer27,
  [IDS.KNICKERS]: Knickers
}

export const Group = () => <g id="pants">{components}</g>

uiSchemaService.register(CATEGORY, [
  {
    id: [IDS.LAYER27],
    name: "Layer27",
    layerId: 0,
    colors: 1,
    component: components[IDS.LAYER27]
  },
  {
    id: [IDS.KNICKERS],
    name: "Knickers",
    layerId: 0,
    colors: 1,
    component: components[IDS.KNICKERS]
  }
])

export default connectToBuilder(components, CATEGORY)
