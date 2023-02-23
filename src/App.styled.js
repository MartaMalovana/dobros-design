import styled from 'styled-components';
import mak from './images/jpg/mak.jpg';
import karpaty from "./images/jpg/karpaty.jpg";
import karpatySmall from "./images/jpg/karpaty-small.jpg";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: Calc(100vh - 60px);
  background-image: ${props => props.contacts ? `url(${karpatySmall})` : 'none'} ;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media screen and (min-width: 768px) {
    background-image: ${props => props.reviews && `url(${mak})`} ;
    background-image: ${props => props.contacts && `url(${karpaty})`} ;
    background-attachment: fixed;
    background-repeat: no-repeat;  
    background-size: cover;
  }
`;

export const Content = styled.div`
  position: relative;
  display: ${props => props.contacts && "flex"};
  align-items: ${props => props.contacts && "center"};
  justify-content: ${props => props.contacts && "center"};
  max-width: 400px;
  min-height: ${props => props.empty ? "660px" : "auto"};
  margin: 0 auto;
  font-family: 'Montserrat'; 
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    position: ${props => props.tablet && "relative"};
    min-height: ${props => props.empty ? "750px" : "auto"};
  }

  @media screen and (min-width: 1000px) {
    max-width: 1440px;
    min-height: ${props => props.empty ? "870px" : "auto"};
  }
`;

