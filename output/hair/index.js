import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import BeardOne from "./BeardOne"
import BeardTwo from "./BeardTwo"
import BeardThree from "./BeardThree"
import BeardFour from "./BeardFour"
import HairOne from "./HairOne"

const CATEGORY = "hair"

export const IDS = {
  BEARD_ONE: "BeardOne",
  BEARD_TWO: "BeardTwo",
  BEARD_THREE: "BeardThree",
  BEARD_FOUR: "BeardFour",
  HAIR_ONE: "HairOne"
}

export const components = {
  [IDS.BEARD_ONE]: BeardOne,
  [IDS.BEARD_TWO]: BeardTwo,
  [IDS.BEARD_THREE]: BeardThree,
  [IDS.BEARD_FOUR]: BeardFour,
  [IDS.HAIR_ONE]: HairOne
}

export const Group = ({ props }) => (
  <g id="hair">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CATEGORY, [
  {
    id: IDS.BEARD_ONE,
    name: "Beard One",
    layerId: 0,
    colors: 1,
    component: components[IDS.BEARD_ONE],
    enabled: true
  },
  {
    id: IDS.BEARD_TWO,
    name: "Beard Two",
    layerId: 0,
    colors: 1,
    component: components[IDS.BEARD_TWO],
    enabled: true
  },
  {
    id: IDS.BEARD_THREE,
    name: "Beard Three",
    layerId: 0,
    colors: 1,
    component: components[IDS.BEARD_THREE],
    enabled: true
  },
  {
    id: IDS.BEARD_FOUR,
    name: "Beard Four",
    layerId: 0,
    colors: 1,
    component: components[IDS.BEARD_FOUR],
    enabled: true
  },
  {
    id: IDS.HAIR_ONE,
    name: "Hair One",
    layerId: 0,
    colors: 1,
    component: components[IDS.HAIR_ONE],
    enabled: true
  }
])

export default connectToBuilder(components, CATEGORY)
