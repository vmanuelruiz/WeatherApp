import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState = {
    city: 'Buenos Aires,ar'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Con devTools osea el plugin de chrome:
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk))); 

//Sin DevTools:
//export const store = createStore(city, initialState, applyMiddleware(thunk)); 

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //pasamos un reducer como parametro, q en este caso le pasamos una funcion vacia..
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//este parametro es para enlazar REDUX con el pluggin de chrome...