import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import App from "./App";
import "./css/reset.css";
import "./css/site.css";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

const store = configureStore({
    reducer: rootReducer,
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
