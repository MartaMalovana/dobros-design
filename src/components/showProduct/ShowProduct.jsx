import { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { Content } from "../../App.styled";
import {Container, Navigation, NavTitle, HideButton, ProductList, ProductCategory, RegionList, Region, ButtonContainer, Button, ProductButton, CardContainer, ButtonHeart, Title } from "./ShowProduct.styled";
import ProductCard from "../productCard/ProductCard";
import regions from "./regions.json";
import FindProduct from "./FindProduct";
import MySlider from '../slider/MySlider';
import { bukovyna } from '../../redux/bukovyna/bukovyna-selectors';
import {centralna} from '../../redux/centralna/centralna-selectors';
import {hutsulshchyna} from '../../redux/hutsulshchyna/hutsulshchyna-selectors';
import {opillya} from '../../redux/opillya/opillya-selectors';
import {volyn} from '../../redux/volyn/volyn-selectors';
import {zakarpattya} from '../../redux/zakarpattya/zakarpattya-selectors';
import {saved} from '../../redux/saved/saved.selectors';
import { slider } from "../../redux/slider/slider-selectors";
import sliderActions from '../../redux/slider/slider-actions';
import { useEffect } from "react";
import { render } from "@testing-library/react";

export default function ShowProduct() {
  const [menu, setMenu] = useState(true);
  const [renderData, setRenderData] = useState(null);
  const [find, setFind] = useState(false);
  // const [slider, setSlider] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState(false);
  const [productTitle, setProductTitle] = useState(false);
  const [slide, setSlide] = useState(0);

  const centralnaData = useSelector(centralna);
  const bukovynaData = useSelector(bukovyna);
  const hutsulshchynaData = useSelector(hutsulshchyna);
  const opillyaData = useSelector(opillya);
  const volynData = useSelector(volyn);
  const zakarpattyaData = useSelector(zakarpattya);
  const savedData = useSelector(saved);
  const showSlider = useSelector(slider);
  const dispatch = useDispatch();
  
  const hideNavigation = () => {
    setMenu(!menu);
  };

  const showProducts = (e) => {
    // Change color of chosen category in menu
    [...document.querySelectorAll(".active")].map((el) =>
      el.classList.remove("active")
    );
    e.target.classList.toggle("active");
    if (!e.target.name) {
      setRenderData(centralnaData);
      document.querySelector('[name="centralna"]').classList.add("active");
    }
    // Close menu and search component
    setFind(false);
    setMenu(false);
    // Get the name of chosen category in product menu
    const choosenRegion = e.target.name;
    // 
    switch (choosenRegion) {
      case 'bukovyna':
          setCategoryTitle('Буковина');
          setRenderData(bukovynaData);
          break;
      case 'centralna':
        setCategoryTitle('Центральна Україна');
        setRenderData(centralnaData);
          break;
      case 'hutsulshchyna':
        setCategoryTitle('Гуцульщина');
        setRenderData(hutsulshchynaData);
          break;
      case 'opillya':
        setCategoryTitle('Опілля');
        setRenderData(opillyaData);
          break;
      case 'volyn':
        setCategoryTitle('Волинь');
        setRenderData(volynData);
          break;
      case 'zakarpattya':
        setCategoryTitle('Закарпаття');
        setRenderData(zakarpattyaData);
          break;
      case 'saved': 
      // const allProducts = [...bukovynaData,...centralnaData,...hutsulshchynaData,...opillyaData,...volynData,...zakarpattyaData];
      setCategoryTitle(false);
      // setRenderData(allProducts.filter(el => el.saved === 'true'));
      setRenderData(savedData);
          break;
      default:
        setCategoryTitle(false);
        setRenderData(null);
          break;
  };
  };

  const showSaved = () => {
    // const allProducts = [...bukovynaData,...centralnaData,...hutsulshchynaData,...opillyaData,...volynData,...zakarpattyaData];
    // setRenderData(allProducts.filter(el => el.saved === 'true'));
    setRenderData(savedData);
    setFind(false);
  };

  const findProduct = () => {
    setRenderData(null);
    setFind(true);
  };

  const closeSlider = () => {
    dispatch(sliderActions.sliderToggle());
  };

  const getSlide = (index) => {
    setSlide(index);
  };

  const changeElement = (newData) => {
    // const elementIndex = renderData.indexOf(renderData.find(el => el.id === newElement.id));
    // const newData = [...renderData];
    // newData.splice(elementIndex, 1, newElement);
    console.log(newData);
    setRenderData(newData);
  };

  return (
    <Container>
      <Content empty>
        <ButtonContainer>
          <Button onClick={findProduct}>Пошук за номером</Button>
          <ButtonHeart onClick={showSaved}>Збережене</ButtonHeart>
          <Button type="button" onClick={hideNavigation}>
            Каталог продукції
          </Button>
        </ButtonContainer>
        <Navigation className={!menu && "hide"}>
          <NavTitle a={menu}>КАТАЛОГ ПРОДУКЦІЇ</NavTitle>
          <HideButton type="button" onClick={hideNavigation} />
          <ProductList onClick={showProducts}>
            <ProductCategory name="ukrainian">
              Українські народні костюми
              <RegionList>
                {regions.map((el) => (
                  <Region key={el.name}>
                    <ProductButton name={el.name}>{el.content}</ProductButton>
                  </Region>
                ))}
              </RegionList>
            </ProductCategory>
            <ProductCategory>
              <ProductButton>Сценічне взуття</ProductButton>
            </ProductCategory>
            <ProductCategory>
              <ProductButton>Стилізований одяг</ProductButton>
            </ProductCategory>
            <ProductCategory>
              <ProductButton>Костюми народів світу</ProductButton>
            </ProductCategory>
          </ProductList>
        </Navigation>
        <CardContainer>
          {categoryTitle && <Title>{categoryTitle}</Title>}
          {renderData && renderData.map((el, index) => 
            <ProductCard data={el} title={productTitle}  key={el.id} index={index} slide={getSlide}/>
            )}
          {find && <FindProduct />}
        </CardContainer>
        {showSlider && <MySlider data={renderData} slider={closeSlider} slide={slide} changeElement={changeElement}/>}
      </Content>
    </Container>
  );
}
