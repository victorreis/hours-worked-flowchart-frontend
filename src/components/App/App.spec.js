import React from 'react';
import {Provider} from 'react-redux';

import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import App from './App';

describe('components > App', () => {
    const mockStore = configureStore([]);
    const store = mockStore({
        count: {
            value: 6,
        },
        random: {
            isLoading: false,
            hasError: false,
            isFulfilled: false,
        },
    });

    it('renders without crashing', () => {
        expect.hasAssertions();

        /**
         * `asFragment`:
         * @see https://testing-library.com/docs/react-testing-library/api#asfragment
         * `wrapper`
         * @see https://testing-library.com/docs/react-testing-library/api#wrapper
         */
        const {asFragment} = render(<App />, {
            wrapper: ({children}) => (
                <Provider store={store}>{children}</Provider>
            ),
        });

        /**
         * Basic snapshot test to make sure, that rendered component
         * matches expected footprint.
         */
        expect(asFragment()).toMatchInlineSnapshot(`
            <DocumentFragment>
              <div
                class="container"
              >
                <div
                  class="counter"
                >
                  <h2
                    class="header"
                  >
                    Sync counter
                  </h2>
                  <button
                    class="button"
                    type="button"
                  >
                    Increment by one
                  </button>
                  <div>
                    Total value: 
                    <strong>
                      6
                    </strong>
                  </div>
                </div>
                <div
                  class="counter"
                >
                  <h2
                    class="header"
                  >
                    Async Random
                  </h2>
                  <button
                    class="button"
                    type="button"
                  >
                    Get random number
                  </button>
                  <div>
                    Click the button to get random number
                  </div>
                </div>
              </div>
            </DocumentFragment>
        `);
    });
});
