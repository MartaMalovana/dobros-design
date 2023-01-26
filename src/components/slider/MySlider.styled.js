import styled from 'styled-components';
import arrow from '../../images/svg/arrow-slider.svg';

export const Div = styled.div`
    position: fixed; 
    display: flex;
    align-items: center;
    justify-content: center;  
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    z-index: 100;
`;

export const Div1 = styled.div`
    position: relative;
    width: 100%;
    margin: 60px 40px;
    background-color: white;
    // outline: 1px solid red;

    @media screen and (min-width: 400px) {
        // max-width: 300px;
        width: auto;
    }
`;

export const PrevArrow = styled.button`
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translateY(-50%) rotate(180deg); 
    width: 24px;
    height: 24px;
    background-color: transparent;
    background-image: url(${arrow});
    border-width: 0;
`;

export const NextArrow = styled.button`
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%); 
    width: 24px;
    height: 24px;
    background-color: transparent;
    background-image: url(${arrow});
    border-width: 0;
`;
