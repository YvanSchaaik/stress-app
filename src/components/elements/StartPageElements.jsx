import styled  from 'styled-components'

export const Wrapper = styled.div`
    margin-right: auto;
    margin-left: auto;

    max-width: 100%;
    padding-right: 10px;
    padding-left: 10px;
`;

export const H1 = styled.h1`
    font-family: ${(props) => props.theme.font};
    font-size: 3em;
    text-align: center;
    color: whitesmoke;
`;

export const Paragraph = styled.p`
    font-family: ${(props) => props.theme.font};
    font-size: 1.5em;
    text-align: center;
    color: whitesmoke;
`;

export const ButtonRed = styled.button`
    font-family: ${(props) => props.theme.font};
    font-size : 3rem;
    border: none;
    border-radius: 100px, 100px;
    background: transparent;
    position:relative;
    left: -17%;
    top: 15vh;
    color: blue;
`;
export const ButtonBlue = styled.button`
    font-family: ${(props) => props.theme.font};
    font-size : 3rem;
    border: none;
    border-radius: 100px, 100px;
    background: transparent;
    position:relative;
    transition: .5s ease;
    left: 17%;
    top: 15vh;
    color: red;
`;


