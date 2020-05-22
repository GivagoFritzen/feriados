import {
    STATE_UPDATE_VALUE
} from './actionTypes';

export const updateState = value => ({
    type: STATE_UPDATE_VALUE,
    currentState: value
});