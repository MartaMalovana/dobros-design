import styled from 'styled-components';

export const Decor = styled.div`
    position: relative;
    // bottom: -20px;
    // left: 0;
    width:  "100%";
    height: 1px;
    background-color: black;
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