import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const RamHorns = ({ allEnabledElements }) => {
  return allEnabledElements.includes("RamHorns") ? (
    <g id="RamHorns">
      <path d="M56.2999992,21.3999996L54.7999992,21c-2.4000015-1-4.0999985-3.3999996-4.5999985-7C50,11.5,55.5-0.2,57.5999985-1.3 C58.2000008-1.8,63.9000015-2,69.5-2c5.3000031,0,10.5999985,0.2,11.1999969,0.7 C82.7999954-0.0999999,88.5,11.5999994,88.0999985,14c-0.5,3.6000004-2.1999969,6-4.5999985,7L82,21.3999996 C81.6999969,21.3999996,56.7000008,21.3999996,56.2999992,21.3999996z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(RamHorns, {
  character: "WomanMixed"
})
