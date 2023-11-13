import { createStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/Main";

const store = createStore(rootReducer);

export default store;