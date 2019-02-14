function startTimer (state, action) {
  switch (action.type) {
    case 'START_TIMER':
      return Object.assign({}, state, { timerRunning: true, timerId: action.timerId })

    case 'PAUSE_TIMER':
      return Object.assign({}, state, { timerRunning: false, timerId: null })

    case 'RESET_TIMER':
      return Object.assign({}, state, { timerRunning: false, time: state.defaultTime, breakRunning: false, timerId: null })

    case 'DECREASE_TIME':
      return Object.assign({}, state, { time: state.time - 1 })

    case 'START_BREAK':
      return Object.assign({}, state, { breakRunning: true, time: state.breakTime, timerId: action.timerId })

    case 'LOAD_COMPONENT':
      return Object.assign({}, state, { currentComponent: action.component, dropdownShown: false })

    case 'TOGGLE_DROPDOWN':
      return Object.assign({}, state, { dropdownShown: !state.dropdownShown })

    case 'SET_CURRENT_TIME':
      return Object.assign({}, state, { time: action.time })

    case 'SET_WORK_TIME':
      return Object.assign({}, state, { defaultTime: action.time })

    case 'SET_BREAK_TIME':
      return Object.assign({}, state, { breakTime: action.time })

    default:
      return state
  }
}

export default startTimer
