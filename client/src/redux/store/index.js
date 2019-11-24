import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const defaultState = {}

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(rootSaga)

export default store
