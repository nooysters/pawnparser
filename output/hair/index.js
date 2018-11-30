import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import Beard1 from "./Beard1"
import Beard2 from "./Beard2"
import Beard3 from "./Beard3"
import Beard4 from "./Beard4"
import Hair11 from "./Hair11"

const CATEGORY = "hair"

export const IDS = {
  BEARD1: "Beard1",
  BEARD2: "Beard2",
  BEARD3: "Beard3",
  BEARD4: "Beard4",
  HAIR11: "Hair11"
}

export const components = {
  [IDS.BEARD1]: Beard1,
  [IDS.BEARD2]: Beard2,
  [IDS.BEARD3]: Beard3,
  [IDS.BEARD4]: Beard4,
  [IDS.HAIR11]: Hair11
}

export const Group = () => (
  <g id="hair">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: [IDS.BEARD1],
    name: "Beard1",
    layerId: 0,
    colors: 1,
    component: components[IDS.BEARD1]
  },
  {
    id: [IDS.BEARD2],
    name: "Beard2",
    layerId: 0,
    colors: 1,
    component: components[IDS.BEARD2]
  },
  {
    id: [IDS.BEARD3],
    name: "Beard3",
    layerId: 0,
    colors: 1,
    component: components[IDS.BEARD3]
  },
  {
    id: [IDS.BEARD4],
    name: "Beard4",
    layerId: 0,
    colors: 1,
    component: components[IDS.BEARD4]
  },
  {
    id: [IDS.HAIR11],
    name: "Hair11",
    layerId: 0,
    colors: 1,
    component: components[IDS.HAIR11]
  }
])

export default connectToBuilder(components, CATEGORY)
