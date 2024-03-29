import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import close from '../../images/svg/close1.svg';

export const Container = styled.div`
    position: relative;
    box-shadow: 0 5px 20px -10px #000;
    background-image: ${props => props.reviews === '/contacts' && 'linear-gradient(180deg, #f2f2f2, #3f5b46ed)'};

    @media screen and (min-width: 768px) {
        background-image: ${props => props.reviews === '/works' && 'linear-gradient(180deg, #f2f2f2, #cf4c4ced)'};
    }
`;

export const HeaderBox = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 10px 15px;

    @media screen and (min-width: 1000px) {
        display: ${props => props.desktop && "none"};
        padding: 10px 5px;
        margin: 0 20px;
    }
`;

export const Logo = styled.img`
    width: 30px;
    height: 30px;
    border: 5px solid white;
    border-radius: 50%;
    background-color: white;
    object-fit: contain;

    @media screen and (min-width: 1000px) {
        width: 40px;
        height: 40px;
    }    
`;

export const Languages = styled.div`
    display: ${props => props.position === 'true' && 'none'};
    margin: 0 auto 0 10px;

    @media screen and (min-width: 768px) {
        position: absolute;
        left: 50px;
    }

    @media screen and (min-width: 1000px) {
        display: ${props => props.position === 'true' && 'block'};;
        left: ${props => props.position === 'true' && '70px'};
        top: ${props => props.position === 'true' && '30px'};
    }
`;

export const LangButton = styled.button`
    background-color: ${props => props.active === 'true' ? 'rgb(255,184,28)' : 'transparent'};
    border: none;
    padding: 3px 5px;
    font-weight: ${props => props.active === 'true' ? 'bold' : 'normal'};
    color: ${props => props.position === 'true' && 'white'};
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

    @media screen and (min-width: 768px) {
        display: none;
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
    top: ${props => props.slider ? "-50px" : "50px"};
    right: ${props => props.slider ? "0px" : "50px"};
    width: 30px;
    height: 30px;
    padding:0;
    border: 2px solid black;
    background: url(${close}) no-repeat 50% 50%;

    @media screen and (min-width: 768px) {
        top: 0;
        right: -50px;
    }       
`;

export const MenuList = styled.ul`
  padding: 0;
  font-size: 20px;
  list-style: none;
  display: ${props => props.tablet && "none"};

  @media screen and (min-width: 768px) {
    display:  ${props => props.desktop ? "none" : "flex"};
    margin: 10px 0;
  }

  @media screen and (min-width: 1000px) {
    position: absolute;
    display:  ${props => props.desktop &&  "flex"};
    top: ${props => props.desktop ? "20px" : "10px"};
    right: ${props => props.desktop ? "15px" : "5px"};
  }
`;

export const StyledLink = styled(NavLink)`
    color: black;

    &.active {
        color: rgb(250,70,22);
    }

    @media screen and (min-width: 1000px) {
        color: ${props => props.desktop && "white"};    
    }
`;

export const MenuItem = styled.li`
    position: relative;
    margin: ${props => props.tablet ? "10px 0 10px 20px" : "20px 0"};
    text-align: center;
    transition-property: color;
    transition-duration: 300ms;

    &.activePage {
        color: rgb(250,70,22);
    }

    &:hover {
        color: rgb(255,184,28);
    }

    &:focus {
        color: rgb(250,70,22);
    }

    @media screen and (min-width: 768px) {
        margin: 0 0 0 25px;
        font-size: 18px;
    }

    @media screen and (min-width: 1000px) {
        font-size: 20px;
    }
`;

export const MenuItemHeart = styled(MenuItem)`
    position: relative;
`;

