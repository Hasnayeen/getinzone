export const startTimer = () => ({
  type: 'START_TIMER'
})

export const pauseTimer = (timerId) => ({
  type: 'PAUSE_TIMER',
  timerId
})

export const resetTimer = (timerId) => ({
  type: 'RESET_TIMER',
  timerId
})

export const startBreak = (time) => ({
  type: 'START_BREAK',
  breakTime: time
})

export const decreaseTime = () => ({
  type: 'DECREASE_TIME'
})

export const loadComponent = (component) => ({
  type: 'LOAD_COMPONENT',
  component: component
})

export const toggleDropdown = () => ({
  type: 'TOGGLE_DROPDOWN'
})

export const setCurrentTime = (time) => ({
  type: 'SET_CURRENT_TIME',
  time: time
})

export const setWorkTime = (time) => ({
  type: 'SET_WORK_TIME',
  time: time
})

export const setBreakTime = (time) => ({
  type: 'SET_BREAK_TIME',
  time: time
})
