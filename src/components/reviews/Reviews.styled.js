import styled from "styled-components";

export const List = styled.ul`
    padding: 0;
    margin: 20px 15px;
`;

export const Review = styled.li`
    margin-bottom: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 15px;
    overflow: hidden;
`;

export const ReviewPhoto = styled.img`
    width: 100%;
    max-width: 600px;
    display: block;
    object-fit: contain;
`;

export const ReviewTitle = styled.p`
    text-align: center;
    padding: 5px 0 10px;
`;
