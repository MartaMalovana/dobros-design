import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {SearchContainer, Form, Number, Select, Option, Label, LabelSelect, Input, ButtonSubmit, Result, Underline} from './FindProduct.styled';
import { CardContainer,  CardBox, Product, ProductRegion, Heart} from './ShowProduct.styled';
import getRegionData from './getRegionData';
import saveProduct from './saveProduct';
import ProductCard from '../productCard/ProductCard';

export default function FindProduct () {
    const [renderData, setRenderData] = useState(null);
    const allstate = useSelector(state => state);

    const find = (e) => {
        e.preventDefault();
        const data = getRegionData(e.currentTarget.category.value, allstate);
        const products = data.filter(el => el.number.includes(e.currentTarget.number.value));
        setRenderData(products);
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
                    renderData.map((el) => {
                    return (
                        <ProductCard key={el.id} one>
                        <ProductRegion>{el.regionUkr} </ProductRegion>
                        <Product
                            src={require(`../../images/jpg/costumes/${el.preview}`)}
                        />
                        </ProductCard>
                        
                    );
                    })}
            </CardContainer>
        </SearchContainer>
    );
};