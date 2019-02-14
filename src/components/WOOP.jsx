import React, { Component } from 'react'

export default class WOOP extends Component {
  render () {
    return (
      <div className='flex flex-col justify-center bg-white shadow-lg relative rounded px-8 py-4 text-grey-darker w-128'>
        <div className='py-4'>
          <div className='text-xl pb-2'>
            <span className='border-b-2'>
              Wish
            </span>
          </div>
          <div>
            Immediate action to achieve long-term important wish
          </div>
        </div>
        <div className='py-4'>
          <div className='text-xl pb-2'>
            <span className='border-b-2'>
              Outcome
            </span>
          </div>
          <div>
            What should be the outcome of the intended action
          </div>
        </div>
        <div className='py-4'>
          <div className='text-xl pb-2'>
            <span className='border-b-2'>
              Obstacle
            </span>
          </div>
          <div>
            Biggest internal obstacle toward the action
          </div>
        </div>
        <div className='py-4'>
          <div className='text-xl pb-2'>
            <span className='border-b-2'>
              Plan
            </span>
          </div>
          <div>
            When, where and how to carry the action and if the obstacle arise then how to overcome?
          </div>
        </div>
      </div>
    )
  }
}
