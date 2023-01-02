import { Wrapper } from "../App.styled";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Reviews from "../components/reviews/Reviews";

export default function Works () {
    return (
        <Wrapper>
            <Header />
                <Reviews />
            <Footer />
        </Wrapper>
    );
}