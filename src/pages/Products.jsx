import { Wrapper } from "../App.styled";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ShowProduct from "../components/showProduct/ShowProduct";

export default function Products () {
    return (
        <Wrapper>
            <Header />
            <ShowProduct />
            <Footer />
        </Wrapper>
    );
}