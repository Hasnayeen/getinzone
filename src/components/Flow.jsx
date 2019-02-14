import React, { Component } from 'react'

export default class Flow extends Component {
  render () {
    return (
      <div className='flex flex-row flex-wrap w-128 bg-white rounded shadow-lg text-grey-darker'>
        <div className='w-64 h-64 border-r border-b flex flex-row flex-wrap items-baseline justify-center'>
          <div className='pt-2 text-xl self-start'>
            <span className='border-b-2 pb-1'>
              1. Struggle
            </span>
          </div>
          <div className='text-center p-2'>
            Did you struggle during the session?
          </div>
          <div>
            <div className='p-2'>
              <input className='mr-2' type='radio' />
              <span>Yes</span>
            </div>
            <div className='p-2'>
              <input className='mr-2' type='radio' />
              <span>No</span>
            </div>
          </div>
        </div>
        <div className='w-64 h-64 border-r border-b flex flex-row flex-wrap items-baseline justify-center'>
          <div className='pt-2 text-xl self-start'>
            <span className='border-b-2 pb-1'>
              2. Release
            </span>
          </div>
          <div className='text-center p-2'>
            Did you take a break & detached yourself from struggle?
          </div>
          <div>
            <div className='p-2'>
              <input className='mr-2' type='radio' />
              <span>Yes</span>
            </div>
            <div className='p-2'>
              <input className='mr-2' type='radio' />
              <span>No</span>
            </div>
          </div>
        </div>
        <div className='w-64 h-64 border-r border-b flex flex-row flex-wrap items-baseline justify-center'>
          <div className='pt-2 text-xl self-start'>
            <span className='border-b-2 pb-1'>
              4. Recover
            </span>
          </div>
          <div className='text-center p-2'>
            Did you disconnect and got enough rest?
          </div>
          <div>
            <div className='p-2'>
              <input className='mr-2' type='radio' />
              <span>Yes</span>
            </div>
            <div className='p-2'>
              <input className='mr-2' type='radio' />
              <span>No</span>
            </div>
          </div>
        </div>
        <div className='w-64 h-64 border-r border-b flex flex-row flex-wrap items-baseline justify-center'>
          <div className='pt-2 text-xl self-start'>
            <span className='border-b-2 pb-1'>
              3. Flow
            </span>
          </div>
          <div>
            <div className='p-1'>
              1. High Consequences
            </div>
            <div className='p-1'>
              2. Rich Sensory Experiences
            </div>
            <div className='p-1'>
              3. Immediate Feedback
            </div>
            <div className='ml-4'>
              <div className='p-1'>
                a. Action
              </div>
              <div className='p-1'>
                b. Result
              </div>
              <div className='p-1'>
                c. Correction
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
