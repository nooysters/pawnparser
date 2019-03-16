import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const SpellBookL = ({ allEnabledElements }) => {
  return allEnabledElements.includes("SpellBookL") ? (
    <g id="SpellBookL">
      <path d="M75.8824234,52.2716827l1.1865082,12.6315689c0,0,20.6792374,8.4483871,26.6117935,6.4798203 c5.9325714-1.9685516,22.289505-17.3889046,22.3742599-17.6349716c0.0847473-0.2460632-0.762764-14.1899948-0.762764-14.1899948 l-27.9678192,9.0225372L75.8824234,52.2716827z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(SpellBookL, {
  character: "ManDragonborn"
})
