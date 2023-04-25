import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducer/rootReducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(persistedReducer, composedEnhancer)
let persistor = persistStore(store)
export { store, persistor }
