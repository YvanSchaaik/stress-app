import styled, {keyframes} from 'styled-components'
import {flashBg} from './keyframes'


export const FlashBg = styled.div`
    width : 100%;
    height : 100vh;
    background: red;
    /* animation: ${flashBg} 0.5s ease-in-out 1s infinite */
`;

export const Danger = styled.div`
    font-family: ${(props) => props.theme.font};
    font-size: 3em;
    text-align: center;
    color: whitesmoke;
`;


