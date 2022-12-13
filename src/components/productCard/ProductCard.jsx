import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Card, Title, Product, ProductRegion, Heart} from '../showProduct/ShowProduct.styled';
import saveProduct from "../showProduct/saveProduct";
import saved from '../../redux/saved/saved.selectors';
import getAction from "./getAction";
import sliderActions from '../../redux/slider/slider-actions';

export default function ProductCard({data, title, slider, index, slide, changeCurrentSlide}) {
    const [renderData, setRenderData] = useState(data);
    const dispatch = useDispatch();
    const allstate = useSelector(state => state);

    useEffect(()=> {
      setRenderData(data);
    }, [data]);

    const save = (e) => {
        // Change data in main state
        const productRegion = saveProduct(e.target.name, allstate);
        const action = getAction(productRegion);
        dispatch(action(e.target.name));
        //Change data in local state
        let newProduct = {...renderData};
        if(newProduct.saved === 'true') {
          newProduct.saved = 'false';
        } else {
          newProduct.saved = 'true';
        };
        setRenderData(newProduct);
        if(changeCurrentSlide) {
          changeCurrentSlide(newProduct);
        }
      };

      const openSlider = (e) => {
        if(e.target.tagName === 'BUTTON') return;
        slide(index);
        dispatch(sliderActions.sliderToggle());
      };

  return (
    <>
      {renderData &&
            <Card onClick={openSlider}>
              {title && <ProductRegion>{renderData.regionUkr}</ProductRegion>}
              <Product src={require(`../../images/jpg/costumes/${renderData.preview}`)} />
              <Heart
                onClick={save}
                className={renderData.saved === "true" && "red"}
                name={renderData.id}
              />
            </Card>
        }
    </>
  );
}
