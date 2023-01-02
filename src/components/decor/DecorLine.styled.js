import styled from 'styled-components';

export const Decor = styled.div`
    display: ${props => props.tablet && "none"};
    position: relative;
    // bottom: -20px;
    // left: 0;
    width: ${props => props.contacts ? "270px" : "100%"};
    margin: ${props => props.contacts && "20px auto"};
    height: 1px;
    background-color: black;

    @media screen and (min-width: 1000px) {
        display: ${props => props.desktop && "none"};
        width: ${props => props.contacts ? "370px" : "100%"};
    }

`;

export const Decor1 = styled.div`
    position: absolute;
    width: 7px;
    height: 7px;
    background-color: black;
    transform: rotate(45deg) translate(-50%, -50%);
    top: 2px;
    left: 50%;

`;

export const Decor2 = styled.div`
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: black;
    transform: translateY(-50%);
    bottom: -12px;
    left: -10px;

`;

export const Decor3 = styled.div`
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: black;
    top: -10px;
    left: 11.5px;

`;