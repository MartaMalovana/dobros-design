import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Content } from "../../App.styled";
import {
  Container,
  Navigation,
  NavTitle,
  HideButton,
  ProductList,
  ProductCategory,
  RegionList,
  Region,
  ButtonContainer,
  Button,
  ProductButton,
  ProductCategoryContainer,
  CardContainer,
  ButtonHeart,
  Title,
  DescriptionHeart,
  Desktop,
  DesktopDecor
} from "./ShowProduct.styled";
import ProductCard from "../productCard/ProductCard";
import regions from "./regions.json";
import FindProduct from "./FindProduct";
import MySlider from "../slider/MySlider";
import { bukovyna } from "../../redux/bukovyna/bukovyna-selectors";
import { centralna, centralnaChildren } from "../../redux/centralna/centralna-selectors";
import { hutsulshchyna } from "../../redux/hutsulshchyna/hutsulshchyna-selectors";
import { opillya } from "../../redux/opillya/opillya-selectors";
import { volyn } from "../../redux/volyn/volyn-selectors";
import { zakarpattya } from "../../redux/zakarpattya/zakarpattya-selectors";
import { saved } from "../../redux/saved/saved.selectors";
import { slider } from "../../redux/slider/slider-selectors";
import { svit } from "../../redux/svit/svit-selectors";
import sliderActions from "../../redux/slider/slider-actions";
import { useEffect } from "react";
import { render } from "@testing-library/react";
import { podillya } from "../../redux/podillya/podillya-selectors";
import { golovniUbory } from "../../redux/golovni-ubory/golovni-selectors";
import { vzuttya } from "../../redux/vzuttya/vzuttya-selectors";
import whiteHeart from '../../images/svg/heart.svg';
import DecorLine from '../decor/DecorLine';

