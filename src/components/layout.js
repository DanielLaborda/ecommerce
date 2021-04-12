import React, { Component } from 'react';
import Header from './headernavbar/header';
import Navbar from './headernavbar/nav';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import SignIn from "./auth/signin";
import SignUp from "./auth/signup";

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Header/>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={SignIn}/>
            <Route path='/signin' exact component={SignIn}/>
            <Route path='/signup' exact component={SignUp}/>
        </Switch>
      </div>
    );
  }
}
