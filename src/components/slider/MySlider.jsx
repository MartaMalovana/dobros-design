import React, {useState} from "react";
import {Div, Div1, PrevArrow, NextArrow} from './MySlider.styled';
import ProductCard from "../productCard/ProductCard";
import { MenuClose } from "../header/Header.styled";
import { useEffect } from "react";

export default function MySlider ({data, slide, slider, changeElement}) {
  const [slideIndex, setSlideIndex] = useState(slide);
  const [changeSlide, setChangeSlide] = useState(null);

  useEffect(() => {
    setSlideIndex(slide);
  }, [slide, data]);

  const showPrev = () => {
    setSlideIndex(slideIndex - 1);
  };

  const showNext = () => {
    setSlideIndex(slideIndex + 1);
  };

  const changeCurrentSlide = (newSlide) => {
    setChangeSlide(newSlide);
  };

  const closeSlider = () => {
    slider();
    if(changeSlide) {
      const slideToChange = data.find(el => el.id === changeSlide.id);
      const index = data.indexOf(slideToChange);
      const newData = [...data];
      newData.splice(index, 1, changeSlide);
      changeElement(newData);
    };
  };

    return (
      <Div>
        <Div1>
          <ProductCard data={data[slideIndex]} key={data[slideIndex].id} title sliderSize changeCurrentSlide={changeCurrentSlide}/>
          {slideIndex > 0 && <PrevArrow onClick={showPrev}/>}
          {slideIndex < (data.length - 1) && <NextArrow onClick={showNext}/>}
          <MenuClose onClick={closeSlider} slider/>
        </Div1>
      </Div>
    );
  
}