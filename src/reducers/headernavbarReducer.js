import { connect } from 'react-redux';
import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS,
    CHANGE_NAVBAR_ACTIVE
} from '../actions/types';

//reducer jobs-> son los filtros por tipo de accion
const INITIAL_STATE = {
    headerLinks: [],
    navbarLinks: [],
    onclick: ''
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,
                headerLinks: action.payload
            }

        case SET_NAVBAR_LINKS:
            const { links, onClick } = action.payload;
            return {
                ...state,
                navbarLinks: links,
                onClick: onClick 
            }

        case CHANGE_NAVBAR_ACTIVE:
            const navbarLinks = state.navbarLinks.map(link => {
                link.active = false;
                if(link._id == action.payload) {
                    link.active = true;
                } 
                return link;
            })
            return {
                ...state,
                navbarLinks
            }
        default: return state;
    }
}