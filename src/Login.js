import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="Login">
        <form className="loginForm">
          <div className="loginForm-inputBlock">
            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              onChange={this.handleChangeInput}
            />
          </div>

          <div className="loginForm-inputBlock">
            <label for="password">Password</label>
            <input
              id="password"
              type="text"
              name="password"
              onChange={this.handleChangeInput}
            />
          </div>
        </form>
        <button onClick={() => this.props.onClick({ email, password })}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
