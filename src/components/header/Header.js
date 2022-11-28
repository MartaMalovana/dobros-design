import {useState} from "react";
import { Container, Logo, Phone, HeaderBox, BurgerButton, Burger, Menu, MenuList, MenuItem, MenuClose, StyledLink} from "./Header.styled";
import { Content } from "../../App.styled";
import DecorLine from "../decor/DecorLine";
import logo from '../../images/jpg/logo.jpg';

export default function Header () {
    const [menu, setShowMenu] = useState(false);

    const openMenu = (e) => {
        e.preventDefault();
        setShowMenu(true);
    };

    const closeMenu = (e) => {
        e.preventDefault();
        setShowMenu(false);
    };

    return (
        <Container>
            <Content>
                <HeaderBox>
                    <Logo src={logo} />
                    <Phone href={"tel:+380633197588"}>+380633197588</Phone>
                    <BurgerButton onClick={openMenu}><Burger /></BurgerButton>
                    {menu && 
                        <Menu>
                            <MenuClose onClick={closeMenu}/>
                            <MenuList>
                                <StyledLink to='/'>
                                    <MenuItem>Головна<DecorLine /></MenuItem>
                                </StyledLink>
                                <StyledLink to='/products'>
                                    <MenuItem>Продукція<DecorLine /></MenuItem>
                                </StyledLink>
                                <StyledLink to='/saved'>
                                    <MenuItem>Збережене<DecorLine /></MenuItem>
                                </StyledLink>
                                <StyledLink to='/works'>
                                    <MenuItem>Наші роботи<DecorLine /></MenuItem>
                                </StyledLink>
                                <StyledLink to='/contacts'>
                                    <MenuItem>Контакти</MenuItem>
                                </StyledLink>
                            </MenuList>
                        </Menu>
                    }
                </HeaderBox>
            </Content>
        </Container>
    );
}