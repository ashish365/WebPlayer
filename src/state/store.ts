import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk),
    // Uncomment below line & comment above line to enable redux devtools browser extension
    // composeWithDevTools(
    //     applyMiddleware(thunk),
    // )
);

export default store;