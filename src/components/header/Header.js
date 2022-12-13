import {useState} from "react";
import { Container, Logo, Phone, HeaderBox, BurgerButton, Burger, Menu, MenuList, MenuItem, MenuItemHeart, MenuClose, StyledLink} from "./Header.styled";
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
                    {/* <Phone href={"tel:+380633197588"}>+380633197588</Phone> */}
                    <BurgerButton onClick={openMenu}><Burger /></BurgerButton>
                    {menu && 
                        <Menu>
                            <MenuClose onClick={closeMenu}/>
                            <MenuList>
                                <StyledLink to='/dobros-design'>
                                    <MenuItem>Головна</MenuItem>
                                    <DecorLine />
                                </StyledLink>
                                <StyledLink to='/products'>
                                    <MenuItem>Продукція</MenuItem>
                                    <DecorLine />
                                </StyledLink>
                                <StyledLink to='/saved'>
                                    <MenuItemHeart>Збережене</MenuItemHeart>
                                    <DecorLine />
                                </StyledLink>
                                <StyledLink to='/works'>
                                    <MenuItem>Наші роботи</MenuItem>
                                    <DecorLine />
                                </StyledLink>
                                <StyledLink to='/contacts'>
                                    <MenuItem>Контакти</MenuItem>
                                </StyledLink>
                            </MenuList>
                        </Menu>
                    }
                </HeaderBox>
            </Content>
            {/* <DecorLine /> */}
        </Container>
    );
}