import styled from 'styled-components';
import facebook from '../../images/svg/facebook.svg';
import instagram from '../../images/svg/instagram.svg';
import viber from '../../images/svg/viber.svg';

export const Container = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 30px 0;
`;

export const Contacts = styled.div`
    position: absolute;
    top: 0;
    left: 0 ;
    width: 100%;
    height: auto;
`;

export const Socials = styled.div`
`;

export const Social = styled.a`
    display: flex;
    margin: 10px auto;
    width: fit-content;
    align-items: center;

    @media screen and (min-width: 768px) {
        margin: 15px auto; 
    }
`;

export const Facebook = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${facebook});
`;

export const Instagram = styled(Facebook)`
    background-image: url(${instagram});
`;

export const P = styled.p`
    margin: 0 15px 0px 0;
    font-size: 16px;
    width: 80px;
    color: white;
    font-weight: bold;
    
    &:hover {
        color: rgb(250,70,22);
    }

    @media screen and (min-width: 768px) {
        width: auto;
        font-size: 20px;
    }     
`;

export const Phones = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    
    @media screen and (min-width: 768px) {
        margin-top: 30px;
    }
`;

export const Phone = styled.a`
    position: relative;
    display: ${props => props.main ? "block" : "inline-block"};;
    margin: ${props => props.main ? "10px 15px" : "0"};
    text-align: ${props => props.main ? "center" : "justify"};
    text-decoration: underline;
    color: white;
    font-weight: bold;

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
    right: -30px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${viber});
    background-size: contain;

    @media screen and (min-width: 768px) {
        // right: 0px;
    }    
`;

export const Email = styled(Phone)`
    margin-top: 20px;
    color: white;
    font-weight: bold;

    @media screen and (min-width: 768px) {
        margin-top: 30px;
        font-size: 20px;
    }     
`;

export const Address = styled.p`
    text-align: center;
    margin-top: 30px;
    color: white;
    font-weight: bold;

    @media screen and (min-width: 768px) {
        margin-top: 40px;
        font-size: 20px;
    }     
`;
