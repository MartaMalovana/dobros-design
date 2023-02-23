import styled from 'styled-components';
import logo from '../../images/jpg/logo.jpg';

export const Container = styled.div``;

export const HeroBox = styled.section`
    position: relative;
    padding: 0 15px 10px;

    @media screen and (min-width: 768px) {
        margin-top: 110px;
    }

    @media screen and (min-width: 1000px) {
        padding: 0;
        margin-top: 0px;
    }
`;

export const LogoHero = styled.div`
    display: none;
    position: absolute;
    top: 15px;
    left: 15px;
    background-image: url(${logo});
    width: 50px;
    height: 50px;
    background-size: 35px 35px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
    border-radius: 50%;
    border: 1px solid black;
    
    @media screen and (min-width: 1000px) {
        display: block;
    }
`;

export const Text = styled.p`
    position: absolute;
    right: 15px;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 16px;
    color: white;
    margin: 10px 0;
    transition-property: top, opacity;
    transition-duration: 2000ms;

    @media screen and (min-width: 768px) {
        top: -138px;
        color: black;
        letter-spacing: 8px;

        &.visible {
            top: -30px;
            opacity: 1;
        }  
    }

    @media screen and (min-width: 1000px) {
        top: 300px;
        left: 50%;
        opacity: 0;
        padding: 2px 20px;
        font-size: 20px;
        // font-weight: 700;
        color: white;
        letter-spacing: 11.5px;
        background-color: rgba(0,0,0,0.7);

        &.visible {
            top: 450px;
            opacity: 1;
        }
    }    
`;

export const Title = styled.h1`
    position: relative;
    width: max-content;
    margin: 0px auto;
    padding: 5px 10px;
    font-size: 32px;
    font-weight: 400;
    line-height: 50px;
    transition-property: top, opacity;
    transition-duration: 3000ms;
    transition-delay: 2000ms;

    @media screen and (min-width: 768px) {
        position: absolute;
        top: -195px;
        left: 50%;
        transform: translate(-50%);

        &.visible {
            top: -95px;
            opacity: 1;
        }
    }

    @media screen and (min-width: 1000px) {
        top: 350px;
        opacity: 0;
        left: 50%;
        color: white;
        font-size: 62px;
        letter-spacing: 10px;
        background-color: rgba(0,0,0,0.6);
        padding: 5px 20px;

        &.visible {
            top: 500px;
            opacity: 1;
        }
    }    
`;

export const Photo = styled.img`
    width: 100%;
    margin: 20px 0 10px;
    background-color: rgb(250,70,22);
    object-fit: contain;

    @media screen and (min-width: 768px) {
        background-repeat: no-repeat;
      }

    @media screen and (min-width: 1000px) {
        margin-top: 0;
        background-size: cover;
    }
`;

export const Span = styled.div`
    padding: 5px 5px;
    font-weight: bold;
    letter-spacing: 2px;
    background-color: rgba(255, 255, 255, 1);
`;

export const About = styled.p`
    text-align: center;
    margin: 10px 0 10px;

    @media screen and (min-width: 1000px) {
        font-size: 25px;
        margin: 20px 10px 40px;
        margin-bottom: 40px;
    }    
`;

export const ProposesTitle = styled.h2`
    font-weight: 700;
    text-align: center;
    margin: 20px 0 0;

    @media screen and (min-width: 1000px) {
        font-size: 35px;
        margin: 25px 0 0;
    }    
`;

export const ProposesList = styled.ul`
    margin: 10px 0 20px;
    padding: 0;

    @media screen and (min-width: 1000px) {
        font-size: 25px;
        margin-bottom: 40px;
    }    
`;

export const Propose = styled.li`
    position: relative;    
    margin-bottom: 10px;

    &:hover,
    &:focus {
        z-index: 1000;
    }
`;

export const P = styled.p`
    margin-bottom: 15px;
    text-align: center;

    @media screen and (min-width: 1000px) {
        margin-bottom: 20px;
        font-size: 25px;
    }    
`;

export const ProposeContainer = styled.div`
    position: relative;
`;

export const ProposePhoto = styled.img`
    display: block;
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 50%;
    margin: 20px auto;
    transition-duration: 500ms;

    &:hover {
        z-index: 1000;
        transform: scale(2);
    }

    @media screen and (min-width: 1000px) {
        margin-left: 100px;
        z-index: 100;
    }                        
`;

export const ProposeText = styled.p`
    position: absolute;
    bottom: 10px;
    width: Calc(100% - 30px);
    padding: 0 15px;
    text-align: center;
    background-color: rgb(255 255 255 / 80%);
    
    @media screen and (min-width: 1000px) {
        width: Calc(100% - 370px);
        margin-right: 100px;
        margin-left: 240px;
        background-color: transparent;
        text-align: left;
        bottom: 50%;
        transform: translateY(50%);
    }
`;

export const OrderTitle = styled(P)`
    text-align: center;
    margin: 10px auto 20px;
    text-decoration: underline;
    font-weight: 600;
    
    @media screen and (min-width: 1000px) {
        display: block;
        margin-top: 50px;
        margin-bottom: 50px;
        cursor: pointer;
    } 
`;

export const OrderInfo = styled.div`
    margin: 0 15px;

    @media screen and (min-width: 1000px) {
        margin-bottom: 50px;
    } 
`;

export const OrderText = styled(P)`
    text-align: left;

    @media screen and (min-width: 1000px) {
    } 
`;
