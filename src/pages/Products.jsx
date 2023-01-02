import { useInView } from 'react-intersection-observer';
import { Wrapper } from "../App.styled";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ShowProduct from "../components/showProduct/ShowProduct";
import { Up, Arrow } from "../components/showProduct/ShowProduct.styled";

export default function Products () {
    const { ref, inView, entry } = useInView({
        root: null,
        rootMargin: '0px',
        threshold: 0
    });

    const toTop = () => {
        window.scrollTo({top: 0, left: 0, "behavior": "smooth"});
    };
    
    return (
        <Wrapper >
            <div ref={ref}><Header /></div>
            <ShowProduct />
            <Footer />
            {!inView && <Up onClick={toTop}><Arrow /></Up>}
        </Wrapper>
    );
}