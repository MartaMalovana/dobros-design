import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin-top: auto;

    // &::before {
    //     content: '';
    //     position: absolute;
    //     width: 100%;
    //     height: 2px;
    //     background-color: black;
    // }
`;

export const FooterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 20px 0;
`;

export const Phone = styled.a`
    color: black;
    margin-bottom: 10px;
    text-decoration: underline;

    &:hover {
        padding: 0 4px;
        color: white;
        background-color: rgb(250,70,22);
        border-radius: 3px;
        text-decoration: none;
    }
`;

export const Email = styled.a`
    margin-bottom: 10px;
    color: black;
    text-decoration: underline;

    &:hover {
        padding: 0 4px;
        color: white;
        background-color: rgb(250,70,22);
        border-radius: 3px;
        text-decoration: none;
    }
`;

export const Address = styled.p`
`;

export const Copyright = styled.p`
    margin-top: 15px;
    font-size: 12px;
`;




