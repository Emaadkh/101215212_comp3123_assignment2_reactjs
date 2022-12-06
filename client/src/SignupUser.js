import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          email: "",
          password: "",
        };
        this.buttonSubmit = this.buttonSubmit.bind(this);
      }
      buttonSubmit(e) {
        e.preventDefault();
        const { username, email, password } = this.state;
        console.log(username, email, password);
        fetch("http://localhost:3000/api/user/signup/", {
          method: "POST",
          crossDomain: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        })
          .then((res) => res.json())
      }
  render() {
    return (
        <form onSubmit={this.buttonSubmit}>
        <h3>Sign Up</h3>
        <div>
          <label>Username</label>
          <input type="text" onChange={(e) => this.setState({ username: e.target.value })}/>
        </div>
        <div>
          <label>Email address</label>
          <input type="email" onChange={(e) => this.setState({ email: e.target.value })} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={(e) => this.setState({ password: e.target.value })}/>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        <p><a href="/signin">Sign in</a></p>
      </form>
    )
  }
}
