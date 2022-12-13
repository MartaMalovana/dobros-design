import hutsulshchynaActions from "../../redux/hutsulshchyna/hutsulshchyna-actions";
import bukovynaActions from "../../redux/bukovyna/bukovyna-actions";
import centralnaActions from "../../redux/centralna/centralna-actions";
import opillyaActions from "../../redux/opillya/opillya-actions";
import volynActions from "../../redux/volyn/volyn-actions";
import zakarpattyaActions from "../../redux/zakarpattya/zakarpattya-actions";

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
        case 'opillya':
          action = opillyaActions.opillyaChangeSaved;
          break;
        case 'volyn':
          action = volynActions.volynChangeSaved;
          break;
        case 'zakarpattya':
          action = zakarpattyaActions.zakarpattyaChangeSaved;
          break;
        default: break;
      };
      return action;
}