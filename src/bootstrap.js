import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, compose } from  'react-router-dom';


import thunk from 'redux-thunk';
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

import "./style/main.scss";
import history from "./history";
import Layout from "./components/layout";


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
