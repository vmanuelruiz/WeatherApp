import {createStore} from 'redux';

export const store = createStore(() => {}, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //pasamos un reducer como parametro, q en este caso le pasamos una funcion vacia..
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//este parametro es para enlazar REDUX con el pluggin de chrome...