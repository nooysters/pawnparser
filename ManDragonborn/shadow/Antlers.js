import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const Antlers = ({ allEnabledElements }) => {
  return allEnabledElements.includes("Antlers") ? (
    <g id="Antlers">
      <path d="M96.5739136-5.2160454c-0.7019577-0.8189554-2.1058884-5.615694-2.2228775-6.7856302 c-0.2339859-1.6379099-0.8189545-3.2758207-1.6379166-4.6797438c-1.4039154-2.4568653-11.5823669-6.2006626-14.0392303-4.5627518 c-1.0529404,0.7019634-9.0085068,7.3705988-10.2954407,7.3705988c-1.052948,0-10.6464157-6.9026232-11.348381-7.3705988 c-2.8078384-1.8718967-12.0503387,1.9888916-13.337265,4.4457588c-0.8189545,1.4039221-1.2869263,2.8078461-1.6379128,4.445756 c-0.116993,0.9359493-0.2339859,1.8718987-0.2339859,2.807847c0,0.7019615-1.4039268,3.5098085-2.1058846,4.328764 c-0.9359474,1.0529423-3.1588287,5.2647123-1.7549057,7.6045837c0.7019615,1.2869303,1.9888916,1.9888914,2.8078499,3.1588275 c0.7019577,0.9359488,1.0529442,2.105885,1.8718948,3.1588268c3.1588287,3.9777822,14.1562309,4.9137325,14.6242027,4.7967386 c0.9359474-0.1169939,25.7385941,0,26.0895691,0c3.0418396-0.2339878,6.2006683-1.0529423,8.6575317-3.0418339 c0.9359512-0.8189554,1.8718948-1.7549047,2.5738602-2.8078465c0.4679718-0.701962,0.7019577-1.5209174,1.1699295-2.105885 c0.4679794-0.5849681,1.1699371-0.9359493,1.6379166-1.5209174C99.1477737,1.6865777,97.5098572-4.1631031,96.5739136-5.2160454z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(Antlers, {
  character: "ManDragonborn"
})