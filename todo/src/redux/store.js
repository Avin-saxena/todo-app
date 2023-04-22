import {createStore,combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const reducer=combineReducers({
    todos:todosReducers
})
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;