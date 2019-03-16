import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const TorchR = ({ allEnabledElements }) => {
  return allEnabledElements.includes("TorchR") ? (
    <g id="TorchR">
      <path
        id="path_1_"
        d="M41.8315811,70.3584137l4.5-8.0999947l-2-10.4000015 C51.6315804,47.758419,56.2315826,39.958416,56.2315826,31.258419c0-13-10.5999985-23.6000023-23.5-23.7999992h-0.2999992 c-13,0.1000004-23.7000008,10.7000017-23.7000008,23.7999992c0,11.2999992,8.000001,20.7999992,18.5999985,23.2000008 l2.7999992,11.2999954l6.4000015,5.4000015l1.2999992,0.0999985L41.8315811,70.3584137z"
      />
    </g>
  ) : null
}

export default connectToAllEnabledElements(TorchR, {
  character: "ManDragonborn"
})
