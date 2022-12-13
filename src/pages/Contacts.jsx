import { Wrapper } from "../App.styled";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ContactPage from '../components/contactPage/ContactPage.jsx';

export default function Contacts () {
    return (
        <Wrapper>
            <Header />
                <ContactPage />
            <Footer />
        </Wrapper>
    );
}