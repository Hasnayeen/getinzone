import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DateTime, Duration } from 'luxon'
import Sound from './../sound.mp3'

let sound = new Audio(Sound)

const mapStateToProps = (state) => {
  return {
    time: state.time,
    defaultTime: state.defaultTime,
    breakTime: state.breakTime,
    timerRunning: state.timerRunning,
    breakRunning: state.breakRunning,
    timerId: state.timerId
  }
}

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      totalUnit: 0,
      totalTime: 0,
      date: DateTime.local().toISODate(),
      remarks: '',
      showConfiguration: false
    }
    this.startTimer = this.startTimer.bind(this)
    this.pauseTimer = this.pauseTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.activateBreak = this.activateBreak.bind(this)
    this.configure = this.configure.bind(this)
  }

  startTimer () {
    this.stopSound()
    if (this.props.timerRunning === false) {
      this.props.dispatch({ type: 'START_TIMER' })
    }
  }

  decreaseTime () {
    this.props.dispatch({ type: 'DECREASE_TIME', time: this.props.time })
    if (this.props.time === 0) {
      if (!this.props.breakRunning) {
        this.setState({ totalTime: parseInt(this.state.totalTime, 10) + parseInt(this.props.defaultTime, 10) })
        this.setState({ totalUnit: this.state.totalUnit + 1 })
      }
      this.playSound()
    };
  }

  activateBreak () {
    this.props.dispatch({ type: 'START_BREAK' })
  }

  playSound () {
    sound.play()
  }

  stopSound () {
    sound.pause()
  }

  pauseTimer () {
    this.props.dispatch({ type: 'PAUSE_TIMER', timerId: this.props.timerId })
  }

  resetTimer () {
    this.stopSound()
    this.props.dispatch({ type: 'RESET_TIMER', timerId: this.props.timerId })
  }

  totalTime () {
    return Duration.fromObject({ seconds: this.state.totalTime }).shiftTo('hours', 'minutes')
  }

  currentTime () {
    return Duration.fromObject({ seconds: this.props.time }).shiftTo('minutes', 'seconds').toFormat("mm ':' ss")
  }

  configure () {
    this.props.dispatch({ type: 'LOAD_COMPONENT', component: 'settings' })
  }

  getPercentComplete () {
    let totalTime = this.props.breakRunning ? this.props.breakTime : this.props.defaultTime
    return 100 - ((this.props.time * 100) / totalTime) + '%'
  }

  render () {
    const barStyle = {
      width: this.getPercentComplete()
    }
    return (
      <div className='flex flex-col bg-white shadow-lg relative rounded'>
        <div className='pt-4 pr-4'>
          <span onClick={this.configure}>
            <i className='fas fa-cog float-right text-grey-dark cursor-pointer' />
          </span>
        </div>
        <h1 className='text-center text-grey-darker text-5xl pb-4 pt-8'>{this.currentTime()}</h1>
        <div className='mx-4 mb-8'>
          <div className='h-1 bg-grey-light rounded' />
          <div className='h-1 bg-teal rounded -mt-1' style={barStyle} />
        </div>
        <div className='pb-8'>
          <button className='btn btn-brand start' type='button' onClick={this.startTimer}>Start</button>
          <button className='btn' type='button' onClick={this.pauseTimer}>Pause</button>
          <button className='btn' type='button' onClick={this.resetTimer}>Reset</button>
          <button className='btn' type='button' onClick={this.activateBreak}>Break</button>
        </div>
        <div className='border-t w-full my-4' />
        <div className='p-4'>
          <span className='block py-2 text-grey-dark'>Total Time : {this.totalTime().hours}H {this.totalTime().minutes.toFixed(0)}M</span>
          <span className='block py-2 text-grey-dark'>Completed Unit : {this.state.totalUnit}</span>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Timer)
