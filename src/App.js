import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import Timer from './Timer.jsx'
import Navbar from './Navbar.jsx'
import Login from './Login.jsx'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      authenticated: false,
      authenticating: true
    }
    this.userHasAuthenticated = this.userHasAuthenticated.bind(this)
  }

  async componentDidMount () {
    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true)
      }
    } catch (e) {
      if (e !== 'No current user') {
        alert(e)
      }
    }
    this.setState({ authenticating: false })
  }

  userHasAuthenticated (authenticated) {
    this.setState({ authenticated: authenticated })
  }

  render () {
    const childProps = {
      authenticated: this.state.authenticated,
      userHasAuthenticated: this.userHasAuthenticated
    }
    return (
      !this.state.authenticating &&
      <div>
        {this.state.authenticated
          ? <div>
            <Navbar auth={childProps} />
            <div className='container mx-auto px-4 flex flex-col flex-wrap items-center'>
              <Route exact path='/' render={(props) => <Timer {...props} auth={childProps} />} />
              <div className=' mt-16 p-4 text-grey-darker rounded'>
                <div className='text-grey-dark text-center pt-2 pb-4'>Shortcut Keys</div>
                <div>
                  <span className='font-bold'>S</span> : start the timer,
                  <span className='font-bold'> P</span> : pause the timer,
                  <span className='font-bold'> R</span> : reset the timer,
                  <span className='font-bold'> B</span> : switch to break,
                  <span className='font-bold'> C</span> : open/close config option
                </div>
              </div>
            </div>
          </div>
          : <Route exact path='/' render={(props) => <Login {...props} auth={childProps} />} />
        }
      </div>
    )
  }
}

export default App
