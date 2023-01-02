export default function getRegionData(choosenRegion, state) {
    let data = null;

    switch (choosenRegion) {
        case 'bukovyna':
            data = state.bukovyna;
            break;
        case 'centralna':
            data = state.centralna;
            break;
        case 'hutsulshchyna':
            data = state.hutsulshchyna;
            break;
        case 'opillya':
            data = state.opillya;
            break;
        case 'volyn':
            data = state.volyn;
            break;
        case 'zakarpattya':
            data = state.zakarpattya;
            break;
        case 'all': 
            data = [...state.bukovyna,...state.centralna,...state.hutsulshchyna,...state.opillya,...state.volyn,...state.zakarpattya];
            break;
        default:
            data = null;
            break;
    };

    return data;
};