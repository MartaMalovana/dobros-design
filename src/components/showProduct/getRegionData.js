export default function getRegionData(choosenRegion, state) {
    let data = null;

    switch (choosenRegion) {
        case 'centralna':
            data = state.centralna;
            break;
        case 'stylizovanaCentralna':
                data = state.stylizovanaCentralna;
                break;
        case 'hutsulshchyna':
            data = state.hutsulshchyna;
            break;
        case 'zakarpattya':
                data = state.zakarpattya;
                break;
        case 'bukovyna':
            data = state.bukovyna;
            break;
        case 'volyn':
                data = state.volyn;
                break;
        case 'opillya':
            data = state.opillya;
            break;
        case 'podillya':
            data = state.podillya;
            break;
        case 'kozhuhy':
            data = state.kozhuhy;
            break;
        case 'golovni-ubory':
            data = state.golovniUbory;
            break;
        case 'vzuttya':
            data = state.vzuttya;
            break;
        case 'rushnyky':
            data = state.rushnyky;
            break;
        case 'svit':
            data = state.svit;
            break;
        case 'rizne':
            data = state.rizne;
            break;
        case 'all': 
            data = [...state.bukovyna,...state.centralna,...state.stylizovanaCentralna,...state.hutsulshchyna,...state.opillya,...state.volyn,...state.zakarpattya,...state.podillya,...state.kozhuhy,
            ...state.golovniUbory,...state.vzuttya,...state.rushnyky,...state.svit,...state.rizne];
            break;
        default:
            data = null;
            break;
    };

    return data;
};