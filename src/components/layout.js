import React, { Component } from 'react';
import Header from './headernavbar/header';
import Navbar from './headernavbar/nav';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import Signin from "./auth/signin";

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Header/>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Signin}/>
        </Switch>
      </div>
    );
  }
}
