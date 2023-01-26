import hutsulshchynaActions from "../../redux/hutsulshchyna/hutsulshchyna-actions";
import bukovynaActions from "../../redux/bukovyna/bukovyna-actions";
import centralnaActions from "../../redux/centralna/centralna-actions";
import opillyaActions from "../../redux/opillya/opillya-actions";
import volynActions from "../../redux/volyn/volyn-actions";
import zakarpattyaActions from "../../redux/zakarpattya/zakarpattya-actions";
import podillyaActions from '../../redux/podillya/podillya-actions';
import svitActions from '../../redux/svit/svit-actions';
import golovniUboryActions from '../../redux/golovni-ubory/golovni-actions';
import vzuttyaActions from '../../redux/vzuttya/vzuttya-actions';
import stylizovanaCentralnaActions from "../../redux/stylizovanaCentralna/stylizovanaCentralna-actions";
import rushnykyActions from "../../redux/rushnyky/rushnyky-actions";
import kozhuhyActions from '../../redux/kozhuhy/kozhuhy-actions';
import rizneActions from "../../redux/rizne/rizne-actions";

export default function getAction (region) {
    let action = null;
    switch(region) {
        case 'hutsulshchyna':
          action = hutsulshchynaActions.hutsulshchynaChangeSaved;
          break;
        case 'bukovyna':
          action = bukovynaActions.bukovynaChangeSaved;
          break;
        case 'centralna':
          action = centralnaActions.centralnaChangeSaved;
          break;
        case 'stylizovanaCentralna':
          action = stylizovanaCentralnaActions.stylizovanaCentralnaChangeSaved;
          break;
        case 'opillya':
          action = opillyaActions.opillyaChangeSaved;
          break;
        case 'volyn':
          action = volynActions.volynChangeSaved;
          break;
        case 'zakarpattya':
          action = zakarpattyaActions.zakarpattyaChangeSaved;
          break;
        case 'podillya':
          action = podillyaActions.podillyaChangeSaved;
          break;
        case 'svit':
          action = svitActions.svitChangeSaved;
          break;
        case 'golovni-ubory':
          action = golovniUboryActions.golovniChangeSaved;
          break;
        case 'vzuttya':
          action = vzuttyaActions.vzuttyaChangeSaved;
          break;
        case 'rushnyky':
          action = rushnykyActions.rushnykyChangeSaved;
          break;
        case 'kozhuhy':
          action = kozhuhyActions.kozhuhyChangeSaved;
          break;
        case 'rizne':
          action = rizneActions.rizneChangeSaved;
          break;
        default: break;
      };
      return action;
}