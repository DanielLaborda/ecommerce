import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';

import SignIn from './components/auth/signin';
import SignUp from "./components/auth/signup";

import thunk from 'redux-thunk';
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import "./style/main.scss";
import history from "./history";
import Layout from "./components/layout";


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
        <Switch>
            <Route path='/' exact component={SignIn}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
        </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
