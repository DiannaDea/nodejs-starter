import React from 'react'
import CreateUserFormView from './CreateUserForm.view'

class CreateUserForm extends React.Component {
  state = {
    login: '',
    password: '',
    fullName: '',
    groupIds: []
  }

  componentDidUpdate(prevProps) {
    if (prevProps.users.length !== this.props.users.length) {
      this.props.history.push('/users')
    }
  }

  handleInputChange = (inputType, value) => {
    this.setState({
      [inputType]: value
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

    createUser({
      login: this.state.login,
      password: this.state.password,
      fullName: this.state.fullName,
      groupIds: this.state.groupIds,
    })
  }

  render() {
    return (
      <CreateUserFormView
        handleInputChange={this.handleInputChange}
        handleCheckboxSelect={this.handleCheckboxSelect}
        handleCreateUser={this.handleUserCreate}
      />
    )
  }
}

export default CreateUserForm