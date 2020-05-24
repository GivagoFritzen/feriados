import {
    STATE_UPDATE_VALUE,
    YEAR_UPDATE_VALUE
} from './actionTypes';

export const updateState = value => ({
    type: STATE_UPDATE_VALUE,
    currentState: value
});

export const updateYear = value => ({
    type: YEAR_UPDATE_VALUE,
    currentYear: value
});