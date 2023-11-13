import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./Reducer";

const rootReducer = combineReducers({
    cartReducer
});

export default rootReducer;