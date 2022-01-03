import React from 'react';
import { StyledButton } from './Button.style';
import { Container } from './Container.style';

const App = () => {

    return (
        <Container>
            <h1>Hello World!</h1>
            <StyledButton buttonLabel="Click Here" backgroundColor="blue">{''}</StyledButton>
        </Container>
    )
}

export default App;