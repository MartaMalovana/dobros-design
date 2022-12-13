import { Wrapper } from "../App.styled";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ShowProduct from "../components/showProduct/ShowProduct";
import { Up } from "../components/showProduct/ShowProduct.styled";

export default function Products () {
    const toTop = () => {
        window.scrollTo({top: 0, left: 0, "behavior": "smooth"});
    };
    
    return (
        <Wrapper>
            <Header />
            <ShowProduct />
            <Footer />
            <Up onClick={toTop}/>
        </Wrapper>
    );
}