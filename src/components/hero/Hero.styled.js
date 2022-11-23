import styled from 'styled-components';

export const Container = styled.div`
    // background-color: black;
`;

export const HeroBox = styled.section`
    position: relative;
    width: 100%;
    // background-color: #000;
    padding: 0 0 0;
`;

export const Logo = styled.img`
    position: absolute;
    width: 30px;
    height: 30px;
    object-fit: contain;
`;

export const Burger = styled.div`
    position: absolute;
    width: 30px;
    height: 2px;
    top: 25px;
    left: 15px;
    background-color: white;

    &::before,
    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        background-color: white; 
    }

    &::before {
        top: -7px;
    }

    &::after {
        bottom: -7px;
    }
`;

export const Photo = styled.img`
    position: absolut;
    // top: -100px;
    width: 100%;
    height: auto;
    // margin-top: 30px;

`;

export const Title = styled.h1`
    position: absolute;
    left: 170px;
    top: 17px;
    width: 100%;
    margin: 0px;
    padding-left: 5px;
    padding-right: 15px;
    // text-align: right;
    font-size: 20px;
    font-family: 'Montserrat'; 
    font-weight: 400;
    // -webkit-background-clip: text;
    // background-clip: text;
    // background-image: linear-gradient(to right, rgba(255, 95, 31, 1), rgb(214,0,28));
    color: white;
    background-color: rgba(255, 255, 255, 0.3);

`;

export const Text = styled.p`
    position: absolute;
    right: 15px;
    top: 46px;
    width: 100%;
    text-align: right;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    font-family: 'Montserrat'; 
    font-size: 10px;
`;

export const Text1 = styled.p`
    position: absolute;
    right: 15px;
    top: 63px;
    width: 100%;
    text-align: right;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    font-family: 'Montserrat'; 
    font-size: 10px;
`;


