import React from "react";
import "../../styles/Function/Login.scss";

class Login extends React.Component {
  state = {
    Email: "",
    Password: "",
    error: {},
    submit: null,
  };
  handleChangeEmail = (event) => {
    this.setState({
      Email: event.target.value,
    });
  };
  handleChangePassword = (event) => {
    this.setState({
      Password: event.target.value,
    });
  };
  validate = () => {
    const errors = {};
    const { Email, Password } = this.state;
    if (!Email) {
      errors.Email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      errors.Email = "Email not suitable";
    }
    if (!Password) {
      errors.Password = "Password is required";
    } else if (Password.length < 6) {
      errors.Password = "Password must be at least 6 characters";
    }
    return errors;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ error: errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ submit: "Login successful" });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input
            type="text"
            value={this.state.Email}
            onChange={this.handleChangeEmail}
          />
          <div style={{ color: "red" }}>{error.Email}</div>
          <label>Password:</label>
          <input
            type="password"
            value={this.state.Password}
            onChange={this.handleChangePassword}
          />
          <div style={{ color: "red" }}>{error.Password}</div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
export default Login;
