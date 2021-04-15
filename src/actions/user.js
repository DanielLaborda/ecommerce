import {
    SET_USER_PURCHASES ,   
    SET_PURCHASE_DETAIL    
} from './types';

export function setPurchaseDetail(_id) {
    console.log(_id);
    return({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

//Como funcionan los creadores de acciones-> son la funcion donde se crea la accion
export function fetchUserPurchases() {
    return ({
        //accion redux -> las que tiene la info
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id:0,
                title: 'purchase 1',
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Daniel Laborda',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id:1,
                total: 19.40,
                orderNumber: 'A0034534565',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Maxwell Nelson',
                    shippingAddress: '3333 West State Street'
                }
            },
            {
                _id:2,
                total: 14.38,
                orderNumber: 'A004242334',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id:3,
                total: 25.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Tony Gambino',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id:4,
                title: 'purchase 1',
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Daniel Laborda',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id:5,
                total: 19.40,
                orderNumber: 'A0034534565',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Maxwell Nelson',
                    shippingAddress: '3333 West State Street'
                }
            },
            {
                _id:6,
                total: 14.38,
                orderNumber: 'A004242334',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id:7,
                total: 25.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Tony Gambino',
                    shippingAddress: '1234 West State Street'
                }
            }
        ]
    })
}