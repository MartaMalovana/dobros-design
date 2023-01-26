import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "../App.styled";
import Footer from "../components/footer/Footer";
import { Content } from "../App.styled";
import {
  CardContainer,
  Container,
} from "../components/showProduct/ShowProduct.styled";
import ProductCard from "../components/productCard/ProductCard";
import { saved } from "../redux/saved/saved.selectors";
import MySlider from "../components/slider/MySlider";
import { slider } from "../redux/slider/slider-selectors";
import sliderActions from "../redux/slider/slider-actions";

export default function Saved() {
  const savedData = useSelector(saved);
  const showSlider = useSelector(slider);
  const dispatch = useDispatch();
  const [data, setData] = useState(savedData);
  const [slide, setSlide] = useState(0);

  const closeSlider = () => {
    dispatch(sliderActions.sliderToggle());
  };

  const changeElement = (newData) => {
    setData(newData);
  };

  const getSlide = (index) => {
    setSlide(index);
  };

  return (
    <Wrapper>
      <Container>
        <Content empty>
          <CardContainer desktop>
            {data &&
              data.map((el, index) => (
                <ProductCard
                  key={el.id}
                  data={el}
                  title={false}
                  slide={getSlide}
                  index={index}
                  desktop
                  saved
                />
              ))}
          </CardContainer>
          {showSlider && (
            <MySlider
              data={data}
              slider={closeSlider}
              slide={slide}
              changeElement={changeElement}
            />
          )}
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  );
}
