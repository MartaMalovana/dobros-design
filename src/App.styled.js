// .App {
//   text-align: center;
// }

// .App-logo {
//   height: 40vmin;
//   pointer-events: none;
// }

// @media (prefers-reduced-motion: no-preference) {
//   .App-logo {
//     animation: App-logo-spin infinite 20s linear;
//   }
// }

// .App-header {
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }

// .App-link {
//   color: #61dafb;
// }

// @keyframes App-logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  min-height: 100vh;
`;
export const Content = styled.div`
  position: relative;
  display: ${props => props.contacts && "flex"};
  align-items: ${props => props.contacts && "center"};
  justify-content: ${props => props.contacts && "center"};
  max-width: 400px;
  min-height: ${props => props.empty ? "550px" : "auto"};
  margin: 0 auto;
  // outline: 1px solid red;
  font-family: 'Montserrat'; 
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    position: ${props => props.tablet && "relative"};
    min-height: ${props => props.empty ? "620px" : "auto"};

  }

  @media screen and (min-width: 1000px) {
    max-width: 1000px;
    min-height: ${props => props.empty ? "750px" : "auto"};
  }
`;

