import styled from 'styled-components'
import { flashBg, dangerBg, spin1, breath1, move1, move2, move3, move4, move5, breath2, spin2 } from './keyframes'


export const FlashBg = styled.div`
    width : 100%;
    height : 100vh;
    background: red;
    justify-content: center;
    text-align: center;
    line-height: 400px;
    animation: ${flashBg} 0.5s ease-in-out 5s infinite;
`;

export const Danger = styled.div`
    font-family: ${(props) => props.theme.font};
    display: inline-box;
    font-size: 15em;
    color: whitesmoke;
    position: absolute;
    left: 25%;
    top: 25%;
    animation: ${dangerBg} 0.5s ease-in-out 5s infinite;
`;

export const ButtonIndex = styled.button`
    font-family: ${(props) => props.theme.font};
    font-size : 1;
    border: none;
    border-radius: 100px, 100px;
    background: transparent;
    position:relative;
    transition: .5s ease;
    color: red;
`;

export const SpinDivLeft1 = styled.div`
    width: 60px;
    height: 60px;
    background-color: red;
    position: absolute;
    left: 25%;
    top: 25%;
    animation: ${breath1} 0.3s linear 5s infinite, ${spin1} 0.8s linear 5s infinite;
`;
export const SpinDivLeft2 = styled.div`
    width: 60px;
    height: 60px;
    background-color: red;
    position: absolute;
    left: 25%;
    bottom: 35%;
    animation: ${breath1} 0.3s linear 5s infinite, ${spin1} 0.8s linear 5s infinite;

`;
export const SpinDivRight1 = styled.div`
    width: 60px;
    height: 60px;
    background-color: red;
    position: absolute;
    left: 73%;
    top: 25%;
    animation: ${breath1} 0.3s linear 5s infinite, ${spin1} 0.8s linear 5s infinite;

`;
export const SpinDivRight2 = styled.div`
    width: 60px;
    height: 60px;
    background-color: red;
    position: absolute;
    left: 73%;
    bottom: 35%;
    animation: ${breath1} 0.3s linear 5s infinite, ${spin1} 0.8s linear 5s infinite;
`;

export const FadeInBar1 = styled.div`
    width : 6px;
    height: 70px;
    background-color: red;
    position: absolute;
    left: 30%;
    top : 15%;
    animation: ${breath1} 10s linear 5s infinite, ${spin1} 0.169s linear 5s infinite;
`;

export const FadeInBar2 = styled.div`
    width : 6px;
    height: 70px;
    background-color: red;
    position: absolute;
    left: 30%;
    bottom: 25%;
    animation: ${breath1} 10s linear 5s infinite, ${spin1} 0.169s linear 5s infinite;
`;

export const FadeInBar3 = styled.div`
    width : 6px;
    height: 70px;
    background-color: red;
    position: absolute;
    left: 68%;
    top: 15%;
    animation: ${spin1} 0.169s linear 5s infinite;
`;

export const FadeInBar4 = styled.div`
    width : 6px;
    height: 70px;
    background-color: red;
    position: absolute;
    left: 68%;
    bottom: 25%;
    animation: ${breath1} 10s linear 5s infinite, ${spin1} 0.169s linear 5s infinite;
`;

export const MoveDiv1 = styled.div`
    width : 90px;
    height: 9px;
    background-color: red;
    position: absolute;
    left: 20%;
    bottom: 39%;
    animation: ${move1} 0.5s linear 5s infinite;
`;

export const MoveDiv2 = styled.div`
    width : 90px;
    height: 9px;
    background-color: red;
    position: absolute;
    left: 20%;
    top: 28%;
    animation: ${move2} 0.5s reverse linear 5s infinite;
`;

export const MoveDiv3 = styled.div`
    width : 25px;
    height: 25px;
    background-color: red;
    position: absolute;
    left: 20%;
    bottom: 48%;
    animation: ${move3} 1.5s linear reverse 5s infinite;
`;

export const MoveDiv4 = styled.div`
    width : 70px;
    height: 70px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    left: 15%;
    bottom: 10%;
    animation: ${move4} 2s linear 5s infinite;
`;

export const MoveDiv5 = styled.div`
    width : 70px;
    height: 70px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    right: 15%;
    bottom: 10%;
    animation: ${move5} 2s linear 5s infinite ;
`;

export const BreathDiv1 = styled.div`
    width : 180px;
    height: 180px;
    background-color: red;
    border-radius: 50%;
    animation: ${breath2} 0.3s linear 5s infinite, ${spin2} 2s ease-in-out 5s infinite;
    position : absolute;
    left: 42%;
    bottom: 10%; 
`;

export const BreathDiv2 = styled.div`
    width : 180px;
    height: 180px;
    background-color: red;
    border-radius: 50%;
    animation: ${breath2} 0.3s linear 5s infinite, ${spin2} 1s ease-in-out 5s infinite;
    position : absolute;
    left: 42%;
    top: 5%; 
`;




