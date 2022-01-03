import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// TESTING LIBRARY DOCS: https://testing-library.com/docs/react-testing-library/cheatsheet
//                       https://github.com/testing-library/react-testing-library
// JEST DOCS:            https://jestjs.io/docs/tutorial-react

test ('renders Hello World', () => {
    const { getByText } = render(<App />);

    getByText('Hello World!')
    // getByRole - find an element by role i.e. button or link
        // ^ good for accessibility!


    // TESTING A BUTTON CLICK EVENT     
    // Click a button
    // fireEvent.click(ELEMENT_HERE);
    // expect(ELEMENT_HERE).toHaveStyle({ backgroundColor: 'blue });
    
})