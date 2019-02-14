import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Duration } from 'luxon'

const mapStateToProps = (state) => {
  return {
    time: state.time,
    defaultTime: state.defaultTime,
    breakTime: state.breakTime,
    timerRunning: state.timerRunning,
    breakRunning: state.breakRunning
  }
}
class Settings extends Component {
  constructor (props) {
    super(props)
    this.changeBreakTime = this.changeBreakTime.bind(this)
    this.changeWorkTime = this.changeWorkTime.bind(this)
  }
  render () {
    return (
      <div className='flex flex-col bg-white shadow-lg relative rounded'>
        <div className='bg-white'>
          <div className='flex flex-col justify-between h-full'>
            <div className=''>
              <div className='bg-grey-lighter m-6 p-4 rounded'>
                <label className='block text-grey-darker text-sm font-bold pb-2' htmlFor='work-unit-time'>
                  Work Unit Time <span className='text-sm font-normal'>(in seconds)</span>
                </label>
                <div className='flex flex-row justify-between items-center'>
                  <input className='appearance-none border rounded w-3/5 py-2 px-3 text-grey-darker' id='work-unit-time' type='text' placeholder='3600'
                    onChange={this.changeWorkTime} value={this.props.defaultTime} />
                  <span className='text-grey-darkest'>{this.workTime()}</span>
                </div>
              </div>
              <div className='bg-grey-lighter m-6 p-4 rounded'>
                <label className='block text-grey-darker text-sm font-bold pb-2' htmlFor='break-unit-time'>
                  Break Unit Time <span className='text-sm font-normal'>(in seconds)</span>
                </label>
                <div className='flex flex-row justify-between items-center'>
                  <input className='appearance-none border rounded w-3/5 py-2 px-3 text-grey-darker' id='break-unit-time' type='text' placeholder='3600'
                    onChange={this.changeBreakTime} value={this.props.breakTime} />
                  <span className='text-grey-darkest'>{this.breakTime()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  changeWorkTime (event) {
    this.props.dispatch({ type: 'SET_WORK_TIME', time: parseInt(event.target.value, 10) })
    if (!this.props.timerRunning && (this.props.time === this.props.defaultTime)) {
      this.props.dispatch({ type: 'SET_CURRENT_TIME', time: parseInt(event.target.value, 10) })
    }
  }

  changeBreakTime (event) {
    this.props.dispatch({ type: 'SET_BREAK_TIME', time: parseInt(event.target.value, 10) })
    if (!this.props.breakRunning && (this.props.time === this.props.breakTime)) {
      this.props.dispatch({ type: 'SET_CURRENT_TIME', time: parseInt(event.target.value, 10) })
    }
  }

  workTime () {
    return Duration.fromObject({ seconds: this.props.defaultTime }).shiftTo('hours', 'minutes', 'seconds').toFormat("hh 'H :' mm 'M :' ss 'S'")
  }

  breakTime () {
    return Duration.fromObject({ seconds: this.props.breakTime }).shiftTo('hours', 'minutes', 'seconds').toFormat("hh 'H :' mm 'M :' ss 'S'")
  }
}

export default connect(mapStateToProps, null)(Settings)
