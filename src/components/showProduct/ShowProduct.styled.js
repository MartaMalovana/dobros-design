import styled from 'styled-components';
import cross from '../../images/svg/cross.svg';
import heart from '../../images/svg/heart.svg';
import heartRed from '../../images/svg/heart-red.svg';

import up from '../../images/svg/up.svg';

export const Container = styled.div`
    position: relative;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    padding: 0 15px;
`;

export const Button = styled.button`
    width: 105px;    
    background-color: white;
    font-family: 'Montserrat';
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    &:focus {
        border: 1px solid rgb(250,70,22);
        color: rgb(250,70,22);
        box-shadow: rgba(250,70,22, 0.25) 0px 6px 12px -2px, rgba(250,70,22, 0.3) 0px 3px 7px -3px;
        `;

export const ButtonHeart = styled(Button)`
    position: relative;
    padding-top: 12px;

    &::before {
        content: '';
        position: absolute;
        top: 6px;
        left: 50%;
        transform: translateX(-50%);
        width: 13px;
        height: 13px;
        background-image: url(${heartRed});
    }
`;
export const Heart = styled.button`
    position:${props => props.static ? "static" : "absolute"};
    bottom: 20px;
    left: 15px;
    width: 20px;
    height: 20px;
    margin: 1px auto 0;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    background-image: url(${heart});
    
    &.red {
        background-image: url(${heartRed});
    }
`;

export const Navigation = styled.nav`
   position: absolute;
   top: 15px;
   left: 0;
   width: fit-content;
   z-index: 100;
   margin-bottom: 20px;
   padding: 0 0 10px;
   overflow: hidden; 
   border-top-right-radius: 5px; 
   border-bottom-right-radius: 5px; 
   background-color: white;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
   transition-property: left;
   transition-duration: 500ms;
   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
   &.hide {
        left: -100%;
   }
`;

export const NavTitle = styled.div`
   padding: 10px;
   background-color: rgb(250,70,22);
   color: white;
`;

export const HideButton = styled.button`
    position: absolute;
    top: 7px;
    right: 5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
    background-color: rgb(250,70,22);
    background-image: url(${cross});
    fill: white;
`;

export const ProductList = styled.ul`
    padding: 0;
`;

export const ProductCategory = styled.li`
    margin-bottom: 10px;
    padding: 0 10px;
`;

export const RegionList = styled.ul`
   
`;

export const Region = styled.li`
    margin: 10px 0;
`;

export const ProductButton = styled.button`
   padding: 0;   
   background-color: inherit;
   border: none;
   font-family: 'Montserrat';
   font-size: 16px;
   
   &:hover, 
   &:focus {
        color: rgb(250,70,22);
   };

   &.active {
        color: rgb(250,70,22);
   }
`;

export const CardContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   margin: 15px;
`;
export const Title = styled.h2`    
    width: 100%;
    margin: 0 auto 10px;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 400;
`;

export const Card = styled.a`
   position: relative;
   flex-basis: ${props => props.one ? "100%" : "Calc((100% - 20px) / 2)"};
   margin-bottom: 20px;

   &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
   }
`;

export const Product = styled.img`
   width: 100%;
   height: auto;
`;

export const ProductRegion = styled.p`
   text-align: center;
`;

export const Up = styled.button`
   position: fixed;
   bottom: 120px;
   right: 10px;
   width: 30px;
   height: 30px;
   border: none;
   border-radius: 50%;
   background-color: white;
   background-image: url(${up});
`;
