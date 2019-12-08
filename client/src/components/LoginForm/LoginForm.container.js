import React from 'react'
import { Redirect } from 'react-router-dom';
import LoginFormView from './LoginForm.view'
import { getTokensFromLocalStorage } from '../../utils/tokenManagement'

class HeaderContainer extends React.Component {
  state = {
    login: {
      text: '',
      isValid: false
    },
    password: {
      text: '',
      isValid: false
    }
  }

  handleInputChange = (inputType, value) => {
    const validations = {
      login: (value) => value && value.length >= 5,
      password: (value) => value && value.length >= 3,
    }

    this.setState({
      [inputType]: {
        text: value,
        isValid: validations[inputType](value)
      }
    })
  }

  handleLogin = () => {
    const { login: loginRequest } = this.props;
    const { login, password } = this.state;

    if (login.isValid && password.isValid) {
      loginRequest({
        login: login.text,
        password: password.text
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        {
          getTokensFromLocalStorage()
            ? <Redirect to='/users' />
            : (
              <LoginFormView
                handleInputChange={this.handleInputChange}
                handleLogin={this.handleLogin}
                loginInputValid={this.state.login.isValid}
                passwordInputValid={this.state.password.isValid}
              />
            )
        }
      </React.Fragment>
    )
  }
}

export default HeaderContainer