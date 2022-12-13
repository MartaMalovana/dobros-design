import {Container, Title, P, Phone, Email, Facebook, Instagram, Social, Info } from './ContactPage';
import { Content } from '../../App.styled';

export default function ContactPage () {
    return (
        <Container>
            <Content>
                <Social>
                    <a href='https://www.facebook.com/dobrosdesignlviv'><Facebook /></a>
                    <a href='https://www.instagram.com/dobros_design/'><Instagram /></a>
                </Social>
                <div><Phone href={"tel:+380633197588"} main>+380633197588</Phone></div>
                <div><Email href={"mailto:dobros-design@ukr.net"} main>dobros-design@com.ua</Email></div>
                <Title><Info />Як здійснити замовлення</Title>
                <P>У розділі "Продукція" вибрати категорію костюмів. Далі - костюм, що сподобався. На картці товару є номер. Назва категорії і номер картки визначає ідентифікацію моделі костюму (наприклад, "Центральна Україна - 001" або "Волинь - 007").</P>
                <P>Подзвонити менеджеру за номером телефону <Phone href={"tel:+380633197588"}>+380633197588</Phone>. Потім надіслати електронного листа на нашу електронну пошту <Email href={"mailto:dobros-design@ukr.net"}>dobros-design@com.ua</Email> із зазначеним ідентифікатором костюму.</P>
                <P>У період перемовин узгоджується колористика або розробка нової моделі. </P>
                <P>Ціна обраховується на момент запиту.</P>
                <P>Для визначення реальних розмірів на електронну адресу замовника надсилається обмірна таблиця. Можливий виїзд фахівця для зняття мірок.</P>
                <P>Після узгодження усіх деталей сторони підписують Договір на виконання робіт.</P>
                <P>Оплата проводиться у відповідності до умов підписаного договору виключно на поточний рахунок підприємства.</P>
                <P>Після виконання замовлення надається повний пакет бухгалтерський документів згідно чинного Законодавства.</P>
            </Content>
        </Container>
    );
}