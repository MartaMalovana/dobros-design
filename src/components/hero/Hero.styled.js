import styled from 'styled-components';
import photo from '../../images/jpg/2.jpg';

export const Container = styled.div`
    // background-color: black;
`;

export const HeroBox = styled.section`
    position: relative;
    padding: 0 15px;
`;

export const Text = styled.p`
    position: absolute;
    right: 15px;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 16px;
    color: white;
    margin: 10px 0;
`;

export const Title = styled.h1`
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translatex(-50%);
    width: max-content;
    margin: 0px;
    padding: 5px 10px;
    font-size: 32px;
    font-weight: 400;
    background-color: rgba(255, 255, 255, 0.8);

`;

export const Photo = styled.img`
    width: 100%;
    height: auto;
    margin-top: 15px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    margin: 10px auto;
    padding: 10px 20px;
    background-image: url(${photo});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    border: 0px;
    box-shadow:  rgba(0, 0, 0, 0.35) 0px 5px 15px;;
`;


export const Span = styled.div`
    padding: 5px 5px;
    font-weight: bold;
    letter-spacing: 2px;
    background-color: rgba(255, 255, 255, 1);
`

