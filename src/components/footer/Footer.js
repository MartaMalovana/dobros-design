import { Content } from "../../App.styled";
import {Container, FooterBox, Phone, Email, Address} from "./Footer.styled";
 
export default function Footer () {
    return (
        <Container>
            <Content>
                <FooterBox>
                    <Phone href={"tel:+380633197588"}>+380633197588</Phone>
                    <Email href={"mailto:dobros-design@ukr.net"}>dobros-design@com.ua</Email>
                    <Address>м.Львів, вул.М.Хвильового</Address>
                </FooterBox>
            </Content>
        </Container>
    );
}