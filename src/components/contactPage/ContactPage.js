import styled from 'styled-components';
import facebook from '../../images/svg/facebook.svg';
import instagram from '../../images/svg/instagram.svg';
import info from '../../images/svg/info.svg';

export const Container = styled.div`

`;

export const Social = styled.div`
    display: flex;
    margin: 20px 15px 10px;
    width: fit-content;
`;

export const Facebook = styled.div`
    margin-right: 15px;
    width: 20px;
    height: 20px;
    background-image: url(${facebook});
`;

export const Instagram = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${instagram});
`;

export const Title = styled.h1`
    position: relative;
    margin: 25px 45px 10px;
    font-size: 18px;
    color: rgb(250,70,22);
`;

export const Info = styled.span`
    position: absolute;
    top: 1px;
    left: -30px;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(${info});
    background-size: contain;
`;

export const P = styled.p`
    margin: 0 15px 15px;
    font-size: 14px;
    
`;

export const Phone = styled.a`
    display: inline-block;
    margin: ${props => props.main ? "5px 15px" : "0"};
    text-align: ${props => props.main ? "center" : "justify"};
    color: black;
    text-decoration: underline;

    &:hover {
        color: rgb(250,70,22);
    }
`;
export const Email = styled(Phone)`
`;

