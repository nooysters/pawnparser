import React from "react"
import connectToBuilder from "../../builderConnector"
import { uiSchemaService } from "../../uiSchema"

import MiniRamHorns from "./MiniRamHorns"
import WideHorns from "./WideHorns"
import RamHorns from "./RamHorns"
import GoatHorns from "./GoatHorns"
import Antlers from "./Antlers"

const CATEGORY = "horns"
const CHARACTER = "WomanMixed"
export const IDS = {
  MINI_RAM_HORNS: "MiniRamHorns",
  WIDE_HORNS: "WideHorns",
  RAM_HORNS: "RamHorns",
  GOAT_HORNS: "GoatHorns",
  ANTLERS: "Antlers"
}

export const components = {
  [IDS.MINI_RAM_HORNS]: MiniRamHorns,
  [IDS.WIDE_HORNS]: WideHorns,
  [IDS.RAM_HORNS]: RamHorns,
  [IDS.GOAT_HORNS]: GoatHorns,
  [IDS.ANTLERS]: Antlers
}

export const Group = ({ props }) => (
  <g id="horns">
    {Object.keys(components).map(key => {
      const Element = components[key]
      return <Element {...props} key={key} />
    })}
  </g>
)

uiSchemaService.register(CHARACTER, CATEGORY, [
  {
    id: IDS.MINI_RAM_HORNS,
    name: "Mini Ram Horns",
    defaultColors: ["#806829", "#262261"],
    colorable: true,
    component: components[IDS.MINI_RAM_HORNS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.WIDE_HORNS,
    name: "Wide Horns",
    defaultColors: ["#CD977A"],
    colorable: false,
    component: components[IDS.WIDE_HORNS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.RAM_HORNS,
    name: "Ram Horns",
    defaultColors: ["#898888", "#262261"],
    colorable: true,
    component: components[IDS.RAM_HORNS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.GOAT_HORNS,
    name: "Goat Horns",
    defaultColors: ["#70706E"],
    colorable: true,
    component: components[IDS.GOAT_HORNS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  },
  {
    id: IDS.ANTLERS,
    name: "Antlers",
    defaultColors: ["#A07955", "#000000", "#SVGID_"],
    colorable: true,
    component: components[IDS.ANTLERS],
    inUI: true,
    enabled: false,
    subGroupId: 0
  }
])

export default connectToBuilder(components, {
  character: CHARACTER,
  category: CATEGORY
})
