import {keyframes} from 'styled-components'

export const flashBg = keyframes`
    0% {
        background: red;
    }
    20% {
        background: white;
    }
    40% {
        background: red;
    }
    60% {
        background: white;
    }
    80% {
        background: red;
    }
    90% {
        background: white;
    }
`;

export const dangerBg = keyframes`
    0% {
        color: white;
    }
    20% {
        color: red;
    }
    40% {
        color: white;
    }
    60% {
        color: red;
    }
    80% {
        color: white;
    }
    90% {
        color: red;
    }
`;

export const spin = keyframes`
    from {
        transform: rotate(0deg);
        background-color: yellow;
    }
    to {
        transform: rotate(180deg);
        background-color: black;
    }
`
export const breath = keyframes`
    0%{
        border-radius: 5px;
    }
    50% {
        border-radius: 50%;
    }
    100%{
        border-radius: 5px;
    }
`;

export const move1 = keyframes`
from {
    transform: translateX(10px);
    background-color: lightskyblue;
  }
  to {
    transform: translateX(900px);
    background-color: black;
  }
`;

export const move2 = keyframes`
from {
    transform: translateX(10px);
    background-color: lightskyblue;
  }
  to {
    transform: translateX(1000px);
    background-color: black;
  }
`;

export const move3 = keyframes`
from {
    transform: translateX(-100px);
    background-color: lightskyblue;
  }
  to {
    transform: translateY(+200px);
    background-color: black;
  }
`;
