import { Wrapper } from "../App.styled";
import Footer from '../components/footer/Footer';
import ContactPage from '../components/contactPage/ContactPage.jsx';

export default function Contacts () {
    return (
        <Wrapper contacts>
            <ContactPage />
            <Footer contacts/>
        </Wrapper>
    );
}