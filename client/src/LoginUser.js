import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        const { username, password } = this.state;
        console.log(username, password);
        fetch("http://localhost:3000/api/user/login", {
          method: "POST",
          crossDomain: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status == "ok") {
              window.location.href = "./empList";
            }
          });
      }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>
        <div>
          <label>Username</label>
          <input type="username" onChange={(e) => this.setState({ username: e.target.value })}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={(e) => this.setState({ password: e.target.value })}/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <p><a href="/signup">Sign Up</a></p>
      </form>
    )
  }
}
