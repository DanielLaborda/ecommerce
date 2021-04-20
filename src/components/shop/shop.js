import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ShopCart from './shopCart';
import ShopProducts from './shopProduct';
import ShopSearchBar from './shopSearchBar';

import CartButton from './cartButton';

class Shop extends Component {
  constructor() {
    super()

    this.state = {
      showCart: true
    }
  }

  handleAddToCart = () => {
    if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
      document.getElementById('shop-cart').classList.remove('cart-hidden');
    } else {
      document.getElementById('shop-cart').classList.add('cart-hidden');
    }
  } 
  
  componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signup'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories(); 
        
          // filter product with links
        this.props.fetchShopProducts();

  }

  shouldComponentUpdate(nextProps) {
    if(this.props != nextProps){
      this.props.setNavbarLinks(nextProps.categories, (_id)=> this.props.filterProductsWithCategoryId(_id));
    }
    return true;
  }

  onSubmit= (fields) => {
    this.props.filterProductsWithQuery(fields);
  }

  render() {
    // return <ShopCart  className='shop__cart'/>;
    return (
        <div className='shop'>
            <ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar'/>
            <div className='shop__products'>
              {
                this.props.filteredProducts.map(product => {
                  return (
                    <ShopProducts {...product} key={product._id}/>
                  )
                })
              }
            </div>
            {
              this.state.showCart ? <ShopCart  className='shop__cart'/> : ''
            }
            <CartButton onClick={this.handleAddToCart} className='shop__cart-button' icon='fas fa-cart-plus'/>

        </div>
    );
  }
}

function maStateToProps(state){
  const { categories, filteredProducts } = state.shop;  
  return { 
      categories,
      filteredProducts
    }
}

Shop = connect(maStateToProps, actions)(Shop); 
export default Shop;