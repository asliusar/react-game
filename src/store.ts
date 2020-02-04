import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import game from './scenes/Game/state/reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    combineReducers({
        game
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store
