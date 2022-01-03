import styled from 'styled-components';
import Button from './Button.js';

// You can install styled-components-snippets from extensions to make this easier!
// Helpful Link : https://github.com/styled-components/styled-components

export const StyledButton = styled(Button)`
    width: 200px;
    height: 50px;
    background-color: ${(props) => props.backgroundColor};

    &:hover {
        background-color: coral;
        & label {
            color: red;
        }
    }
`

export const ButtonLabel = styled.label`
    font-size: 25px;
    color: white;
`