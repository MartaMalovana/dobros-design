import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {SearchContainer, Form, Number, Select, Option, Label, LabelSelect, Input, ButtonSubmit, Result, Underline} from './FindProduct.styled';
import { CardContainer,  Card, Product, ProductRegion, Heart} from './ShowProduct.styled';
import getRegionData from './getRegionData';
import saveProduct from './saveProduct';
import ProductCard from '../productCard/ProductCard';
import { useEffect } from 'react';
import {slider} from '../../redux/slider/slider-selectors';
import sliderActions from '../../redux/slider/slider-actions';
// import { allProducts } from '../../redux/saved/saved.selectors';

export default function FindProduct ({newData}) {
    const [renderData, setRenderData] = useState(null);
    const [slide, setSlide] = useState(0);
    const allstate = useSelector(state => state);
    const showSlider = useSelector(slider);

    const find = (e) => {
        e.preventDefault();
        const data = getRegionData(e.currentTarget.category.value, allstate);
        const products = data.filter(el => el.number.includes(e.currentTarget.number.value));
        // setRenderData(products);
        newData(products);
    };
    
    return (
        <SearchContainer>
            <Form onSubmit={find}>
                <Number>
                    <Label htmlFor='number'>Введіть номер продукту, який шукаєте:</Label>
                    <Input id='number' required placeholder='001' pattern='[0-9]{0,5}' title='Вводьте, будь-ласка, лише цифри'></Input>
                    <Underline />
                </Number>
                <LabelSelect htmlFor='category'>У якому розділі шукати?</LabelSelect>
                <Select id='category'>
                    <Option value="all">У всіх</Option>
                    <Option value="bukovyna">Буковина</Option>
                    <Option value="centralna">Центральна Україна</Option>
                    <Option value="hutsulshchyna">Гуцульщина</Option>
                    <Option value="opillya">Опілля</Option>
                    <Option value="volyn">Волинь</Option>
                    <Option value="zakarpattya">Закарпаття</Option>
                </Select>
                <ButtonSubmit type='submit'>Пошук</ButtonSubmit>
            </Form>
            <CardContainer>
                {renderData &&
                    renderData.map((el, index) => {
                    return (
                        // <Card key={el.id} one title index={index}>
                        // <ProductRegion>{el.regionUkr} </ProductRegion>
                        // <Product
                        //     src={require(`../../images/jpg/costumes/${el.preview}`)}
                        // />
                        // </Card>  
                        <ProductCard data={el} title index={index} />
                    );
                    })}
                    {/* {showSlider && <MySlider data={renderData} slider={closeSlider} slide={slide} changeElement={changeElement}/>} */}
            </CardContainer>
        </SearchContainer>
    );
};