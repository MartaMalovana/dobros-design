import styled from 'styled-components';
import facebook from '../../images/svg/facebook.svg';
import instagram from '../../images/svg/instagram.svg';
import viber from '../../images/svg/viber.svg';

export const Container = styled.div`
    display: flex;
    flex-grow: 1;
`;

export const Contacts = styled.div`
    position: absolute;
    top: 0;
    left: 0 ;
    width: 100%;
    height: auto;
`;

export const Socials = styled.div`
    // display: flex;
`;

export const Social = styled.div`
    display: flex;
    margin: 10px auto;
    width: fit-content;

    @media screen and (min-width: 768px) {
        margin: 15px auto; 
    }

`;

export const Facebook = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${facebook});
    @media screen and (min-width: 768px) {
        width: 30px;
        height: 30px;
    }    
`;

export const Instagram = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${instagram});
    @media screen and (min-width: 768px) {
        width: 30px;
        height: 30px;
    }    

`;

export const P = styled.p`
    margin: 0 15px 0px 0;
    font-size: 16px;
    width: 80px;
    @media screen and (min-width: 768px) {
        width: 100px;
        font-size: 20px;
    }    
    
`;

export const Phones = styled.div`
    margin-top: 30px;

    @media screen and (min-width: 768px) {
        // display: flex;
        margin-top: 40px;
    }
`;

export const Phone = styled.a`
    position: relative;
    display: ${props => props.main ? "block" : "inline-block"};;
    margin: ${props => props.main ? "10px 15px" : "0"};
    text-align: ${props => props.main ? "center" : "justify"};
    color: black;
    text-decoration: underline;

    &:hover {
        color: rgb(250,70,22);
    }

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }    
    
`;

export const Viber = styled.div`
    position: absolute;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${viber});
    background-size: contain;
`;

export const Email = styled(Phone)`
    margin-top: 30px;
    @media screen and (min-width: 768px) {
        margin-top: 40px;
        font-size: 20px;
    }    
    
`;

export const Address = styled.p`
    text-align: center;
    margin-top: 30px;

    @media screen and (min-width: 768px) {
        margin-top: 40px;
        font-size: 20px;
    }    
    
`;
