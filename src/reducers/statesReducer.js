import {
    STATE_UPDATE_VALUE
} from '../actions/actionTypes';

const initialState = {
    currentState: 'national'
};

export const statesReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATE_UPDATE_VALUE:
            return {
                ...state,
                currentState: action.currentState
            };
        default:
            return state;
    }
};