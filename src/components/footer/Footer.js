import { Content } from "../../App.styled";
import {Container, FooterBox, Phone, Email, Address, Copyright} from "./Footer.styled";
import DecorLine from "../decor/DecorLine";

export default function Footer () {
    return (
        <Container>
            <DecorLine />
            <Content>
                <FooterBox>
                    <Phone href={"tel:+380633197588"}>+380633197588</Phone>
                    <Email href={"mailto:dobros-design@ukr.net"}>dobros-design@com.ua</Email>
                    <Address>вул.М.Хвильового 12, Львів, UA</Address>
                    <Copyright>&#169; Уся продукція захищена авторським правом</Copyright>
                </FooterBox>
            </Content>
        </Container>
    );
}