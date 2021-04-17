import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {
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
      this.props.setNavbarLinks(nextProps.categories, (_id)=> this.props.filterProductsWithCcategoryId(_id));
    }
    return true;
  }

  render() {
    return (
        <div className='shop'>
            {/* search bar component */}
            {/* shop product component */}
            {/* shop cart button */}

        </div>
    );
  }
}

function maStateToProps(state){
  const { categories } = state.shop;  
  return { 
      categories 
    }
}

Shop = connect(maStateToProps, actions)(Shop); 
export default Shop;