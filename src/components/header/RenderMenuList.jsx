import { useTranslation } from 'react-i18next';
import { Trans} from "react-i18next";
import { MenuList, StyledLink, MenuItem } from "./Header.styled";
import DecorLine from "../decor/DecorLine";

export default function RenderMenuList({ tablet, desktop }) {
  const { t, i18n } = useTranslation();
  
  return (
    <MenuList tablet={tablet} desktop={desktop && "true"}>
      <StyledLink to="/" desktop={desktop && "true"}>
        <MenuItem tablet={tablet}>{t('menu.main')}</MenuItem>
        <DecorLine tablet={tablet} />
      </StyledLink>
      <StyledLink to="/products" desktop={desktop && "true"}>
        <MenuItem tablet={tablet}>{t('menu.products')}</MenuItem>
        <DecorLine tablet={tablet} />
      </StyledLink>
      <StyledLink to="/saved" desktop={desktop && "true"}>
        <MenuItem tablet={tablet}>{t("menu.saved")}</MenuItem>
        <DecorLine tablet={tablet} />
      </StyledLink>
      <StyledLink to="/works" desktop={desktop && "true"}>
        <MenuItem tablet={tablet}>{t("menu.works")}</MenuItem>
        <DecorLine tablet={tablet} />
      </StyledLink>
      <StyledLink to="/contacts" desktop={desktop && "true"}>
        <MenuItem>{t("menu.contacts")}</MenuItem>
      </StyledLink>
    </MenuList>
  );
}
