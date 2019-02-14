import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timer from './components/Timer.jsx'
import PurposefulPractice from './components/PurposefulPractice.jsx'
import Settings from './components/Settings.jsx'
import Techniques from './components/Techniques.jsx'
import Flow from './components/Flow.jsx'
import WOOP from './components/WOOP.jsx'
import Navbar from './Navbar.jsx'

const mapStateToProps = (state) => {
  return {
    currentComponent: state.currentComponent,
    timerId: state.timerId
  }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: false
    }
    this.shortcutKey = this.shortcutKey.bind(this)
  }

  componentDidMount () {
    document.body.addEventListener('keyup', this.shortcutKey)
  }

  componentWillUnmount () {
    document.body.removeEventListener('keyup', this.shortcutKey)
  }

  shortcutKey (e) {
    switch (e.keyCode) {
      case 83:
        this.props.dispatch({type: 'START_TIMER'})
        break

      case 80:
        this.props.dispatch({ type: 'PAUSE_TIMER', timerId: this.props.timerId })
        break

      case 82:
        this.props.dispatch({ type: 'RESET_TIMER', timerId: this.props.timerId })
        break

      case 66:
        this.props.dispatch({ type: 'START_BREAK' })
        break

      case 67:
        this.props.dispatch({ type: 'LOAD_COMPONENT', component: 'settings' })
        break

      case 84:
        this.props.dispatch({ type: 'LOAD_COMPONENT', component: 'timer' })
        break

      default:
        break
    }
  }

  render () {
    let activeComponent
    switch (this.props.currentComponent) {
      case 'techniques':
        activeComponent = <Techniques />
        break

      case 'flow':
        activeComponent = <Flow />
        break

      case 'woop':
        activeComponent = <WOOP />
        break

      case 'purposeful-practice':
        activeComponent = <PurposefulPractice />
        break

      case 'settings':
        activeComponent = <Settings />
        break

      default:
        activeComponent = <Timer />
        break
    }
    return (
      <div>
        <Navbar loggedIn={this.state.loggedIn} />
        <div className='container mx-auto px-4 flex flex-col flex-wrap items-center'>

          {activeComponent}

          <div className=' mt-16 p-4 text-grey-darker rounded'>
            <div className='text-grey-dark text-center pt-2 pb-4'>Shortcut Keys</div>
            <div>
              <span className='font-bold'>S</span> : start the timer,
              <span className='font-bold pl-2'>P</span> : pause the timer,
              <span className='font-bold pl-2'>R</span> : reset the timer,
              <span className='font-bold pl-2'>B</span> : switch to break,
              <span className='font-bold pl-2'>T</span> : open timer
              <span className='font-bold pl-2'>C</span> : open settings
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(App)
