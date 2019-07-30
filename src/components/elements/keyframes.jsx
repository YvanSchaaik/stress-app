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

// @-webkit-keyframes flash {
//     0%, 49% {
//       background-color: rgb(117, 209, 63);
//       border: 3px solid #e50000;
//     }
//     50%, 100% {
//       background-color: #e50000;
//       border: 3px solid rgb(117, 209, 63);
//     }
//   }