import { Wrapper } from "../App.styled";
import Footer from '../components/footer/Footer';
import Reviews from "../components/reviews/Reviews";

export default function Works () {
    return (
        <Wrapper reviews>
            <Reviews />
            <Footer reviews/>
        </Wrapper>
    );
}