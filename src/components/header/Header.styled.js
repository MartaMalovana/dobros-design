import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
// import close from '../../images/svg/close.svg';
import heart from '../../images/svg/heart.svg';
import close from '../../images/svg/close1.svg';
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

    @media screen and (min-width: 1000px) {
        display: ${props => props.desktop && "none"};
        padding: 10px 5px;
    }
`;

export const Logo = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;

    @media screen and (min-width: 1000px) {
        width: 40px;
        height: 40px;

        }    

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

    
`;
export const MenuList = styled.ul`
  padding: 0;
  font-size: 20px;
//   text-transform: uppercase;
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

    &:hover {
        color: rgb(255,184,28);
    }

    @media screen and (min-width: 768px) {
        margin: 0 0 0 25px;
    }

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

