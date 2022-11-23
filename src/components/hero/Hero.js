import { Content } from "../../App.styled";
import {Container, HeroBox, Photo, Title, Text, Text1, Burger} from './Hero.styled';
import photo1 from '../../images/jpg/hero.jpg';
// import logo from '../../images/jpg/logo.jpg';

export default function Hero () {
    return (
        <Container>
            <Content>
                <HeroBox>
                    <Burger />
                    <Title>DOBROS-DESIGN</Title>
                    {/* <Logo src={logo} /> */}
                    <Photo src={photo1}/>
                    <Text>Ательє сценічного</Text>
                    <Text1> костюму</Text1>
                </HeroBox>
            </Content>
        </Container>
    );
}