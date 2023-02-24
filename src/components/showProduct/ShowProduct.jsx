import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
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
  Span,
  MenuDecor
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
import { podillya } from "../../redux/podillya/podillya-selectors";
import { golovniUbory } from "../../redux/golovni-ubory/golovni-selectors";
import { rushnyky } from "../../redux/rushnyky/rushnyky-selectors";
import { vzuttya } from "../../redux/vzuttya/vzuttya-selectors";
import { kozhuhy } from "../../redux/kozhuhy/kozhuhy-selectors";
import {rizne} from "../../redux/rizne/rizne-selectors";
import whiteHeart from '../../images/svg/heart.svg';
import DecorLine from '../decor/DecorLine';

export default function ShowProduct() {
  const [menu, setMenu] = useState(true);
  const [renderData, setRenderData] = useState(null);
  const [find, setFind] = useState(false);
  const [sectionTitle, setSectionTitle] = useState(false);
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

  const hideNavigation = () => {
    setMenu(!menu);
  };

  const showProducts = (e, name) => {
    // Change color of chosen category in menu
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Close menu and search component
    setFind(false);
    setMenu(false);
    // Get the name of chosen category in product menu
    const choosenRegion = name;
    
    switch (choosenRegion) {
      case "bukovyna":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(bukovynaData);
        break;
      case "centralna":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(centralnaData);
        break;
      case "centralna-children":
        setSubsectionTitle(true);
        setSectionTitle(true);
        setRenderData(centralnaChildrenData);
        break;
      case "stylizovanaCentralna":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(stylizovanaCentralnaData);
        break;
      case "stylizovanaCentralna-children":
        setSubsectionTitle(true);
        setSectionTitle(true);
        setRenderData(stylizovanaCentralnaChildrenData);
        break;
      case "hutsulshchyna":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(hutsulshchynaData);
        break;
      case "opillya":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(opillyaData);
        break;
      case "volyn":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(volynData);
        break;
      case "zakarpattya":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(zakarpattyaData);
        break;
      case "podillya":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(podillyaData);
        break;
      case "svit":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(svitData);
        break;
      case "golovni-ubory":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(golovniUboryData);
        break;
      case "vzuttya":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(vzuttyaData);
        break;
      case "rushnyky":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(rushnykyData);
        break;
      case "kozhuhy":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(kozhuhyData);
        break;
      case "rizne":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(rizneData);
        break;
      case "saved":
        setSubsectionTitle(false);
        setSectionTitle(true);
        setRenderData(savedData);
        break;
      default:
        setSubsectionTitle(false);
        setSectionTitle(false);
        setRenderData(null);
        break;
    };
    
    window.scrollTo({top: 0, left: 0, "behavior": "smooth"});
  };

  const showSaved = () => {
    setRenderData(savedData);
    setFind(false);
    setSectionTitle(false);
    setSubsectionTitle(false);
  };

  const findProduct = () => {
    setRenderData(null);
    setFind(true);
    setSectionTitle(false);
    setSubsectionTitle(false);
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

  const hideTitles = () => {
    setSectionTitle(false);
    setSubsectionTitle(false);
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
            <ProductList  >
              <ProductCategory name="ukrainian">
                <Span category>{t('navigation.ukrainian')}</Span>
                <RegionList>
                  {regions.map((el) => (
                    <Region key={el.name}>
                      <MenuDecor />
                      {el.children ? (
                          <ProductCategoryContainer>
                            {i18next.language === 'ua' ? el.content : el.contentEng}
                            <ProductButton name={el.name} subsection onClick={(e)=> showProducts(e, el.name)}>
                              <MenuDecor />
                              {t("navigation.adults")}
                            </ProductButton>
                            <ProductButton name={el.children} subsection onClick={(e)=> showProducts(e, el.children)}>
                              <MenuDecor />
                              {t("navigation.children")}
                            </ProductButton>
                          </ProductCategoryContainer>
                      ) : (
                        <ProductButton name={el.name} onClick={(e)=> showProducts(e, el.name)}>
                          {i18next.language === 'ua' ? el.content : el.contentEng}
                        </ProductButton>
                      )}
                    </Region>
                  ))}
                </RegionList>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="kozhuhy" category onClick={(e)=> showProducts(e, "kozhuhy")}>{t('navigation.kozhukh')}</ProductButton>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="golovni-ubory" category onClick={(e)=> showProducts(e, "golovni-ubory")}>{t('navigation.head')}</ProductButton>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="vzuttya" category onClick={(e)=> showProducts(e, "vzuttya")}>{t('navigation.shoes')}</ProductButton>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="rushnyky" category onClick={(e)=> showProducts(e, "rushnyky")}>{t('navigation.rushnyk')}</ProductButton>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="svit" category onClick={(e)=> showProducts(e, "svit")}>{t('navigation.world')}</ProductButton>
              </ProductCategory>
              <ProductCategory>
                <ProductButton name="rizne" category onClick={(e)=> showProducts(e, "rizne")}>{t('navigation.rizne')}</ProductButton>
              </ProductCategory>
            </ProductList>
          </Navigation>
          <CardContainer>
            {find && <FindProduct newData={showProductsByNumber} titles={hideTitles}/>}
            {renderData && renderData.length > 0 && <DescriptionHeart>
              {i18next.language === 'ua' 
            ? 'Вироби, які Вам сподобаються, можна зберегти, натиснувши на сердечко ' 
            : 'You can save items by clicking the heart button '}
            <img src={whiteHeart} width="12px" alt="heart"/> 
            {i18next.language === 'ua' 
            ? ', і згодом переглянути у розділі "Збережене"'
            : '. Later You can find the selected items in "Saved" section'}
              </DescriptionHeart>}
            {sectionTitle && renderData && renderData.length > 0 && <Title>{i18next.language === 'ua' ? renderData[0].categoryUkr : renderData[0].categoryEng}</Title>}
            {subsectionTitle && <Title>{i18next.language === 'ua' ? 'для дітей' : 'for children'}</Title>}
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
