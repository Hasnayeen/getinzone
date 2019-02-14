import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Duration } from 'luxon'

const mapStateToProps = (state) => {
  return {
    time: state.time
  }
}
class PurposefulPractice extends Component {
  constructor (props) {
    super(props)
    this.state = {
      goal: ''
    }
    this.changeGoal = this.changeGoal.bind(this)
    this.startTimer = this.startTimer.bind(this)
  }

  render () {
    return (
      <div className='flex flex-row flex-wrap w-128 bg-white rounded shadow-lg text-grey-darker'>
        <div className='w-64 h-64 border-r border-b flex flex-row flex-wrap items-baseline justify-center'>
          <div className='pt-2 text-xl self-start'>
            <span className='border-b-2 pb-1'>
              Specific Goal
            </span>
          </div>
          <textarea rows='6' className='appearance-none bg-blue-lightest rounded py-2 px-3 text-grey-darker resize-none' placeholder='Write your goal for this session' onChange={this.changeGoal} value={this.state.goal} />
        </div>
        <div className='w-64 h-64 border-l border-b flex flex-row flex-wrap justify-center'>
          <div className='pt-2 text-xl text-center self-start w-full'>
            <span className='border-b-2 pb-1'>
              Intense Focus
            </span>
          </div>
          <div className='text-center'>
            <div>
              Session Duration
            </div>
            <div className='text-center text-grey-darker text-5xl pb-4 pt-8'>{this.currentTime()}</div>
            <div>
              <button className='btn btn-brand p-2 start' type='button' onClick={this.startTimer}>Start</button>
            </div>
          </div>
        </div>
        <div className='w-64 h-64 border-r border-t'>
          <div className='text-center pt-2 text-xl'>
            <span className='border-b-2 pb-1'>
              Immediate Feedback
            </span>
          </div>
        </div>
        <div className='w-64 h-64 border-l border-t'>
          <div className='text-center pt-2 text-xl'>
            <span className='border-b-2 pb-1'>
              Frequent Discomfort
            </span>
          </div>
        </div>
      </div>
    )
  }

  changeGoal (event) {
    this.setState({ goal: event.target.value })
  }

  currentTime () {
    return Duration.fromObject({ seconds: this.props.time }).shiftTo('minutes', 'seconds').toFormat("mm ':' ss")
  }

  startTimer () {
    this.props.dispatch({ type: 'START_TIMER' })
  }
}

export default connect(mapStateToProps, null)(PurposefulPractice)
