import { Content } from "../../App.styled";
import {Container, HeroBox, Photo, Title, Text, Button, Span} from './Hero.styled';
import photo1 from '../../images/jpg/1.jpg';

export default function Hero () {
    return (
        <Container>
            <Content>
                <HeroBox>
                    <Text>Ательє сценічного костюму</Text>
                    <Title>DOBROS-DESIGN</Title>
                    <Photo src={photo1}/>
                </HeroBox>
                <Button type="button"><Span>Продукція</Span></Button>
            </Content>
        </Container>
    );
}