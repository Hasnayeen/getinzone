import React, { Component } from 'react'

export default class Techniques extends Component {
  render () {
    return (
      <div className='bg-grey-darkest font-sans font-normal rounded-lg'>
        <div className='p-8 text-grey-darkest text-center flex flex-col items-center'>
          <div className='text-white text-4xl font-medium mb-6'>
            Game Plan for Defeating Procrastination
          </div>
          <div className='text-grey-light text-2xl mb-16'>
            Effective techniques to apply to your workflow
          </div>

          <div className='flex flex-row text-white justify-center items-center my-16 w-full'>
            <div className='w-1/2 text-8xl text-brand-light font-bold px-8'>
              Only 5
            </div>
            <div className='flex items-center w-1/2 text-lg text-left px-8 border-l border-white min-h-64'>
              <div className='w-3/5 mx-auto font-light text-xl text-white leading-loose'>
                Don't target for long time. Aim for a very short amount of time.<br />
                Target to work for only 5 minutes, maybe even 2 minutes.
              </div>
            </div>
          </div>

          <div className='flex flex-row text-white justify-center items-center my-16 w-full'>
            <div className='w-1/2 text-8xl text-brand-light font-bold px-8'>
              Stupid Small
            </div>
            <div className='flex items-center w-1/2 text-xl text-left px-8 border-l border-grey-light min-h-64'>
              <div className='w-3/5 mx-auto font-light text-white leading-loose'>
                Start with very small task. Break down big task to smallest chunk possible.
              </div>
            </div>
          </div>

          <div className='flex flex-row text-white justify-center items-center my-16 w-full'>
            <div className='w-1/2 text-8xl text-brand-light font-bold px-8'>
              Don't Filter
            </div>
            <div className='flex items-center w-1/2 text-xl text-left px-8 border-l border-grey-light min-h-64'>
              <div className='w-3/5 mx-auto font-light text-white leading-loose'>
                When starting don't try to be perfect, just let everything out onto the page/screen in front of you.
              </div>
            </div>
          </div>

          <div className='flex flex-row text-white justify-center items-center my-16 w-full'>
            <div className='w-1/2 text-8xl text-brand-light font-bold px-8'>
              Short Deadline
            </div>
            <div className='flex items-center w-1/2 text-xl text-left px-8 border-l border-grey-light min-h-64'>
              <div className='w-3/5 mx-auto font-light text-white leading-loose'>
                Work in series of short time intervals (10/15/25 min) with a small break (2/5 min) in between.
              </div>
            </div>
          </div>

          <div className='flex flex-row text-white justify-center items-center my-16 w-full'>
            <div className='w-1/2 text-8xl text-brand-light font-bold px-8'>
              Reflect & Rate
            </div>
            <div className='flex items-center w-1/2 text-xl text-left px-8 border-l border-grey-light min-h-64'>
              <div className='w-3/5 mx-auto font-light text-white leading-loose'>
                Review work of a interval or a series of interval & rate them to determine a clear line of progression.
              </div>
            </div>
          </div>

          <div className='flex flex-row text-white justify-center items-center my-16 w-full'>
            <div className='w-1/2 text-8xl text-brand-light font-bold px-8'>
              Disengage
            </div>
            <div className='flex items-center w-1/2 text-xl text-left px-8 border-l border-grey-light min-h-64'>
              <div className='w-3/5 mx-auto font-light text-white leading-loose'>
                Schedule mental rest (15/30 min) after a period of intense focus (1/2 hr of work) and simply be mindful.
              </div>
            </div>
          </div>

          <div className='flex flex-row text-white justify-center items-center my-16 w-full'>
            <div className='w-1/2 text-8xl text-brand-light font-bold px-8'>
              Refocus
            </div>
            <div className='flex items-center w-1/2 text-xl text-left px-8 border-l border-grey-light min-h-64'>
              <div className='w-3/5 mx-auto font-light text-white leading-loose'>
                Return to your work after a period of disengaged focus
              </div>
            </div>
          </div>

          <div className='flex flex-row text-white justify-center items-center my-16 w-full'>
            <div className='w-1/2 text-8xl text-brand-light font-bold px-8'>
              Only 20%
            </div>
            <div className='flex items-center w-1/2 text-xl text-left px-8 border-l border-grey-light min-h-64'>
              <div className='w-3/5 mx-auto font-light text-white leading-loose'>
                Focus and work on most important things of the task (20%) first and get feedback, then iterate on it focusing on the next 20%.
              </div>
            </div>
          </div>

          <div className='flex flex-row text-white justify-center items-center my-16 w-full'>
            <div className='w-1/2 text-8xl text-brand-light font-bold px-8'>
              Slow HRV
            </div>
            <div className='flex items-center w-1/2 text-xl text-left px-8 border-l border-grey-light min-h-64'>
              <div className='w-3/5 mx-auto font-light text-white leading-loose'>
                Slow down your HRV (Heart Rate Variability). 5 breathes per minute(inhale: 5sec, hold: 2sec, exhale: 5sec)
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
