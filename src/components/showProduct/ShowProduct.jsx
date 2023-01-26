import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Trans, useTranslation } from "react-i18next";
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
  DesktopDecor,
  Span
} from "./ShowProduct.styled";
import ProductCard from "../productCard/ProductCard";
import regions from "./regions.json";
import FindProduct from "./FindProduct";
import MySlider from "../slider/MySlider";
import { bukovyna } from "../../redux/bukovyna/bukovyna-selectors";
import { centralna, centralnaChildren } from "../../redux/centralna/centralna-selectors";
import {stylizovanaCentralna, stylizovanaCentralnaChildren} from '../../redux/stylizovanaCentralna/stylizovanaCentralna-selectors';
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
import { rushnyky } from "../../redux/rushnyky/rushnyky-selectors";
import { vzuttya } from "../../redux/vzuttya/vzuttya-selectors";
import { kozhuhy } from "../../redux/kozhuhy/kozhuhy-selectors";
import {rizne} from "../../redux/rizne/rizne-selectors";
import whiteHeart from '../../images/svg/heart.svg';
import DecorLine from '../decor/DecorLine';
import i18next from "i18next";
// import { t } from "i18next";

export default function ShowProduct() {
  const [menu, setMenu] = useState(true);
  const [renderData, setRenderData] = useState(null);
  const [find, setFind] = useState(false);
  const [subsectionTitle, setSubsectionTitle] = useState(false);
  const [slide, setSlide] = useState(0);
  const {t} = useTranslation();

  const centralnaData = useSelector(centralna);
  const centralnaChildrenData = useSelector(centralnaChildren);
  const stylizovanaCentralnaData = useSelector(stylizovanaCentralna);
  const stylizovanaCentralnaChildrenData = useSelector(stylizovanaCentralnaChildren);
  const bukovynaData = useSelector(bukovyna);
  const hutsulshchynaData = useSelector(hutsulshchyna);
  const opillyaData = useSelector(opillya);
  const volynData = useSelector(volyn);
  const zakarpattyaData = useSelector(zakarpattya);
  const podillyaData = useSelector(podillya);
  const svitData = useSelector(svit);
  const golovniUboryData = useSelector(golovniUbory);
  const vzuttyaData = useSelector(vzuttya);
  const rushnykyData = useSelector(rushnyky);
  const kozhuhyData = useSelector(kozhuhy);
  const rizneData = useSelector(rizne);
  const savedData = useSelector(saved);
  const showSlider = useSelector(slider);
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   if(categoryTitle === 'Буковина') {
  //     setCategoryTitle('Bukovina reg')
  //   }
  // },[categoryTitle]);

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
        setSubsectionTitle(false);
        setRenderData(bukovynaData);
        break;
      case "centralna":
        setSubsectionTitle(false);
        setRenderData(centralnaData);
        break;
      case "centralna-children":
        setSubsectionTitle(true);
        setRenderData(centralnaChildrenData);
        break;
      case "stylizovanaCentralna":
        setSubsectionTitle(false);
        setRenderData(stylizovanaCentralnaData);
        break;
      case "stylizovanaCentralna-children":
        setSubsectionTitle(true);
        setRenderData(stylizovanaCentralnaChildrenData);
        break;
      case "hutsulshchyna":
        setSubsectionTitle(false);
        setRenderData(hutsulshchynaData);
        break;
      case "opillya":
        setSubsectionTitle(false);
        setRenderData(opillyaData);
        break;
      case "volyn":
        setSubsectionTitle(false);
        setRenderData(volynData);
        break;
      case "zakarpattya":
        setSubsectionTitle(false);
        setRenderData(zakarpattyaData);
        break;
      case "podillya":
        setSubsectionTitle(false);
        setRenderData(podillyaData);
        break;
      case "svit":
        setSubsectionTitle(false);
        setRenderData(svitData);
        break;
      case "golovni-ubory":
        setSubsectionTitle(false);
        setRenderData(golovniUboryData);
        break;
      case "vzuttya":
        setSubsectionTitle(false);
        setRenderData(vzuttyaData);
        break;
      case "rushnyky":
        setSubsectionTitle(false);
        setRenderData(rushnykyData);
        break;
      case "kozhuhy":
        setSubsectionTitle(false);
        setRenderData(kozhuhyData);
        break;
      case "rizne":
        setSubsectionTitle(false);
        setRenderData(rizneData);
        break;
      case "saved":
        setSubsectionTitle(false);
        setRenderData(savedData);
        break;
      default:
        setSubsectionTitle(false);
        setRenderData(null);
        break;
    }
    window.scrollTo({top: 0, left: 0, "behavior": "smooth"});
  };

  const showSaved = () => {
    setRenderData(savedData);
    setFind(false);
  };

  const findProduct = () => {
    setRenderData(null);
    setFind(true);
    window.scrollTo({top: 0, left: 0, "behavior": "smooth"});
  };

  const closeSlider = () => {
    dispatch(sliderActions.sliderToggle());
  };

  const getSlide = (index) => {
    setSlide(index);
  };

  const changeElement = (newData) => {
    setRenderData(newData);
  };

  const showProductsByNumber = (data) => {
    setRenderData(data);
  };
  return (
    <Container>
      <Content empty tablet>
        <ButtonContainer>
          <Button onClick={findProduct}>{t('buttons.search')}</Button>
          <ButtonHeart onClick={showSaved} desktop>{t('buttons.saved')}</ButtonHeart>
          <Button type="button" onClick={hideNavigation} desktop>
            {t('buttons.catalog')}
          </Button>
        </ButtonContainer>
        <Desktop>
          <Navigation className={!menu && "hide"}>
            <NavTitle a={menu}>{t('navigation.title')}</NavTitle>
            <DesktopDecor><DecorLine /></DesktopDecor>
            <HideButton type="button" onClick={hideNavigation} />
            <ProductList onClick={showProducts}>
              <ProductCategory name="ukrainian">
                <Span category>{t('navigation.ukrainian')}</Span>
                <RegionList>
                  {regions.map((el) => (
                    <Region key={el.name}>
                      {el.children ? (
                          <ProductCategoryContainer>
                            {i18next.language === 'ua' ? el.content : el.contentEng}
                            <ProductButton name={el.name} subsection>
                              {t("navigation.adults")}
                            </ProductButton>
                            <ProductButton name={el.children} subsection>
                            {t("navigation.children")}
                            </ProductButton>
                          </ProductCategoryContainer>
                      ) : (
                        <ProductButton name={el.name}>
                          {i18next.language === 'ua' ? el.content : el.contentEng}
                        </ProductButton>
                      )}
                    </Region>
                  ))}
                </RegionList>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="kozhuhy" category>{t('navigation.kozhukh')}</ProductButton>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="golovni-ubory" category>{t('navigation.head')}</ProductButton>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="vzuttya" category>{t('navigation.shoes')}</ProductButton>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="rushnyky" category>{t('navigation.rushnyk')}</ProductButton>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="svit" category>{t('navigation.world')}</ProductButton>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="rizne" category>{t('navigation.rizne')}</ProductButton>
              </ProductCategory>
            </ProductList>
          </Navigation>
          <CardContainer>
            {find && <FindProduct newData={showProductsByNumber} />}
            {renderData && renderData.length > 0 && <DescriptionHeart>
              {i18next.language === 'ua' 
            ? 'Вироби, які Вам сподобаються, можна зберегти, натиснувши на сердечко ' 
            : 'You can save items by clicking the heart button '}
            <img src={whiteHeart} width="12px"/> 
            {i18next.language === 'ua' 
            ? ', і згодом переглянути у розділі "Збережене"'
            : '. Later You can find the selected items in "Saved" section'}
              </DescriptionHeart>}
            {renderData && renderData.length > 0 && <Title>{i18next.language === 'ua' ? renderData[0].categoryUkr : renderData[0].categoryEng}</Title>}
            {renderData && renderData.length > 0 && renderData[0].children && <Title>{i18next.language === 'ua' ? 'для дітей' : 'for children'}</Title>}
            {renderData && renderData.length > 0 &&
              renderData.map((el, index) => (
                <ProductCard
                  data={el}
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
