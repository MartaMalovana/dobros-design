import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
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
import { Phone } from "../contactPage/ContactPage.styled";
import photo1 from '../../images/jpg/hero.jpg';
import DecorLine from "../decor/DecorLine";
import RenderMenuList from "../header/RenderMenuList";
import proposes from './proposes.json';
import LanguageBox from "../header/Languages";

export default function Hero({desktop}) {
    const { t, i18n } = useTranslation();

    const [showInfo, setShowInfo] = useState(false);
    const { ref, inView, entry } = useInView({
        root: null,
        rootMargin: '0px',
        threshold: 0,
        triggerOnce: true
    });

    return (
        <Container>
            <Content>
                <HeroBox> 
                    <LogoHero />   
                    <LanguageBox home />
                    <RenderMenuList tablet desktop={desktop}/>
                    <Text className={inView && 'visible'}>{t('hero.title')}</Text>
                    <div ref={ref}><Photo /></div>
                    <Title className={inView && "visible"}><DecorLine desktop />DOBROS - DESIGN<DecorLine desktop/></Title>
                    <About>{t('hero.about1')}</About>
                    <About>{t('hero.about2')}</About>
                    <ProposesTitle>{t('hero.propose')}</ProposesTitle>
                    <ProposesList>
                        {proposes.map(el => 
                            <Propose key={el.id}>
                                <ProposeContainer>
                                    <ProposeText>{i18next.language === 'ua' ? el.text : el.textEng}</ProposeText>
                                    <ProposePhoto src={require(`../../images/jpg/proposes/${el.photo}`)}/>
                                </ProposeContainer>
                            </Propose>
                        )}
                    </ProposesList>
                    <P>{t('hero.p1')}</P>
                    <P>{t('hero.p2')}</P>
                </HeroBox>
                <OrderTitle onClick={() => setShowInfo(!showInfo)}>{t('hero.orderTitle')}</OrderTitle>
                {showInfo && <OrderInfo>
                    <OrderText>{t('hero.orderP1')}</OrderText>
                    <OrderText>
                        {i18next.language === 'ua' ? 
                        <>
                        Зателефонуйте нам за номером телефону 
                        <Phone href={"tel:+380633197588"}> +380633197588</Phone> або 
                        <Phone href={"tel:+380984387271"}> +380984387271</Phone>. 
                        </> : 'Then send us an email, please.'}
                    </OrderText>
                    <OrderText>{t('hero.orderP2')}</OrderText>
                    <OrderText>
                        {i18next.language === 'ua' && 'Можливий виїзд фахівця для зняття мірок.'} 
                    </OrderText>
                    <OrderText>{t('hero.orderP3')}</OrderText>
                </OrderInfo>           
                }
            </Content>
        </Container>
    );
}