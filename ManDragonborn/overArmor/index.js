import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import CrusaderTunic from "./CrusaderTunic"
import Belt from "./Belt"

const CATEGORY = "overArmor"
const CHARACTER = "ManDragonborn"
export const IDS = {
  CRUSADER_TUNIC: "CrusaderTunic",
  BELT: "Belt"
}

export const components = {
  [IDS.CRUSADER_TUNIC]: CrusaderTunic,
  [IDS.BELT]: Belt
}

export const Group = ({ props }) => (
  <g id="overArmor">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.CRUSADER_TUNIC,
    name: "Crusader Tunic",
    defaultColors: ["#B2230B", "#CECECE"],
    colorable: true,
    component: components[IDS.CRUSADER_TUNIC],
    inUI: true,
    enabled: false,
    subGroupId: 2
  },
  {
    id: IDS.BELT,
    name: "Belt",
    defaultColors: ["#898888", "#000000", "#SVGID_"],
    colorable: true,
    component: components[IDS.BELT],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
