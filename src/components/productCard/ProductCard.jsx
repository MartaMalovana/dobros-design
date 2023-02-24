import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import i18next from "i18next";
import {
  Card,
  Product,
  Skeleton,
  SkeletonMessage,
  ProductRegion,
  Heart,
} from "../showProduct/ShowProduct.styled";
import saveProduct from "../showProduct/saveProduct";
import getAction from "./getAction";
import sliderActions from "../../redux/slider/slider-actions";
import savedActions from "../../redux/saved/saved-actions";

export default function ProductCard({
  data,
  title,
  index,
  slide,
  changeCurrentSlide,
  sliderSize,
  saved,
}) {
  const [renderData, setRenderData] = useState(data);
  const dispatch = useDispatch();
  const allstate = useSelector((state) => state);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    setRenderData(data);
  }, [data]);

  const save = (e) => {
    // Change data in main state
    const productRegion = saveProduct(e.target.name, allstate);
    const action = getAction(productRegion);
    dispatch(action(e.target.name));

    //Change data in local state
    let newProduct = { ...renderData };
    if (newProduct.saved === "true") {
      newProduct.saved = "false";
      dispatch(savedActions.savedDelete(newProduct));
    } else {
      newProduct.saved = "true";
      dispatch(savedActions.savedAdd(newProduct));
    }
    setRenderData(newProduct);
    if (changeCurrentSlide) {
      changeCurrentSlide(newProduct);
    }
  };

  const openSlider = (e) => {
    if (e.target.tagName === "BUTTON") return;
    slide(index);
    dispatch(sliderActions.sliderToggle());
  };

  return (
    <>
      <Card onClick={openSlider} ref={ref} desktop={saved && "true"}>
        {title && (
          <ProductRegion>
            {i18next.language === "ua"
              ? renderData.regionUkr
              : renderData.regionEng}
          </ProductRegion>
        )}
        {inView ? (
          <>
            <Product
              sliderSize={sliderSize ? "true" : "false"}
              src={require(`../../images/jpg/costumes/${
                sliderSize ? renderData.photo : renderData.preview
              }`)}
              alt="Photo of the company's product"
            />
            <Heart
              onClick={save}
              className={renderData.saved === "true" && "red"}
              name={renderData.id}
              desktop={saved && "true"}
              size={sliderSize ? 'true' : 'false'}
            />
          </>
        ) : (
          <Skeleton>
            <SkeletonMessage>фото завантажується...</SkeletonMessage>
          </Skeleton>
        )}
      </Card>
    </>
  );
}
