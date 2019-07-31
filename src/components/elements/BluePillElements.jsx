import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    background-color: lightblue;
`;

export const BackGround = styled.div`
        background-image: url('http://www.photobackgroundhd.com/wp-content/uploads/2018/10/Nature-Best-Pics.jpg');
        min-height: 100vh;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
`;

export const ParagraphB = styled.p`
    font-family: ${(props) => props.theme.font};
    font-size: 1.5em;
    text-align: center;
    color: black;
`;