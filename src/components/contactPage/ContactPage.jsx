import {
  Container,
  P,
  Phones,
  Phone,
  Viber,
  Email,
  Facebook,
  Instagram,
  Social,
  Socials,
  Address,
} from "./ContactPage";
import { Content } from "../../App.styled";

export default function ContactPage() {
  return (
    <Container>
      <Content contacts>
        <div>
          <Socials>
            <Social>
              <P>Facebook: </P>
              <a href="https://www.facebook.com/dobrosdesignlviv">
                <Facebook />
              </a>
            </Social>
            <Social>
              <P>Instagram: </P>
              <a href="https://www.instagram.com/dobros_design/">
                <Instagram />
              </a>
            </Social>
          </Socials>
          <Phones>
            <Phone href={"tel:+380633197588"} main>
              +380633197588, є Viber <Viber />
            </Phone>
            <Phone href={"tel:+380984387271"} main>
              +380984387271
            </Phone>
          </Phones>
          <div>
            <Email href={"mailto:dobros-design@ukr.net"} main>
              dobros-design@com.ua
            </Email>
          </div>
          <Address>вул.М.Хвильового 12, Львів, UA</Address>
        </div>
      </Content>
    </Container>
  );
}
