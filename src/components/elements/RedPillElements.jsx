import styled, { keyframes } from 'styled-components'
import { flashBg, dangerBg, verticalDiv1 } from './keyframes'


export const FlashBg = styled.div`
    width : 110%;
    height : 100vh;
    background: red;
    justify-content: center;
    text-align: center;
    line-height: 400px;
    /* animation: ${flashBg} 0.5s ease-in-out 5s infinite */

`;

export const Danger = styled.div`
    font-family: ${(props) => props.theme.font};
    display: inline-box
    font-size: 15em;
    color: whitesmoke;
    /* animation: ${dangerBg} 0.5s ease-in-out 5s infinite */
`;

export const VerticalDiv1 = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
    animation-direction: normale;
    animation: ${verticalDiv1} 2s ease-in-out 5s infinite
`;
export const VerticalDiv2 = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;

`;
export const VerticalDiv3 = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;

`;
export const VerticalDiv4 = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;

`;
export const VerticalDiv5 = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;

`;

export const HorizontalDiv1 = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
`;
export const HorizontalDiv2 = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
`;
export const HorizontalDiv3 = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
`;
export const HorizontalDiv4 = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
`;
export const HorizontalDiv5 = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
`;


