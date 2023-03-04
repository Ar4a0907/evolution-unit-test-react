import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render/*, fireEvent */ } from '@testing-library/react';

import {
  OurCounterReduxComponent,
  counterReducer,
  CounterActions,
} from '../ReduxExample';

describe('OurCounterReduxComponent', () => {
    /**
     * How to test:
     * 1. Render the component wrapped with the Provider
     * 2. Check that the component renders by querying for the text or the role
     */
    it('should render', async () => {
        const { getByText, container } = render(
            <Provider store={createStore(counterReducer)}>
                <OurCounterReduxComponent />
            </Provider>
        );

        expect.assertions(2);
    });

    /**
     * How to test:
     * 1. Create a store with the reducer
     * 2. Get the dispatch function from the store
     * 3. Dispatch the increment action twice
     */
    test('redux actions', () => {
        const store = createStore(counterReducer);
        const { dispatch } = store;

        dispatch({ type: CounterActions.increment });
        dispatch({ type: CounterActions.increment });

        expect.assertions(2);
    });

    /**
     * How to test:
     * 1. Render the component wrapped with the Provider
     * 2. Get the increment and decrement buttons
     * 3. Click the increment and decrement buttons a couple of times
     * 4. Check that the dispatch is called the correct number of times with .toHaveBeenCalledTimes
     * 5. Check that the dispatch is called with the correct action with .toHaveBeenCalledWith
     * 6. Check that the state is correct with .toEqual
     * 7. Check that the state is correct with .toHaveProperty
     * 8. Check that component renders the correct text (same number with as state) with .toHaveTextContent
     */
    describe('clicking the button triggers the dispatch and changes the state', () => {
        const store = createStore(counterReducer, { counter: 0 });
        const dispatch = jest.spyOn(store, 'dispatch');

        test('clicking the increment button', async () => {
            const { getByRole } = render(
                <Provider store={store}>
                    <OurCounterReduxComponent />
                </Provider>
            );

            expect.assertions(5);
        });
    });
});
