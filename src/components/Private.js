import React, { Component } from 'react'
import axios from 'axios'

export default class Private extends Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    }, () => console.log(this.state))
  }
  handleSubmit = e => {
    e.preventDefault()
    axios.post('/private', { username: this.state.username, password: this.state.password }).then(response => {
      console.log(response)
    }).catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <h1>private</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="username ?" />
          <input type="password" name="password" placeholder="password ?" />
          <button type="submit">log</button>
        </form>
      </div>
    )
  }
}
