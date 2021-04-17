import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ShopSearchBar from './shopSearchBar';

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

  onSubmit= (fields) => {
    console.log(fields);
  }

  render() {
    return (
        <div className='shop'>
            <ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar'/>
            <div className='shop__products'>
              {
                this.props.filteredProducts.map(product => {
                  return (
                    <div key={product._id} className='shop-product'>
                      <div className='shop-product__title'>
                        {product.title}
                      </div>
                      <div className='shop-product__decription'>
                        {product.description}
                      </div>
                    </div>
                  )
                })
              }
            </div>
            {/* shop cart button */}

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