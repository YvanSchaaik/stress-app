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

export const spin1 = keyframes`
    from {
        transform: rotate(0deg);
        background-color: yellow;
    }
    to {
        transform: rotate(180deg);
        background-color: black;
    }
`
export const breath1 = keyframes`
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
export const spin2 = keyframes`
    from {
        transform: rotate(0deg);
        background-color: cornflowerblue;
    }
    to {
        transform: rotate(120deg);
        background-color: lawngreen;
    }
`
export const breath2 = keyframes`
    0%{
        border-radius: 5px;
        opacity: 0;
    }
    50% {
        border-radius: 50%;
    }
    100%{
        border-radius: 5px;
        opacity: 1;


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
    transform: translate(0, 0);
    background-color: lightgreen;
  }
  to {
    transform: translate(950px, -180px);
    background-color: blue;
  }
`;

export const move4 = keyframes`
from {
    transform: translate(0, 0);
    background-color: purple;
  }
  to {
    transform: translate(400px, -500px);
    background-color: gold;
  }
`;

export const move5 = keyframes`
from {
    transform: translate(0, 0);
    background-color: gold;
  }
  to {
    transform: translate(-400px, -500px);
    background-color: purple;
  }
`;

export const breathingText = keyframes`
  0% {
      transform: scale(0.8);
  }
  25% {
      transform: scale(1);
  }
  50% {
      transform: scale(0.8);
  }
  75% {
      transform: scale(1);
  }
  100% {
      transform: scale(0.8);
  }
`;