import {
    // SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS
} from './types';

export function fetchShopCategories() {
    return({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                _id:0,
                title: 'All',
                active: true
            },
            {
                _id:1,
                title: 'JavaScript',
                active: false
            },
            {
                _id:2,
                title: 'UI/UX',
                active: false
            },
            {
                _id:3,
                title: 'Python',
                active: false
            },
            {
                _id:4,
                title: 'UML',
                active: false
            },
            {
                _id:5,
                title: 'Ruby',
                active: false
            }
        ]
    })
}