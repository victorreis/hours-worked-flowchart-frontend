import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {INCREMENT_COUNTER} from './actionTypes';
import useCountValue from './selectors';

const useActionsCounter = () => {
    const dispatch = useDispatch();
    const count = useCountValue();
    const incrementCounter = useCallback(() => {
        dispatch({
            type: INCREMENT_COUNTER,
            value: count + 1,
        });
    }, [count, dispatch]);
    return {incrementCounter};
};

export default useActionsCounter;
