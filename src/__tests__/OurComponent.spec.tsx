import '@testing-library/jest-dom';
import React from 'react'
import { OurComponent } from '../OurComponent';
import { render, fireEvent, act } from '@testing-library/react';

describe('OurComponent', () => {
    it('should render', async () => {
        const { getByText } = render(<OurComponent />);

        expect(getByText('Item number one')).toBeInTheDocument();
        expect.assertions(1);
    });

    it('should have an h1', () => {
        const { getByRole } = render(<OurComponent />);

        expect(getByRole('heading', {level: 1})).toBeInTheDocument();
        expect.assertions(1);
    });

    it('should have a list', () => {
        const { container } = render(<OurComponent />);

        expect(container.querySelector('ul')).toBeInTheDocument();
        expect.assertions(1);
    });

    it('should filter items correctly', () => {
        const { getByPlaceholderText, getByRole } = render(<OurComponent />);
        const input = getByPlaceholderText('our awesome input') as HTMLInputElement;
        const list = getByRole('list');

        expect(list.childElementCount).toBe(4);

        fireEvent.change(input, {target: {value: 'one'}})

        expect(list.childElementCount).toBe(1);
        expect.assertions(2);
    });

    it('should render correct items on button click', () => {
        const { getByRole } = render(<OurComponent />);
        const list = getByRole('list');
        const button = getByRole('button', {name: 'Search for item number four'});

        fireEvent.click(button)

        expect(list.childElementCount).toBe(1);
        expect(list.firstElementChild?.textContent).toBe('Lastly number four');

        expect.assertions(2);
    });

    it('go to next page', () => {
        jest.useFakeTimers()
        const { getByRole, getByText } = render(<OurComponent />);
        const list = getByRole('list');
        const button = getByRole('button', {name: 'Next page'});

        fireEvent.click(button)

        act(() => {
            jest.advanceTimersByTime(1000);
        });

        const updatedItem = getByText("Item number five");

        expect(updatedItem).toBeInTheDocument();
        expect(list.childElementCount).toBe(4);
        expect.assertions(2);
        jest.useRealTimers()
    });
});
