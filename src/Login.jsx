import React, { Component } from 'react'
import { Auth } from 'aws-amplify'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      username: '',
      password: ''
    }
    this.updateValue = this.updateValue.bind(this)
    this.login = this.login.bind(this)
  }

  updateValue (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async login (event) {
    event.preventDefault()

    this.setState({loading: true})
    try {
      await Auth.signIn(this.state.username, this.state.password)
      this.props.auth.userHasAuthenticated(true)
    } catch (e) {
      console.log(e.message)
    }
  }

  render () {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='bg-white shadow-lg mt-32 flex flex-row w-2/5 justify-between'>
          <div className='w-1/2 text-center bg-teal-light p-4'>
            <p className='text-white font-bold text-4xl pt-8 mt-8'>GetInZone</p>
            <p className='text-white text-xl pt-4'>Be laser focused for work</p>
          </div>
          <div className='' />
          <div className='w-1/2 p-8'>
            <form onSubmit={this.login}>
              <p className='py-4'>
                <input id='username' className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                  type='text' name='username' placeholder='Username' onChange={this.updateValue} value={this.state.username} />
              </p>
              <p className='py-4'>
                <input id='password' className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                  type='password' name='password' placeholder='Password' onChange={this.updateValue} value={this.state.password} />
              </p>
              <p className='py-4 text-grey'>
                <input type='checkbox' name='remember' />
                  Remember Me
              </p>
              <p className='py-4'>
                {this.state.loading
                  ? <button className='btn'><i class='fas fa-spinner fa-spin' /> LOGIN</button>
                  : <button type='submit' className='btn'>LOGIN</button>
                }
              </p>
              <a href='password/reset' className='no-underline text-teal text-sm'>Forgot Your Password?</a>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
