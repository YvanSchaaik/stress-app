import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
`;

export const BackGround = styled.div`
    background-image: url('http://www.photobackgroundhd.com/wp-content/uploads/2018/10/Nature-Best-Pics.jpg');
    min-height: 100vh;
    opacity: 0.9;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`;

export const ParagraphB = styled.p`
    font-family: ${(props) => props.theme.font};
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    color: black;
    margin: 30px;
    background: url('http://www.mindbodyvortex.com/wp-content/uploads/2016/01/olfactory_diagram-624x532.jpg');
    background-size:300px;
    background-repeat: no-repeat; 
    background-color: white;
    border: 1px solid darkblue;
    opacity: 0.5;
`;
