import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Purchases from './purchases';
import PurchaseDetails from './purchases-detail';

class PurchaseHistory extends Component {
  render() {
    return (
      <div className='purchase-history'>
         <PageTitle className='purchase-history__page-title' title='Purchase History'/>
         <Purchases className='purchase-history__purchases'/>
         <PurchaseDetails className='purchase-history__purchase-detail'/>
         <div className='purchase-history__border-bottom'></div>
      </div>
    );
  }
}

export default PurchaseHistory;