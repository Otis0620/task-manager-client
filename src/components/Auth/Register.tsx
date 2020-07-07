import './Auth.scss';
import React, { Component } from 'react';
import { history } from '../../routes/history';
import { authService } from '../../services';

class Register extends Component<
  {},
  { inputData: { username: string; email: string; password: string } }
> {
  constructor(props) {
    super(props);

    this.state = {
      inputData: {
        email: '',
        username: '',
        password: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(inputType: any) {
    this.setState({ inputData: { ...this.state.inputData, ...inputType } });
  }

  async handleSubmit() {
    const {
      inputData: { username: name, email, password },
    } = this.state;

    const response = await authService.register({
      name,
      email,
      password,
    });

    if (response) {
      history.push('/taskboard');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="form-container">
          <div className="form" onSubmit={this.handleSubmit}>
            <div>
              <h2>Register</h2>

              <input
                className="input"
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.inputData.username}
                onChange={(event) => this.handleChange({ username: event.target.value })}
              />

              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.inputData.email}
                onChange={(event) => this.handleChange({ email: event.target.value })}
              />
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.inputData.password}
                onChange={(event) => this.handleChange({ password: event.target.value })}
              />

              <input
                className="input"
                type="password"
                name="passwordConfirmation"
                placeholder="Confirm Password"
              />

              <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
