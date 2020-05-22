import {
    statesReducer
} from "./statesReducer";
import {
    combineReducers
} from "redux";

export const Reducers = combineReducers({
    statesReducer: statesReducer,
});