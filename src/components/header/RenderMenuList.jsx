import { MenuList, StyledLink, MenuItem } from "./Header.styled";
import DecorLine from "../decor/DecorLine";

export default function RenderMenuList ({tablet, desktop}) {
    return (
        <MenuList tablet={tablet} desktop={desktop && 'true'}>
        <StyledLink to='/' desktop={desktop && 'true'}>
            <MenuItem tablet={tablet}>Головна</MenuItem>
            <DecorLine tablet={tablet}/>
        </StyledLink>
        <StyledLink to='/products' desktop={desktop && 'true'}>
            <MenuItem tablet={tablet}>Продукція</MenuItem>
            <DecorLine tablet={tablet}/>
        </StyledLink>
        <StyledLink to='/saved' desktop={desktop && 'true'}>
            <MenuItem tablet={tablet}>Збережене</MenuItem>
            <DecorLine tablet={tablet}/>
        </StyledLink>
        <StyledLink to='/works' desktop={desktop && 'true'}>
            <MenuItem tablet={tablet}>Наші роботи</MenuItem>
            <DecorLine tablet={tablet}/>
        </StyledLink>
        <StyledLink to='/contacts' desktop={desktop && 'true'}>
            <MenuItem>Контакти</MenuItem>
        </StyledLink>
    </MenuList>

    );
}