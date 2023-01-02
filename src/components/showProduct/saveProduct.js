import bukovyna from '../../json/bukovyna.json';
import centralna from '../../json/centralna.json';
import hutsulshchyna from '../../json/hutsulshchyna.json';
import opillya from '../../json/opillya.json';
import volyn from '../../json/volyn.json';
import zakarpattya from '../../json/zakarpattya.json';
import saved from '../../json/saved.json';
import getRegionData from './getRegionData';

export default function saveProduct (id, data) {
    const {bukovyna, centralna, hutsulshchyna, opillya, volyn, zakarpattya, podillya, golovniUbory, svit, vzuttya} = data;
    //Find product
    const allProducts = [...bukovyna, ...centralna, ...hutsulshchyna, ...opillya, ...volyn, ...zakarpattya,...podillya,...golovniUbory,...svit,...vzuttya];
    const product = allProducts.find(product => product.id === id);
    //Check is it saved by user. If not - add, if yes - delete it from json
    // if(product.saved === 'false') {
    //     console.log(product.saved);

    // } else {
    //     product.saved = 'false';
    // };
    // console.log(product.region);
    return product.region;
    // const dataJson = getRegionData(product.region);
    // const indexInRegionData = dataJson.indexOf(product); 

    // if(dataJson[indexInRegionData].saved ==='false'){
    //     saved.push(product);
    //     dataJson[indexInRegionData].saved = 'true';
    //     localStorage.setItem('saved', JSON.stringify(saved));
    // } else {
    //     dataJson[indexInRegionData].saved = 'false'; 
    //     const indexInSavedData = saved.indexOf(product);
    //     saved.splice(indexInSavedData, 1);
    //     localStorage.setItem('saved', JSON.stringify(saved));
    // };
    //     return {data: dataJson, saved: saved};
};