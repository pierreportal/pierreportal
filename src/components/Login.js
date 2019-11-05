import React, { Component } from 'react'
import { login } from '../api'
console.log(login)

export default class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault()
    login(this.state.username, this.state.password).then(response => {
      console.log(response)
      this.setState({ username: '', password: '' })
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="********" />
          <button type='submit'>Log in</button>
        </form>
      </div>
    )
  }
}
