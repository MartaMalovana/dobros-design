import styled from 'styled-components';
import {Button} from './ShowProduct.styled';

export const SearchContainer = styled.div`
    margin: 15px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Number = styled.div`
    position: relative;

`;

export const Input = styled.input`
    width: 100%;
    height: 20px;
    border: none;
    border-bottom: 1px solid gray;
    
    &:focus {
        outline: none;
        border-bottom-color: transparent;
    }
`;

export const Underline = styled.span`
    position: absolute;
    content: '';
    display: block;
    width: 0px;
    height: 2px;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to right, rgb(255,3,62), rgb(255,239,0));
    z-index: 100;
    transition-property: width;
    transition-duration: 250ms;
    ${Input}:focus ~ & {
        width: 100%;
    }

`;

export const Label = styled.label`
    font-size: 14px;
    color: rgb(250,70,22);
`;

export const LabelSelect = styled(Label)`
    margin-top: 15px; 
`;

export const Select = styled.select`
    border: none;
    margin: 2px 0 15px;
    color: black;
    border-bottom: 1px solid gray;
    font-family: 'Montserrat';

    &:focus {
        outline: none;
    }
`;

export const Option = styled.option`
    &[checked] {
        // background-image: linear-gradient(to right, rgb(255,3,62), rgb(255,239,0));
        background-color: red;
    }
`;

export const ButtonSubmit = styled(Button)`
    // height: 20px;
    margin: 0 auto;
`;

export const Result = styled.div`
`;