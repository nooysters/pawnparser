import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const GoatHorns = ({ allEnabledElements }) => {
  return allEnabledElements.includes("GoatHorns") ? (
    <g id="GoatHorns">
      <path
        id="goatHorns"
        fill="#050505"
        d="M85.1085358-4.3970904c0-4.5627513-3.7437897-8.4235401-8.4235306-8.4235401 c-2.1058884,0-5.3817062,0.8189554-8.4235382,4.5627508c-3.041832-3.7437954-6.3176575-4.5627508-8.423542-4.5627508 c-4.6797447,0-8.423542,3.7437954-8.423542,8.4235401c0,0,2.3398743,6.2006612,3.5098076,10.8804054l7.3706017,1.0529423 l5.9666748-3.6268024l5.9666672,3.6268024l7.3706055-1.0529423C82.7686691,1.8035706,85.1085358-4.3970904,85.1085358-4.3970904z"
      />
    </g>
  ) : null
}

export default connectToAllEnabledElements(GoatHorns, {
  character: "ManDragonborn"
})
