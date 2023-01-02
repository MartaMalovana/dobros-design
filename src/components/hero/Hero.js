import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { Content } from "../../App.styled";
import { 
    Container, 
    HeroBox, 
    Photo, 
    Title, 
    Text, 
    About, 
    ProposesTitle, 
    ProposesList, 
    Propose,
    P,
    LogoHero,
    ProposeContainer,
    ProposePhoto,
    ProposeText,
    OrderTitle,
    OrderInfo,
    OrderText} from './Hero.styled';
import { Phone } from "../contactPage/ContactPage";
import photo1 from '../../images/jpg/hero.jpg';
import DecorLine from "../decor/DecorLine";
import RenderMenuList from "../header/RenderMenuList";
import proposes from './proposes.json';

export default function Hero({desktop}) {
    const [showInfo, setShowInfo] = useState(false);
    const { ref, inView, entry } = useInView({
        root: null,
        rootMargin: '0px',
        threshold: 0,
        triggerOnce: true
    });
    useEffect(() => console.log(inView), [inView]);

    return (
        <Container>
            <Content>
                <HeroBox> 
                    <LogoHero />       
                    <RenderMenuList tablet desktop={desktop}/>
                    <Text className={inView && 'visible'}>Ательє сценічного костюму</Text>
                    <div ref={ref}><Photo /></div>
                    <Title className={inView && "visible"}><DecorLine desktop />DOBROS - DESIGN<DecorLine desktop/></Title>
                    <About>Ми з 2007 року - на ринку пошиття сценічних костюмів. Успішно працюємо, збагачуємо досвід та удосконалюємо свою майстерність.</About>
                    <ProposesTitle>Ми пропонуємо:</ProposesTitle>
                    <ProposesList>
                        {proposes.map(el => 
                            <Propose key={el.id}>
                                <ProposeContainer>
                                    <ProposeText>{el.text}</ProposeText>
                                    <ProposePhoto src={require(`../../images/jpg/proposes/${el.photo}`)}/>
                                </ProposeContainer>
                            </Propose>
                        )}
                    </ProposesList>
                    <P>Завдяки професіоналізму колективу ми швидко і якісно виконуємо замовлення!</P>
                    <P>Порядність відносин гарантуємо!</P>
                </HeroBox>
                <OrderTitle onClick={() => setShowInfo(!showInfo)}>Як здійснити замовлення?</OrderTitle>
                {showInfo && <OrderInfo>
                    <OrderText>
                    У розділі "Продукція" оберіть категорію костюмів. Далі - костюм, що
                    сподобався. На картці товару є номер. Назва категорії і номер картки
                    визначає ідентифікацію моделі костюму (наприклад, "Центральна Україна
                    - 001" або "Волинь - 007").
                    </OrderText>
                    <OrderText>
                    Зателефонуйте нам за номером телефону 
                    <Phone href={"tel:+380633197588"}> +380633197588</Phone> або 
                    <Phone href={"tel:+380984387271"}> +380984387271</Phone>. 
                    </OrderText>
                    <OrderText>
                    У період перемовин узгоджується колористика або розробка нової моделі.
                    </OrderText>
                    <OrderText>
                    Можливий виїзд фахівця для зняття мірок.
                    </OrderText>
                    <OrderText>
                    Після виконання замовлення надається повний пакет бухгалтерський
                    документів згідно чинного Законодавства.
                    </OrderText>
                </OrderInfo>           
                }
            </Content>
        </Container>
    );
}