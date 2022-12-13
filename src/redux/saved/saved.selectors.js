export const saved = state => {
    const allProducts = [...state.bukovyna,...state.centralna,...state.hutsulshchyna,...state.opillya,...state.volyn,...state.zakarpattya];
    const savedProducts = allProducts.filter(el => el.saved === 'true');
    return savedProducts;
};