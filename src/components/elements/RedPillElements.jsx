import styled, { keyframes } from 'styled-components'
import { flashBg, dangerBg, verticalDiv1 } from './keyframes'
import { spin } from './keyframes';
import { breath } from './keyframes';
import { move1 } from './keyframes';
import { move2 } from './keyframes';
import { move3 } from './keyframes'


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
    /* animation: ${breath} 0.3s linear infinite, ${spin} 0.8s linear infinite */
`;
export const SpinDivLeft2 = styled.div`
    width: 60px;
    height: 60px;
    background-color: white;
    position: absolute;
    left: 200px;
    top: 460px;
    /* animation: ${breath} 0.3s linear infinite, ${spin} 0.8s linear infinite */

`;
export const SpinDivRight1 = styled.div`
    width: 60px;
    height: 60px;
    background-color: white;
    position: absolute;
    left: 1170px;
    top: 170px;
    /* animation: ${breath} 0.3s linear infinite, ${spin} 0.8s linear infinite */

`;
export const SpinDivRight2 = styled.div`
    width: 60px;
    height: 60px;
    background-color: white;
    position: absolute;
    left: 1170px;
    top: 460px;
    /* animation: ${breath} 0.3s linear infinite, ${spin} 0.8s linear infinite */
`;

export const FadeInBar1 = styled.div`
    width : 6px;
    height: 70px;
    background-color: white;
    position: absolute;
    left: 30%;
    top : 15%;
    /* animation: ${breath} 10s linear 1s infinite, ${spin} 0.169s linear infinite; */
`;

export const FadeInBar2 = styled.div`
    width : 6px;
    height: 70px;
    background-color: white;
    position: absolute;
    left: 30%;
    bottom: 25%;
    /* animation: ${breath} 10s linear 9s infinite, ${spin} 0.169s linear infinite; */
`;

export const FadeInBar3 = styled.div`
    width : 6px;
    height: 70px;
    background-color: white;
    position: absolute;
    left: 68%;
    top: 15%;
    /* animation: ${spin} 0.169s linear 3s infinite; */
`;

export const FadeInBar4 = styled.div`
    width : 6px;
    height: 70px;
    background-color: white;
    position: absolute;
    left: 68%;
    bottom: 25%;
    /* animation: ${breath} 10s linear 1s infinite, ${spin} 0.169s linear infinite; */
`;

export const MoveDiv1 = styled.div`
    width : 90px;
    height: 9px;
    background-color: white;
    position: absolute;
    left: 17%;
    bottom: 39%;
    /* animation: ${move1} 0.5s linear infinite; */
`;

export const MoveDiv2 = styled.div`
    width : 90px;
    height: 9px;
    background-color: white;
    position: absolute;
    left: 15%;
    top: 28%;
    /* animation: ${move2} 0.5s reverse linear infinite; */
`;

export const MoveDiv3 = styled.div`
    width : 25px;
    height: 25px;
    background-color: white;
    position: absolute;
    left: 17%;
    bottom: 39%;
    /* animation: ${move3} 4s linear infinite; */
`;