import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import RightThumb from "./RightThumb"
import LeftThumb from "./LeftThumb"

const CATEGORY = "thumbs"
const CHARACTER = "WomanMixed"
export const IDS = {
  RIGHT_THUMB: "RightThumb",
  LEFT_THUMB: "LeftThumb"
}

export const components = {
  [IDS.RIGHT_THUMB]: RightThumb,
  [IDS.LEFT_THUMB]: LeftThumb
}

export const Group = ({ props }) => (
  <g id="thumbs">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.RIGHT_THUMB,
    name: "Right Thumb",
    defaultColors: ["#CD977A", "#282560"],
    colorable: false,
    component: components[IDS.RIGHT_THUMB],
    inUI: false,
    enabled: true,
    subGroupId: 0
  },
  {
    id: IDS.LEFT_THUMB,
    name: "Left Thumb",
    defaultColors: ["#CD977A", "#282560"],
    colorable: false,
    component: components[IDS.LEFT_THUMB],
    inUI: false,
    enabled: true,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
