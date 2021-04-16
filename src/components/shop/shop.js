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
      // fetch navbar links
          // set nav links
          // filter product with links
      // fetch shop products action creator
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
    return { state }
}

Shop = connect(maStateToProps, actions)(Shop); 
export default Shop;