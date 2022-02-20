import { createStore } from "redux";
import rootReducers from "../Reducers/reduxReducer";

const store = createStore(rootReducers);

export default store;
