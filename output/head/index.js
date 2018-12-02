import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import HeadBase from "./HeadBase"
import EyesRound from "./EyesRound"
import NoseWide from "./NoseWide"

const CATEGORY = "head"

export const IDS = {
  HEAD_BASE: "HeadBase",
  EYES_ROUND: "EyesRound",
  NOSE_WIDE: "NoseWide"
}

export const components = {
  [IDS.HEAD_BASE]: HeadBase,
  [IDS.EYES_ROUND]: EyesRound,
  [IDS.NOSE_WIDE]: NoseWide
}

export const Group = ({ props }) => (
  <g id="head">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.HEAD_BASE,
    name: "Head Base",
    layerId: 0,
    colors: 1,
    component: components[IDS.HEAD_BASE],
    enabled: false
  },
  {
    id: IDS.EYES_ROUND,
    name: "Eyes Round",
    layerId: 0,
    colors: 1,
    component: components[IDS.EYES_ROUND],
    enabled: false
  },
  {
    id: IDS.NOSE_WIDE,
    name: "Nose Wide",
    layerId: 0,
    colors: 1,
    component: components[IDS.NOSE_WIDE],
    enabled: false
  }
])

export default connectToBuilder(components, CATEGORY)
