import {SET_CITY} from './../actions';

export const city = (state={}, action) => {
    switch (action.type) {
        case SET_CITY:
            return {...state, city:action.value} //estado inmutable que va transicionando mediante la ejecucion d acciones, es decir:
            //si ...state viene con city = a algo, city:action.value se ubica como ese valor (pero es nuevo valor)
        default:
            return state;
    }
}