import React, { Component } from 'react';

class PurchaseDetails extends Component {
    render() {
        const { className } = this.props;

        return (
            <div className={'${className} purchase-details'}>
                purchases details go here
            </div>
        )
    }
}

export default PurchaseDetails;