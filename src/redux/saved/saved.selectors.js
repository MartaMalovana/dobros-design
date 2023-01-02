export const saved = state => state.saved.saved;

export const allProducts = state => [...state.bukovyna,...state.centralna,...state.hutsulshchyna,...state.opillya,...state.volyn,...state.zakarpattya,...state.podillya,...state.svit];
// {
//     const allProducts = [...state.bukovyna,...state.centralna,...state.hutsulshchyna,...state.opillya,...state.volyn,...state.zakarpattya];
//     const savedProducts = allProducts.filter(el => el.saved === 'true');
//     return savedProducts;
// };