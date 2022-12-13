import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import close from '../../images/svg/close.svg';
import heart from '../../images/svg/heart.svg';

export const Container = styled.div`
    position: relative;
    box-shadow: 0 5px 20px -10px #000;
    
    // &::after {
    //     content: '';
    //     position: absolute;
    //     width: 100%;
    //     height: 2px;
    //     background-color: black;
    // }
`;

export const HeaderBox = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 10px 15px;
`;

export const Logo = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
`;

export const Phone = styled.a`
    color: black;
    font-weight: 400;

    &:hover {
        background-color: rgb(255,184,28);
        font-weight: 600;
        border-radius: 3px;
        padding: 0 4px;
    }
`;

export const BurgerButton = styled.button`
    height: 28px;
    border: none;
    background-color: inherit;

    &:hover,
    &:focus {
        background-color: rgb(255,184,28);
    }
`;

export const Burger = styled.div`
    position: relative;
    width: 30px;
    height: 2px;
    background-color: black;

    &::before,
    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        background-color: black; 
    }

    &::before {
        top: -6px;
    }

    &::after {
        bottom: -6px;
    }
`;

export const Menu = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    z-index: 1000;
`;

export const MenuClose = styled.button`
    position: absolute;
    top: ${props => props.slider ? "10px" : "30px"};
    right: ${props => props.slider ? "10px" : "30px"};
    width: ${props => props.slider ? "20px" : "30px"};
    height: ${props => props.slider ? "20px" : "30px"};
    padding:0;
    border: none;
    background-size: 30px 30px;
    background: url(${close}) no-repeat 50% 50%;
`;
export const MenuList = styled.ul`
  padding: 0;
  font-size: 20px;
//   text-transform: uppercase;
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
    color: black;

    &.active {
        color: rgb(250,70,22);
    }
`;

export const MenuItem = styled.li`
    position: relative;
    margin: 20px 0;
    text-align: center;
`;

export const MenuItemHeart = styled(MenuItem)`
    position: relative;
    // padding-left: 25px;
    // padding-right: 10px;

    // &::before {
    //     content: '';
    //     position: absolute;
    //     left: 5px;
    //     top: 50%;
    //     transform: translateY(-50%);
    //     width: 15px;
    //     height: 15px;
    //     background-image: url(${heart});
        
    // };
`;

