import styled, {keyframes} from 'styled-components'

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

export const verticalDiv1 = keyframes`
0% {
    transform : translateY(0px) 
}
100% {
    transform : translateY(-1000px) //I need y here
}

// 0%   {background-color:purple; left:10px; top:50px;}
// 25%  {background-color:yellow; left:100px; top:130px;}
// 50%  {background-color:blue; left:10px; top:100px;}
// 75%  {background-color:green; left:500px; top:30px;}
// 100% {background-color:red; left:10px; top:50px;}
`;

export const horizontalDiv1 = keyframes`

`;
