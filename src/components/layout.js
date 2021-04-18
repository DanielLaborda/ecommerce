import React, { Component } from 'react';
import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
import ShopCart from './../components/shop/shopCart';


export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Header/>
        <Navbar/>
        {this.props.children}
        <ShopCart  className='shop__cart-button'/>
      </div>
    );
  }
}
