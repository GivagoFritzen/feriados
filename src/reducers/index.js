import {
    statesReducer
} from "./statesReducer";
import {
    yearReducer
} from "./yearReducer";
import {
    combineReducers
} from "redux";

export const Reducers = combineReducers({
    statesReducer: statesReducer,
    yearReducer: yearReducer,
});