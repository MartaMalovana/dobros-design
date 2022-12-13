import { useSelector} from "react-redux";
import { Wrapper } from "../App.styled";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Content } from "../App.styled";
import { CardContainer, Container} from "../components/showProduct/ShowProduct.styled";
import ProductCard from '../components/productCard/ProductCard';
import {saved} from '../redux/saved/saved.selectors';

export default function Saved () {  
    const savedData = useSelector(saved);

    return (
        <Wrapper>
            <Header />
            <Container>
            <Content empty>
                <CardContainer >
                    {savedData && savedData.map(el => 
                        <ProductCard key={el.id} data={el} title/>)}
                </CardContainer>
            </Content>
            </Container>
            <Footer />
        </Wrapper>
    );
}