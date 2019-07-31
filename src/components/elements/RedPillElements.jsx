import styled, { keyframes } from 'styled-components'
import { flashBg, dangerBg, verticalDiv1 } from './keyframes'
import { spin } from './keyframes';


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
    display: inline-box;
    font-size: 15em;
    color: whitesmoke;
    position: absolute;
    left: 230px;
    top: 170px;
    /* animation: ${dangerBg} 0.5s ease-in-out 5s infinite */
`;

export const SpinDivLeft1 = styled.div`
    width: 60px;
    height: 60px;
    background-color: white;
    position: absolute;
    left: 200px;
    top: 170px;
    animation: ${spin} 0.3s linear 0s infinite;
`;
export const SpinDivLeft2 = styled.div`
    width: 60px;
    height: 60px;
    background-color: white;
    position: absolute;
    left: 200px;
    top: 460px;
    animation: ${spin} 0.3s linear 0s infinite;

`;
export const SpinDivRight1 = styled.div`
    width: 60px;
    height: 60px;
    background-color: white;
    position: absolute;
    left: 1170px;
    top: 170px;
    animation: ${spin} 0.3s linear 0s infinite;

`;
export const SpinDivRight2 = styled.div`
    width: 60px;
    height: 60px;
    background-color: white;
    position: absolute;
    left: 1170px;
    top: 460px;
    animation: ${spin} 0.3s linear 0s infinite;

`;



