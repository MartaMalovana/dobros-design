import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import { Wrapper } from "../App.styled";

export default function Home () {
    return (
        <Wrapper>
          <Header desktop/>
          <Hero desktop/>
          <Footer />
        </Wrapper>
      );    
};