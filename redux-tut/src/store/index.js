import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import personReducer from './reducers/personReducer';
import gameReducer from './reducers/gameReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk'
const reducers = combineReducers({ person: personReducer, game: gameReducer, users: userReducer })

const InitialState = {
    game: { name: 'Football' },
    person: { name: 'Animesh' ,email: "asamaiya00@gmail.com" },
    users: []
}

const middleware = [thunk]
const store = createStore(reducers, InitialState,
    compose(applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
export default store;


