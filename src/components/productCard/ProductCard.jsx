import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InView, useInView } from 'react-intersection-observer';

import {Card, Title, Product, Skeleton, SkeletonMessage, ProductRegion, Heart} from '../showProduct/ShowProduct.styled';
import saveProduct from "../showProduct/saveProduct";
import saved from '../../redux/saved/saved.selectors';
import getAction from "./getAction";
import sliderActions from '../../redux/slider/slider-actions';
import savedActions from '../../redux/saved/saved-actions';

export default function ProductCard({data, title, slider, index, slide, changeCurrentSlide, sliderSize, saved}) {
    const [renderData, setRenderData] = useState(data);
    const dispatch = useDispatch();
    const allstate = useSelector(state => state);
    const { ref, inView, entry } = useInView({
      // root: null,
      // rootMargin: '0px',
      threshold: 0.5,
      triggerOnce: true
    });
  
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
          dispatch(savedActions.savedDelete(newProduct));
        } else {
          newProduct.saved = 'true';
          dispatch(savedActions.savedAdd(newProduct));
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
            <Card onClick={openSlider} ref={ref} desktop={saved && "true"}>
              {title && <ProductRegion>{renderData.regionUkr}</ProductRegion>}
              {inView ? <><Product sliderSize={sliderSize ? "true" : "false"} src={require(`../../images/jpg/costumes/${sliderSize ? renderData.photo : renderData.preview}`)} />
              <Heart
                onClick={save}
                className={renderData.saved === "true" && "red"}
                name={renderData.id}
                desktop={saved && 'true'}
              />
              </> : <Skeleton><SkeletonMessage>???????? ????????????????????????????...</SkeletonMessage></Skeleton>} 
            </Card>
        
    </>
  );
}
