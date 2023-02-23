import { useTranslation } from "react-i18next";
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
} from "./ContactPage.styled.js";
import { Content } from "../../App.styled";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <Container>
      <Content contacts>
        <div>
          <Socials>
            <Social href="https://www.facebook.com/dobrosdesignlviv">
                <P>Facebook: </P>
                <Facebook />
            </Social>
            <Social href="https://www.instagram.com/dobros_design/">
                <P>Instagram: </P>
                <Instagram />
            </Social>
          </Socials>
          <Phones>
            <Phone href={"tel:+380633197588"} main>
              +380633197588, {t("contacts.end")} Viber <Viber />
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
          <Address>{t("contacts.address")}</Address>
        </div>
      </Content>
    </Container>
  );
}
