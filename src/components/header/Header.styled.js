import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import close from '../../images/svg/close.svg';

export const Container = styled.div`
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: black;
    }
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
    z-index: 1;
`;

export const MenuClose = styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 30px;
    height: 30px;
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
    margin-bottom: 40px;
    text-align: center;
`;

