import {createStore , applyMiddleware, compose} from'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers';


const initState ={};
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOS__ || compose ;
const store = createStore(reducer,initState,enhancer(applyMiddleware(reduxThunk)));

export default store 