import { Content } from "../../App.styled";
import {Container, FooterBox, Phone, Email, Copyright} from "./Footer.styled";
import DecorLine from "../decor/DecorLine";

export default function Footer () {
    return (
        <Container>
            <DecorLine />
            <Content>
                <FooterBox>
                    <Phone href={"tel:+380633197588"}>+380633197588</Phone>
                    <Phone href={"tel:+380984387271"}>+380984387271</Phone>
                    <Email href={"mailto:dobros-design@ukr.net"}>dobros-design@com.ua</Email>
                    <Copyright>&#169; Уся продукція захищена авторським правом</Copyright>
                </FooterBox>
            </Content>
        </Container>
    );
}