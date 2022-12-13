import { Content } from "../../App.styled";
import { 
    Container, 
    HeroBox, 
    Photo, 
    Title, 
    Text, 
    Button, 
    Span, 
    About, 
    ProposesTitle, 
    ProposesList, 
    Propose,
    P } from './Hero.styled';
import photo1 from '../../images/jpg/hero.jpg';
import DecorLine from "../decor/DecorLine";

export default function Hero() {
    return (
        <Container>
            <Content>
                <HeroBox>
                    <Text>Ательє сценічного костюму</Text>
                    <Photo src={photo1} />
                    <Title><DecorLine />DOBROS-DESIGN<DecorLine /></Title>
                    <About>Ми з 2007 року на ринку пошиття сценічних костюмів, та за цей час успішно збагачуємо досвід та удосконалюємо свою майстерність.</About>
                    <ProposesTitle>Наші пропозиції:</ProposesTitle>
                    <ProposesList>
                        <Propose>пошиття національного одягу всіх регіонів України і сусідніх держав</Propose>
                        <Propose>пошиття одягу для танцювальних колективів</Propose>
                        <Propose>пошиття одягу для хорових колективів</Propose>
                        <Propose>пошиття карнавальних костюмів для вертепів, новорічних вечірок</Propose>
                        <Propose>пошиття весільного строю</Propose>
                        <Propose>виготовлення тканих речей</Propose>
                        <Propose>виготовлення аксесуарів до костюмів</Propose>
                    </ProposesList>
                    <P>Завдяки професіоналізму колективу ми швидко і якісно виконуємо замовлення!</P>
                    <P>Порядність відносин гарантуємо!</P>
                </HeroBox>

                {/* <Button type="button"><Span>Продукція</Span></Button> */}
            </Content>
        </Container>
    );
}