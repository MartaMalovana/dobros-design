import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const List = styled.ul`
    padding: 0;
    margin: 20px 15px;

    @media screen and (min-width: 768px) {
        // display: grid;
        // grid-template-columns: repeat(5, 1fr);
        // grid-auto-rows: minmax(50px, auto);
        // grid-gap: 10px;
    };

`;

export const Review = styled.li`

    margin-bottom: 70px;

    @media screen and (min-width: 768px) {
        // margin-bottom: 0px;
        grid-column: ${props => props.column};
        grid-row: ${props => props.row};
    };
`;

export const ReviewPhoto = styled.img`
    width: 100%;
    max-width: 500px;
    display: block;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.90) 0px 15px 15px;
    border-radius: 15px;
    overflow: hidden;
    transition-property: position;
    transition-duration: 300ms;
    position: static;

`;

export const ReviewTitle = styled.p`
    text-align: center;
    padding: 5px 0 10px;
`;
