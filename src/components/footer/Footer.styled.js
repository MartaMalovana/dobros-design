import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin-top: auto;
    background-color: ${props => props.reviews === true && '#ffffff6e'};

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

    @media screen and (min-width: 768px) {
        position: relative;
        flex-direction: row;
        // justify-content: space-around;
        padding-bottom: 50px;

    }

    @media screen and (min-width: 1000px) {
        font-size: 20px;
        padding-bottom: 70px;
        margin: 0 20px;
    }    

`;

export const Phone = styled.a`
    color: black;
    margin-bottom: 10px;
    padding: 0 4px;
    text-decoration: underline;
    transition-property: background-color, color;
    transition-duration: 300ms;

    &:hover {
        color: white;
        background-color: rgb(250,70,22);
        border-radius: 3px;
        text-decoration: none;
    }

    @media screen and (min-width: 768px) {
        margin-right: 30px;
    }
`;

export const Email = styled.a`
    margin-bottom: 10px;
    color: black;
    text-decoration: underline;
    transition-property: background-color, color;
    transition-duration: 300ms;

    &:hover {
        padding: 0 4px;
        color: white;
        background-color: rgb(250,70,22);
        border-radius: 3px;
        text-decoration: none;
    }

    @media screen and (min-width: 768px) {
        margin-left: auto;
    }

`;

export const Copyright = styled.p`
    margin-top: 15px;
    font-size: 12px;

    @media screen and (min-width: 768px) {
        position: absolute;
        bottom: 25px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media screen and (min-width: 1000px) {
        font-size: 18px;
    }    

`;




