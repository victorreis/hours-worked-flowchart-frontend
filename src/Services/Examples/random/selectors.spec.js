import React from 'react';
import {Provider} from 'react-redux';

import {renderHook} from '@testing-library/react-hooks';
import configureStore from 'redux-mock-store';

import useRandomAPI from './selectors';

describe('features > counter > useRandomAPI', () => {
    const mockStore = configureStore([]);
    const state = 'random';

    const store = mockStore({
        random: state,
    });

    it('returns count value', () => {
        expect.hasAssertions();

        /**
         * Render hook, using testing-library utility
         * @see https://react-hooks-testing-library.com/reference/api#renderhook
         */
        const {result} = renderHook(() => useRandomAPI(), {
            wrapper: ({children}) => (
                <Provider store={store}>{children}</Provider>
            ),
        });

        expect(result.current).toBe(state);
    });
});
