import React from 'react'
import CreateUserFormView from './CreateUserForm.view'

class CreateUserForm extends React.Component {
  state = {
    login: {
      text: '',
      isValid: false
    },
    password: {
      text: '',
      isValid: false,
    },
    fullName: {
      text: '',
      isValid: false
    },
    groupIds: []
  }

  componentDidUpdate(prevProps) {
    if (prevProps.users.length !== this.props.users.length) {
      this.props.history.push('/users')
    }
  }

  handleInputChange = (inputType, value) => {
    const validations = {
      login: (value) => value && value.length >= 5,
      password: (value) => value && value.length >= 3,
      fullName: (value) => value && value.length >= 1,
    }

    this.setState({
      [inputType]: {
        text: value,
        isValid: validations[inputType](value)
      }
    })
  }

  handleCheckboxSelect = (groupId) => {
    const { groupIds } = this.state;

    const newGroupIds = (!groupIds.includes(groupId))
      ? [...groupIds, groupId]
      : groupIds.filter(id => id !== groupId)

    this.setState({
      groupIds: newGroupIds 
    })
  }

  handleUserCreate = () => {
    const { createUser } = this.props;
    const { login, password, fullName } = this.state

    if (login.isValid && password.isValid && fullName.isValid) {
      createUser({
        login: login.text,
        password: password.text,
        fullName: fullName.text,
        groupIds: this.state.groupIds,
      });
    }
  }

  render() {
    console.log('==this.state', this.state);

    return (
      <CreateUserFormView
        handleInputChange={this.handleInputChange}
        handleCheckboxSelect={this.handleCheckboxSelect}
        handleCreateUser={this.handleUserCreate}
        loginInputValid={this.state.login.isValid}
        passwordInputValid={this.state.password.isValid}
        fullNameInputValid={this.state.fullName.isValid}
      />
    )
  }
}

export default CreateUserForm