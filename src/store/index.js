import { createStore, applyMiddleware, compose } from 'redux'
import startTimer from './../reducers'

const state = {
  currentComponent: 'timer',
  time: 600,
  defaultTime: 600,
  timerRunning: false,
  breakTime: 2,
  breakRunning: false,
  timerId: null,
  dropdownShown: false
}

const timerMiddleware = store => next => action => {
  switch (action.type) {
    case 'START_TIMER':
      action.timerId = setInterval(() => store.dispatch({ type: 'DECREASE_TIME' }), 1000)
      break

    case 'START_BREAK':
      action.timerId = setInterval(() => store.dispatch({ type: 'DECREASE_TIME' }), 1000)
      break

    case 'RESET_TIMER':
      clearInterval(action.timerId)
      break

    case 'PAUSE_TIMER':
      clearInterval(action.timerId)
      break

    case 'DECREASE_TIME':
      if (store.getState().time === 1) {
        clearInterval(store.getState().timerId)
      }
      break

    default:
      break
  }
  next(action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  startTimer,
  state,
  composeEnhancers(
    applyMiddleware(timerMiddleware)
  )
)

export default store
