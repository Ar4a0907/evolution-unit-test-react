import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, fireEvent } from '@testing-library/react';

import {
  OurCounterReduxComponent,
  counterReducer,
  CounterActions,
} from '../ReduxExample';

describe('OurCounterReduxComponent', () => {
    it('should render', async () => {
        const { getByText, container } = render(
            <Provider store={createStore(counterReducer)}>
                <OurCounterReduxComponent />
            </Provider>
        );

        expect(getByText('Counter Redux Component')).toBeInTheDocument();
        expect(container.querySelector('span')).toBeInTheDocument();
        expect.assertions(2);
    });

    test('redux actions', () => {
        const store = createStore(counterReducer);
        const { dispatch } = store;
        const state = store.getState();
        console.log(state)

        expect(state.counter).toBe(0)

        dispatch({ type: CounterActions.increment });
        dispatch({ type: CounterActions.increment });

        expect(store.getState().counter).toBe(2)

        expect.assertions(2);
    });

    describe('clicking the button triggers the dispatch and changes the state', () => {
        const store = createStore(counterReducer, { counter: 0 });
        const dispatch = jest.spyOn(store, 'dispatch');

        test('clicking the increment button', async () => {
            const { getByRole, getByText } = render(
                <Provider store={store}>
                    <OurCounterReduxComponent />
                </Provider>
            );
            const incrementButton = getByRole('button', {name: '+'})
            const decrementButton = getByRole('button', {name: '-'})
            const text = getByText('Count is 0')

            fireEvent.click(incrementButton)
            fireEvent.click(incrementButton)
            fireEvent.click(incrementButton)
            fireEvent.click(decrementButton)

            expect(dispatch).toHaveBeenCalledTimes(4);
            expect(dispatch).toHaveBeenCalledWith({ type: CounterActions.decrement })
            expect(store.getState()).toEqual({ counter: 2 })
            expect(store.getState()).toHaveProperty('counter', 2)
            expect(text).toHaveTextContent('Count is 2')

            expect.assertions(5);
        });
    });
});
