import React from 'react'
import { Redirect } from 'react-router-dom';
import LoginFormView from './LoginForm.view'
import { getTokensFromLocalStorage } from '../../utils/tokenManagement'

class HeaderContainer extends React.Component {
  state = {
    login: '',
    password: ''
  }

  handleInputChange = (inputType, value) => {
    this.setState({
      [inputType]: value
    })
  }

  handleLogin = () => {
    const { login } = this.props;

    login({
      login: this.state.login,
      password: this.state.password
    })
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
              />
            )
        }
      </React.Fragment>
    )
  }
}

export default HeaderContainer