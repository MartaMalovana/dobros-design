import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import { Wrapper } from "../App.styled";

export default function Home () {
    return (
        <Wrapper>
          <Hero desktop/>
          <Footer />
        </Wrapper>
      );    
};