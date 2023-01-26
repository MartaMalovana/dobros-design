import styled from 'styled-components';
import cross from '../../images/svg/cross-white.svg';
import heart from '../../images/svg/heart.svg';
import heartRed from '../../images/svg/heart-red.svg';
import arrow from '../../images/svg/arrow-slider.svg';
import up from '../../images/svg/up.svg';
import aa from '../../images/svg/aa.svg';

export const Container = styled.div`
    position: relative;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
    padding: 0 15px;

    @media screen and (min-width: 768px) {
        position: absolute;
        top: 670px;
        left: 15px;
       }

    @media screen and (min-width: 1000px) {
        top: 770px;
    }    
    
     
`;

export const Button = styled.button`
    width: 105px;    
    background-color: white;
    font-family: 'Montserrat';
    border: 1px solid black;
    padding: 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    &:focus {
        border: 1px solid rgb(250,70,22);
        color: rgb(250,70,22);
        box-shadow: rgba(250,70,22, 0.25) 0px 6px 12px -2px, rgba(250,70,22, 0.3) 0px 3px 7px -3px;
    }
    @media screen and (min-width: 768px) {
        display: ${props => props.desktop && "none"};
    }

    `;    

export const ButtonHeart = styled(Button)`
    position: relative;
    padding-top: 12px;

    &::before {
        content: '';
        position: absolute;
        top: 6px;
        left: 50%;
        transform: translateX(-50%);
        width: 13px;
        height: 13px;
        background-image: url(${heartRed});
    }
`;
export const Heart = styled.button`
    position:${props => props.static ? "static" : "absolute"};
    bottom: 20px;
    right: 15px;
    width: 25px;
    height: 25px;
    margin: 1px auto 0;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    background-image: url(${heart});
    
    &.red {
        background-image: url(${heartRed});
    }

    @media screen and (min-width: 1000px) {
        right: ${props => props.desktop === 'true' && '50px'};
        bottom: ${props => props.desktop === 'true' && '30px'};
    }    
`;

export const Navigation = styled.nav`
   position: absolute;
   top: 15px;
   left: 0;
   width: fit-content;
   height: fit-content;
   z-index: 100;
   margin-bottom: 20px;
   padding: 0 0 10px;
   overflow: hidden; 
   border-top-right-radius: 5px; 
   border-bottom-right-radius: 5px; 
   background-color: white;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
   transition-property: left;
   transition-duration: 500ms;
   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
   &.hide {
        left: -100%;
   }

   @media screen and (min-width: 768px) {
    position: static;
    width: 270px;
    box-shadow: none;
    margin-right: 20px;
    margin-top: 20px;
    // border-right: 1px solid rgb(250,70,22);
    // border-bottom: 1px solid rgb(250,70,22);
    border-top-right-radius: 0; 
    // border-bottom-right-radius: 0; 
 
  }

    @media screen and (min-width: 1000px) {
        width: 335px;
    }    

`;

export const Desktop = styled.div`
@media screen and (min-width: 768px) {
   display: flex;
   align-items: flex-start;
  }

`;

export const DesktopDecor = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
    display: block;
    }

`;

export const NavTitle = styled.div`
   padding: 10px;
   background-color: rgb(250,70,22);
   color: white;

   @media screen and (min-width: 768px) {
    color: black;
    background-color: white;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
   }
 

`;

export const HideButton = styled.button`
    position: absolute;
    top: 7px;
    right: 5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
    background-color: rgb(250,70,22);
    background-image: url(${cross});
    fill: white;

    @media screen and (min-width: 768px) {
        display: none;
       }
     

`;

export const ProductList = styled.ul`
    padding: 0;


`;

export const ProductCategory = styled.li`
    margin-bottom: 10px;
    padding: 0 10px;
    font-weight: ${props => props.category && "600"};

    @media screen and (min-width: 1000px) {
        font-size: 20px;
    }    


`;

export const Span = styled.span`
    font-weight: ${props => props.category && "600"}; 
`;

export const RegionList = styled.ul`
//    padding-left: 0;

`;

export const Region = styled.li`
    margin: 10px 0;

`;

export const ProductButton = styled.button`
   display: block;
   padding: ${props => props.subsection ? "0 0 0 40px" : "0"};
   margin: ${props => props.subsection ? "5px 0 0 0" : "0"};
   background-color: inherit;
   border: none;
   font-family: 'Montserrat';
   font-size: 16px;
   font-weight: ${props => props.category && "600"};

   &:hover, 
   &:focus {
        color: rgb(255,184,28);
   };

   &.active {
        color: rgb(250,70,22);
   }

   @media screen and (min-width: 1000px) {
    font-size: 20px;
}    

`;

export const ProductCategoryContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`;

export const CardContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   margin: 15px;

   @media screen and (min-width: 768px) {
    width: 480px;
    margin: 30px auto;
    justify-content: ${props => props.desktop && "flex-start"};
  }

  @media screen and (min-width: 1000px) {
    font-size: 25px;
    width: ${props => props.desktop && "100%"};
}    


`;
export const Title = styled.h2`    
    position: relative;
    width: 100%;
    margin: 0 auto 10px;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 20px;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
        font-size: 26px;
  }

`;

export const Card = styled.a`
   position: relative;
   flex-basis: ${props => props.one ? "100%" : "Calc((100% - 20px) / 2)"};
   height: fit-content;
   margin-bottom: 20px;

   &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
   }

   @media screen and (min-width: 1000px) {
    flex-basis: ${props => props.desktop === "true" && "Calc((100% - 20px) / 3)"};
}    

`;

export const Product = styled.img`
   width: 100%;
   min-height: 100px;
   max-height: ${props => props.sliderSize === "true" ? "auto" : "215px"};
   object-fit: contain;

   @media screen and (min-width: 768px) {
        max-height: ${props => props.sliderSize === "true" ? "auto" : "350px"};
        height: ${props => props.sliderSize === "true" && "90vh"};
  }

`;

export const Skeleton = styled.div`
   display: flex;
   justify-content: center;
//    align-items: center;
   width: 100%;
   height: 200px;
   border: 2px dashed black;
`;

export const SkeletonMessage = styled.p`
   text-align: center;
   margin-top: 10px;
`;

export const ProductRegion = styled.p`
   text-align: center;
   font-size: 13px;

   @media screen and (min-width: 1000px) {
    font-size: 20px;
    }    
`;

export const Up = styled.button`
   position: fixed;
   bottom: 40px;
   right: 10px;
   width: 30px;
   height: 30px;
   border: 2px solid black;
   border-radius: 50%;
   background-color: rgb(250,70,22);
   box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
//    transform: rotate(45deg);
`;

export const Arrow = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${aa});
    background-size: 25px 25px;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(180deg);
    
`;

export const DescriptionHeart = styled.p`
   font-size: 13px;
   margin-bottom: 15px;
   @media screen and (min-width: 1000px) {
    font-size: 18px;
}    

`;