import { Wrapper } from "../App.styled";
import Footer from '../components/footer/Footer';
import ShowProduct from "../components/showProduct/ShowProduct";

export default function Products () {    
    return (
        <Wrapper >
            <ShowProduct />
            <Footer />
        </Wrapper>
    );
}