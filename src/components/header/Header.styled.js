import styled from 'styled-components';


export const Container = styled.div`
`;

export const HeaderBox = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    // background-color: red;
`;


export const Phone = styled.a`
    color: black;
    font-weight: bold;

    &:hover {
        color: rgba(247, 114, 31, 1);
    }
`;


export const Burger = styled.div`
    position: relative;
    width: 30px;
    height: 2px;
    background-color: black;
    // border: 1px solid black;

    &::before,
    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        left: 0;
        background-color: black; 
        // border: 1px solid black;
    }

    &::before {
        top: -6px;
    }

    &::after {
        bottom: -6px;
    }
`;