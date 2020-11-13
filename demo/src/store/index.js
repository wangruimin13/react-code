import {createStore,applyMiddleware} from 'redux'
import reducer from './importModule'
export default applyMiddleware(createStore(reducer))