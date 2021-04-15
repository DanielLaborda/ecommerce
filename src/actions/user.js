import {
    SET_USER_PURCHASES ,   
    SET_PURCHASE_DETAIL    
} from './types';

export function setPurchaseDetail(_id) {
    return({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id:0,
                title: 'purchase 1',
                amount: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Daniel Laborda',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id:1,
                amount: 19.40,
                orderNumber: 'A0034534565',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Maxwell Nelson',
                    shippingAddress: '3333 West State Street'
                }
            },
            {
                _id:2,
                amount: 14.38,
                orderNumber: 'A004242334',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id:3,
                amount: 25.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Tony Gambino',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id:4,
                title: 'purchase 1',
                amount: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Daniel Laborda',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id:5,
                amount: 19.40,
                orderNumber: 'A0034534565',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Maxwell Nelson',
                    shippingAddress: '3333 West State Street'
                }
            },
            {
                _id:6,
                amount: 14.38,
                orderNumber: 'A004242334',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id:7,
                amount: 25.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Tony Gambino',
                    shippingAddress: '1234 West State Street'
                }
            }
        ]
    })
}