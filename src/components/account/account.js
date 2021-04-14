import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import AccountInformation from './accountInformation';
import PurchaseHistory from './purchaseHistory';


class Account extends Component {
    componentDidMount() {
        const navbarLinks = [
            {
                _id: 0,
                title: 'Purchase History',
                active: false,
                component: <PurchaseHistory/>
            },
            {
                _id: 1,
                title: 'Account Information',
                active: true,
                component: <AccountInformation/>
            }
        ]

        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks(navbarLinks);
    }
    renderContent() {
        if(this.props.navbarLinks) {
            this.props.navbarLinks.map(link => {
                if(link.active) {
                    return link.component
                }
            })
        }
    }
    render() {
        return (
        <div>
            {this.renderContent()}
        </div>
        );
    }
}

function mapStateToProps(state) {
    const { headerLinks, navbarLinks } = state.headerNavbar;
    return { headerLinks, navbarLinks }
}
Account = connect(mapStateToProps, actions)(Account);

export default Account;