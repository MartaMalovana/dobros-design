export default function saveProduct(id, data) {

    const { bukovyna, centralna, hutsulshchyna, opillya, volyn, zakarpattya, podillya, golovniUbory, svit, vzuttya, stylizovanaCentralna, rushnyky, kozhuhy, rizne } = data;

    //Find product
    const allProducts = [...bukovyna, ...centralna, ...hutsulshchyna, ...opillya, ...volyn, ...zakarpattya, ...podillya, ...golovniUbory, ...svit, ...vzuttya, ...stylizovanaCentralna, ...rushnyky, ...kozhuhy, ...rizne];
    const product = allProducts.find(product => product.id === id);

    return product.region;
};