// import '@testing-library/jest-dom';
// import React from 'react'
// import { OurComponent } from '../OurComponent';
// import { render /*, waitFor, fireEvent, act*/ } from '@testing-library/react';

describe('OurComponent', () => {

    // you could test this by using getByText selector
    it('should render', async () => {
        const { getByText } = render(<OurComponent />);
        expect.assertions(1)
    });

    // you could test this by using getByRole selector
    it('should have an h1', () => {
        const { getByRole } = render(<OurComponent />);
        expect.assertions(1);
    });

    // you could test this by using `contaner` and querySelect'ing the list
    it('should have a list', () => {
        expect.assertions(1);
    });

    /**
     * Steps to test:
     * 1. Render the component
     * 2. Get the list
     * 3. Get the input
     * 3. Check that the list has 4 items
     * 4. Change the input value to "one"
     * 5. Check that the list has 1 item
     */
    it('should filter items correctly', () => {
        expect.assertions(2);
    });


    /**
     * Steps to test:
     * 1. Render the component
     * 2. Get the list
     * 3. Get any button (-)
     * 3. Click the button
     * 4. Check that the list has 1 item
     * 5. Check that the item is "Lastly number four"
     * 
     */
    it('should render correct items on button click', () => {
        expect.assertions(2);
    });

    /**
     * Steps to test:
     * 1. Render the component
     * 2. Get the list and the button
     * 3. Click the button
     * 4. Check that the list has 4 items
     * 5. Check that the first item is "Item number five" and other items are correct
     */
    it('go to next page', () => {
        expect.assertions(2);
    });
});
