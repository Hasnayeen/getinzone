import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    dropdownShown: state.dropdownShown
  }
}

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.showComponent = this.showComponent.bind(this)
  }

  toggleDropdown () {
    this.props.dispatch({ type: 'TOGGLE_DROPDOWN' })
  }

  showComponent (componentName) {
    this.props.dispatch({ type: 'LOAD_COMPONENT', component: componentName })
  }

  render () {
    return (
      <nav className='bg-white h-12 shadow mb-8'>
        <div className='container mx-auto h-full'>
          <div className='flex flex-row items-center justify-between h-12'>
            <div className='mr-6'>
              <a href='/' className='no-underline text-brand text-2xl font-medium'>
                getin.zone
              </a>
            </div>
            <div className='text-grey-darker bg-grey-lighter w-48 h-12 flex flex-row justify-between items-center p-4 cursor-pointer' onClick={this.toggleDropdown}>
              <div>Menu</div>
              <i className='text-grey-darker cursor-pointer fas fa-angle-down' />
            </div>
          </div>
        </div>

        <div className='container mx-auto flex flex-row justify-end'>
          <div className={'z-10 ' + (this.props.dropdownShown ? '' : 'hidden')}>
            <div className='bg-white w-48 flex flex-col items-center text-sm shadow rounded-b'>
              <div className='w-full hover:border-brand border-l-4 border-transparent'>
                <div onClick={() => this.showComponent('timer')} className='p-4 block no-underline text-grey-dark cursor-pointer'>Timer</div>
              </div>
              <div className='w-full hover:border-brand border-l-4 border-transparent'>
                <div onClick={() => this.showComponent('purposeful-practice')} className='p-4 block no-underline text-grey-dark cursor-pointer'>Purposeful Practice</div>
              </div>
              <div className='w-full hover:border-brand border-l-4 border-transparent'>
                <div onClick={() => this.showComponent('flow')} className='p-4 block no-underline text-grey-dark cursor-pointer'>Flow</div>
              </div>
              <div className='w-full hover:border-brand border-l-4 border-transparent'>
                <div onClick={() => this.showComponent('woop')} className='p-4 block no-underline text-grey-dark cursor-pointer'>WOOP</div>
              </div>
              <div className='w-full hover:border-brand border-l-4 border-transparent'>
                <div onClick={() => this.showComponent('techniques')} className='p-4 block no-underline text-grey-dark cursor-pointer'>Techniques</div>
              </div>
              <div className='w-full hover:border-brand border-l-4 border-transparent'>
                <div onClick={() => this.showComponent('settings')} className='p-4 block no-underline text-grey-dark cursor-pointer'>Settings</div>
              </div>
              <div className='border-t w-full' />
              <div className='w-full hover:border-brand border-l-4 border-transparent'>
                {this.props.loggedIn ? (
                  <a href='logout' className='p-4 block no-underline text-grey-dark'>Logout</a>
                ) : (
                  <a href='login' className='p-4 block no-underline text-grey-dark'>Login</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default connect(mapStateToProps, null)(Navbar)
