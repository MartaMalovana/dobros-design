import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Container, Logo, HeaderBox, BurgerButton, Burger, Menu, MenuClose } from "./Header.styled";
import { Content } from "../../App.styled";
import logo from '../../images/jpg/logo.jpg';
import RenderMenuList from "./RenderMenuList";
import { useLocation } from 'react-router-dom';
import LanguageBox from './Languages';

export default function Header() {
    const [menu, setShowMenu] = useState(false);
    const location = useLocation();


    const openMenu = (e) => {
        e.preventDefault();
        setShowMenu(true);
    };

    const closeMenu = (e) => {
        e.preventDefault();
        setShowMenu(false);
    };

    return (
        <Container reviews={location.pathname}>
            <Content>
                <HeaderBox desktop={location.pathname === '/' && "desktop"}>
                    <NavLink to="/"><Logo src={logo} /></NavLink>
                    <LanguageBox />
                    <BurgerButton onClick={openMenu}><Burger /></BurgerButton>
                    {menu &&
                        <Menu onClick={closeMenu}>
                            <MenuClose onClick={closeMenu} />
                            <RenderMenuList />
                        </Menu>
                    }
                    <RenderMenuList tablet />
                </HeaderBox>
            </Content>
        </Container>
    );
}