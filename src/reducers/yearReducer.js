import {
    YEAR_UPDATE_VALUE
} from '../actions/actionTypes';

const initialState = {
    currentYear: new Date().getFullYear()
};

export const yearReducer = (state = initialState, action) => {
    switch (action.type) {
        case YEAR_UPDATE_VALUE:
            return {
                ...state,
                currentYear: action.currentYear
            };
        default:
            return state;
    }
};