export default function ShowProduct() {
  const [menu, setMenu] = useState(true);
  const [renderData, setRenderData] = useState(null);
  const [find, setFind] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState(false);
  const [productTitle, setProductTitle] = useState(false);
  const [subsectionTitle, setSubsectionTitle] = useState(false);
  const [slide, setSlide] = useState(0);

  const centralnaData = useSelector(centralna);
  const centralnaChildrenData = useSelector(centralnaChildren);
  const bukovynaData = useSelector(bukovyna);
  const hutsulshchynaData = useSelector(hutsulshchyna);
  const opillyaData = useSelector(opillya);
  const volynData = useSelector(volyn);
  const zakarpattyaData = useSelector(zakarpattya);
  const podillyaData = useSelector(podillya);
  const svitData = useSelector(svit);
  const golovniUboryData = useSelector(golovniUbory);
  const vzuttyaData = useSelector(vzuttya);
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
      case "bukovyna":
        setCategoryTitle("????????????????");
        setSubsectionTitle(false);
        setRenderData(bukovynaData);
        break;
      case "centralna":
        setCategoryTitle("???????????????????? ??????????????");
        setSubsectionTitle(false);
        setRenderData(centralnaData);
        break;
      case "centralna-children":
        setCategoryTitle("???????????????????? ??????????????");
        setSubsectionTitle(true);
        setRenderData(centralnaChildrenData);
        break;
      case "hutsulshchyna":
        setCategoryTitle("????????????????????");
        setSubsectionTitle(false);
        setRenderData(hutsulshchynaData);
        break;
      case "opillya":
        setCategoryTitle("????????????");
        setSubsectionTitle(false);
        setRenderData(opillyaData);
        break;
      case "volyn":
        setCategoryTitle("????????????");
        setSubsectionTitle(false);
        setRenderData(volynData);
        break;
      case "zakarpattya":
        setCategoryTitle("????????????????????");
        setSubsectionTitle(false);
        setRenderData(zakarpattyaData);
        break;
      case "podillya":
        setCategoryTitle("??????????????");
        setSubsectionTitle(false);
        setRenderData(podillyaData);
        break;
      case "svit":
        setCategoryTitle("?????????????? ?????????????? ??????????");
        setSubsectionTitle(false);
        setRenderData(svitData);
        break;
      case "golovni-ubory":
        setCategoryTitle("?????????????? ??????????");
        setSubsectionTitle(false);
        setRenderData(golovniUboryData);
        break;
      case "vzuttya":
        setCategoryTitle("???????????????? ????????????");
        setSubsectionTitle(false);
        setRenderData(vzuttyaData);
        break;
      case "saved":
        setCategoryTitle(false);
        setSubsectionTitle(false);
        setRenderData(savedData);
        break;
      default:
        setCategoryTitle(false);
        setSubsectionTitle(false);
        setRenderData(null);
        break;
    }
  };

  const showSaved = () => {
    console.log(savedData);
    setRenderData(savedData);
    setFind(false);
    setCategoryTitle(false);
  };

  const findProduct = () => {
    setRenderData(null);
    setFind(true);
    setCategoryTitle(false);
    window.scrollTo({top: 0, left: 0, "behavior": "smooth"});
  };

  const closeSlider = () => {
    dispatch(sliderActions.sliderToggle());
  };

  const getSlide = (index) => {
    setSlide(index);
  };

  const changeElement = (newData) => {
    console.log(newData);
    setRenderData(newData);
  };

  const showProductsByNumber = (data) => {
    setRenderData(data);
  };
  return (
    <Container>
      <Content empty tablet>
        <ButtonContainer>
          <Button onClick={findProduct}>?????????? ???? ??????????????</Button>
          <ButtonHeart onClick={showSaved} desktop>??????????????????</ButtonHeart>
          <Button type="button" onClick={hideNavigation} desktop>
            ?????????????? ??????????????????
          </Button>
        </ButtonContainer>
        <Desktop>
          <Navigation className={!menu && "hide"}>
            <NavTitle a={menu}>?????????????? ??????????????????</NavTitle>
            <DesktopDecor><DecorLine /></DesktopDecor>
            <HideButton type="button" onClick={hideNavigation} />
            <ProductList onClick={showProducts}>
              <ProductCategory name="ukrainian">
                ???????????????????? ?????????????? ??????????????
                <RegionList>
                  {regions.map((el) => (
                    <Region key={el.name}>
                      {el.children ? (
                          <ProductCategoryContainer>
                            {el.content}
                            <ProductButton name={el.name} subsection>
                              ?????? ????????????????
                            </ProductButton>
                            <ProductButton name={el.children} subsection>
                              ?????? ??????????
                            </ProductButton>
                          </ProductCategoryContainer>
                      ) : (
                        <ProductButton name={el.name}>{el.content}</ProductButton>
                      )}
                    </Region>
                  ))}
                </RegionList>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="svit">?????????????? ?????????????? ??????????</ProductButton>
              </ProductCategory>
              <ProductCategory>
                <ProductButton>???????????????????????? ????????</ProductButton>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="golovni-ubory">?????????????? ??????????</ProductButton>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="vzuttya">???????????????? ????????????</ProductButton>
              </ProductCategory>
            </ProductList>
          </Navigation>
          <CardContainer>
            {find && <FindProduct newData={showProductsByNumber} />}
            {renderData && <DescriptionHeart>????????????, ?????? ?????? ????????????????????????, ?????????? ????????????????, ???????????????????? ???? ???????????????? <img src={whiteHeart} width="12px"/>, ?? ???????????? ?????????????????????? ?? ?????????????? "??????????????????"</DescriptionHeart>}
            {categoryTitle && <Title>{categoryTitle}</Title>}
            {subsectionTitle && <Title>?????? ??????????</Title>}
            {renderData &&
              renderData.map((el, index) => (
                <ProductCard
                  data={el}
                  title={productTitle}
                  key={el.id}
                  index={index}
                  slide={getSlide}
                />
              ))}
          </CardContainer>
        </Desktop>
        {showSlider && (
          <MySlider
            data={renderData}
            slider={closeSlider}
            slide={slide}
            changeElement={changeElement}
          />
        )}
      </Content>
    </Container>
  );
}
