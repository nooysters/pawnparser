import React from "react"
import { connectToAllEnabledElements } from "../../builderConnector"

const BodyBase = ({ allEnabledElements }) => {
  return allEnabledElements.includes("BodyBase") ? (
    <g id="BodyBase">
      <path d="M111.3066406,45.0991058c0.0625-2.3896484,0.0058594-5.3754883-0.4833984-7.6210938 c-0.4482422-2.0581055-1.2509766-3.4697266-2.0126953-4.5947266c0.0019531-4.6943359-2.296875-9.1220703-2.7734375-9.9892578 l-2.5742188-2.668457c-0.7568359-0.4526367-4.7832031-2.7104492-9.6835938-2.7104492 c-1.1679688,0-2.2958984,0.1254883-3.3769531,0.3740234c-1.2814331-0.8414307-3.1981201-1.7797241-5.9366455-2.098877 c0.1138916-0.9700928,0.3013916-1.8540649,1.0391846-3.119873l0.2421875-6.6791992 C84.9072266,4.2734222,80.3974609-4.1142731,72.1494141-4.8862457l-2.5913086-0.5585938l-3.0029297,0.0039062 l-2.3496094,0.5126953c-8.6230469,0.8359375-12.953125,10.2973633-13.4301758,11.402832l0.8295898,7.0507812 c0.5196533,0.6953125,0.6377563,1.1200562,0.6842651,1.8417358c-2.9603271,0.3510742-4.9556274,1.4268188-6.2282104,2.3120728 c-0.7216797-0.1049805-1.4599609-0.1577148-2.2119141-0.1577148c-4.8955078,0-8.9155273,2.2495117-9.671875,2.7006836 l-2.5805664,2.6733398c-0.4057617,0.7382812-2.4443359,4.637207-2.7373047,8.9223633l0.6816406,0.0463867 c-0.0537109,0.0756836-0.2973633,0.4169922-0.3691406,0.5180664l-0.3447266-0.0112305 c-0.0058594,0.1743164-0.0087891,0.3476562-0.0083008,0.5195312c-0.7607422,1.1240234-1.5615234,2.5336914-2.0083008,4.5874023 c-0.4892578,2.2451172-0.5454102,5.2314453-0.4833984,7.621582c-1.5727539,2.0849609-2.6435547,4.9238281-2.6435547,8.4335938 l0.065918,0.965332c1.0639648,7.7373047,2.8286133,11.2070312,4.121582,12.7553711l3.9404297,2.3837891 c0.4077148,0.0883789,1.5112305,0.293457,2.9536133,0.293457c3.2919922,0,6.1323242-1.0874023,8.1953125-2.9765625 c-0.4863281,3.9448242,0.4448242,8.7163086,3.1884766,14.862793c-2.7021484,1.7148438-7.0249023,4.9296875-6.875,10.7568359 c0.0712891,2.7363281,0.9726562,6.3740234,1.9267578,10.2255859c0.2729492,1.1025391,0.5620117,2.2685547,0.8115234,3.3476562 c-2.8095703,2.7744141-5.4277344,8.3984375-6.3901367,11.9853516l65.5419922,0.0009766 c-0.9550781-3.5595703-3.5898438-8.9873047-6.3740234-11.6269531c0.2451172-1.0585938,0.5273438-2.1982422,0.7939453-3.2753906 c0.9550781-3.8535156,1.8564453-7.4941406,1.9267578-10.2294922c0.1464844-5.6582031-3.7294922-8.7285156-6.3046875-10.3935547 c3.0488281-6.9228516,3.7304688-12.1708984,2.6669922-16.472168c2.0966797,2.3901367,5.2548828,3.7949219,8.9960938,3.7949219 c0.0009766,0,0.0009766,0,0.0009766,0c1.4423828,0,2.5458984-0.2055664,2.9541016-0.293457l3.9394531-2.3837891 c1.2929688-1.5483398,3.0576172-5.0185547,4.1210938-12.7558594l0.0664062-0.9648438 C113.9511719,50.0234222,112.8798828,47.1840668,111.3066406,45.0991058z M49.8706055,55.0346527l-0.5273438,0.5449219 l0.015625,0.4755859c-0.9370117,0.8242188-1.7885742,1.6669922-2.5439453,2.5429688 c0.7890625-1.8330078,1.9501953-4.8452148,1.5102539-8.6489258c0.5947266,0.5371094,1.215332,1.1098633,1.6289062,1.5380859 C49.7866211,52.5014496,49.6899414,53.6332855,49.8706055,55.0346527z M87.0117188,56.1205902l-0.0771484-0.8579102 c0.1474609-1.3110352,0.0517578-2.3813477-0.1064453-3.3442383c0.6142578-0.6357422,1.6865234-1.5922852,2.453125-2.2758789 c0.0263672-0.0229492,0.0527344-0.0463867,0.078125-0.0693359c-0.6083984,4.2861328,0.8427734,7.6098633,1.6396484,9.4370117 c0.0634766,0.1459961,0.1279297,0.2856445,0.1865234,0.4213867l-0.0078125,0.2294922 c0.0322266,0.3408203,0.0771484,0.6762695,0.1347656,1.0048828 C90.1572266,59.0483246,88.7041016,57.5556488,87.0117188,56.1205902z" />
    </g>
  ) : null
}

export default connectToAllEnabledElements(BodyBase, {
  character: "ManDragonborn"
})
