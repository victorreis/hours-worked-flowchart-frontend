import React from 'react';
import {Provider} from 'react-redux';

import {renderHook} from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// eslint-disable-next-line no-unused-vars
import {toMatchSpecificSnapshot} from 'jest-specific-snapshot';
import configureStore from 'redux-mock-store';
import promise from 'redux-promise-middleware';

import config from '../../../config.js';
import useActions from './actionCreators';
import {GET_RANDOM_NUMBER} from './actionTypes';

describe('features > counter > useActions', () => {
    /** Create mock store with middlewares */
    const mockStore = configureStore([promise]);

    const store = mockStore({
        random: {
            isLoading: false,
            hasError: false,
            isFulfilled: false,
        },
    });

    it('returns function', () => {
        expect.hasAssertions();

        /**
         * Render hook, using testing-library utility
         * @see https://react-hooks-testing-library.com/reference/api#renderhook
         */
        const {result} = renderHook(() => useActions(), {
            wrapper: ({children}) => (
                <Provider store={store}>{children}</Provider>
            ),
        });

        expect(result.current.getNumber).toBeInstanceOf(Function);
    });

    describe('getNumber', () => {
        /**
         * Initialize axios mock adapter to mock API responses
         * @see https://github.com/ctimmerm/axios-mock-adapter
         */
        const mockAxios = new MockAdapter(axios);

        /**
         * Mock network error response
         */
        const mockNetworkError = () => {
            mockAxios.onGet(config.randomAPI).networkError();
        };

        /**
         * Mock 404 response
         */
        const mock404 = () => {
            mockAxios.onGet(config.randomAPI).reply(404);
        };

        /**
         * Mock network timeout
         */
        const mockTimeout = () => {
            mockAxios.onGet(config.randomAPI).timeout();
        };

        afterEach(() => {
            mockAxios.resetHandlers();
            store.clearActions();
        });

        /** Note that tests functions are async */
        it(`handles successful API query`, async () => {
            expect.hasAssertions();

            const {result} = renderHook(() => useActions(), {
                wrapper: ({children}) => (
                    <Provider store={store}>{children}</Provider>
                ),
            });

            /** Mock response from API */
            const response = 6;

            mockAxios.onGet(config.randomAPI).reply(200, response);

            /**
             * Wait until async action finishes
             */
            await result.current.getNumber();

            /** First dispatched action should have _PENDING suffix */
            expect(store.getActions()[0]).toStrictEqual({
                type: `${GET_RANDOM_NUMBER}_PENDING`,
            });

            /** Second dispatched action should have _FULFILLED suffix */
            expect(store.getActions()[1].type).toStrictEqual(
                `${GET_RANDOM_NUMBER}_FULFILLED`
            );

            /** Second dispatched action should deliver response from API */
            expect(store.getActions()[1].payload.data).toStrictEqual(response);
        });

        /** Iterate through different API error cases */
        it.each([[mockNetworkError], [mock404], [mockTimeout]])(
            `it handles API fetching errors`,
            async (mockResponse) => {
                let hasThrown;
                const {result} = renderHook(() => useActions(), {
                    wrapper: ({children}) => (
                        <Provider store={store}>{children}</Provider>
                    ),
                });

                mockResponse();

                /**
                 * Use try/catch block, because await function will throw an error when request fails
                 */
                try {
                    await result.current.getNumber();
                } catch {
                    hasThrown = true; // eslint-disable-line fp/no-mutation
                } finally {
                    expect(store.getActions()[0]).toStrictEqual({
                        type: `${GET_RANDOM_NUMBER}_PENDING`,
                    });
                    expect(store.getActions()[1].type).toStrictEqual(
                        `${GET_RANDOM_NUMBER}_REJECTED`
                    );
                    expect(store.getActions()[1].payload).toBeInstanceOf(Error);
                    expect(
                        store.getActions()[1].payload
                    ).toMatchSpecificSnapshot(
                        './__snapshots__/actionCreators.spec.js.shot'
                    );
                    expect(hasThrown).toBe(true);
                }
            }
        );
    });
});
