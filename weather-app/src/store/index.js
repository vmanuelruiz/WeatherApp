import {createStore} from 'redux';
import {city} from './../reducers/city';

const initialState = {
    city: 'Buenos Aires,ar'
};



export const store = createStore(city, initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //pasamos un reducer como parametro, q en este caso le pasamos una funcion vacia..
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//este parametro es para enlazar REDUX con el pluggin de chrome...