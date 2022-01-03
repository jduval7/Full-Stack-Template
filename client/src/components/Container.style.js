import styled from 'styled-components';

// You can install styled-components-snippets from extensions to make this easier!
// Helpful Link : https://github.com/styled-components/styled-components

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.backgroundColor};
`