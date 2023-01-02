import {useState} from "react";
import { Container, Logo, Phone, HeaderBox, BurgerButton, Burger, Menu, MenuList, MenuItem, MenuItemHeart, MenuClose, StyledLink} from "./Header.styled";
import { Content } from "../../App.styled";
import DecorLine from "../decor/DecorLine";
import logo from '../../images/jpg/logo.jpg';
import RenderMenuList from "./RenderMenuList";

export default function Header ({desktop}) {
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
                <HeaderBox desktop={desktop}>
                    <Logo src={logo} />
                    <BurgerButton onClick={openMenu}><Burger /></BurgerButton>
                    {menu && 
                        <Menu>
                            <MenuClose onClick={closeMenu}/>
                            <RenderMenuList />
                        </Menu>
                    }
                    <RenderMenuList tablet/>
                </HeaderBox>
            </Content>
            {/* <DecorLine /> */}
        </Container>
    );
}