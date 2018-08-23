import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "index.css";
import reducers from "reducers";
import { createBrowserHistory } from "history";
import sagaWatchers from "services/sagas/watchersSaga";
import registerServiceWorker from "./registerServiceWorker";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));

const history = createBrowserHistory();

sagaMiddleware.run(sagaWatchers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App history={history} />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root") as HTMLElement
);
registerServiceWorker();
