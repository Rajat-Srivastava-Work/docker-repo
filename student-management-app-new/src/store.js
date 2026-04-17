import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

const store=createStore(StudentReducer,applyMiddleware(thunk))
export default store;