import React from 'react'
import UsersListView from './UsersList.view'

class UsersListContainer extends React.Component {
  componentDidMount(prevProps) {
    // if (prevProps.token !== this.props.token) {
    //   this.props.getUsers()
    // }
    this.props.getUsers()
  }

  handleUserDelete = () => {
    const { curUser, deleteUser } = this.props;

    if (curUser) {
      deleteUser({userId: curUser.id})
    }
  }

  handleUserUpdate = (updateParams) => {
    const { curUser, updateUser } = this.props;

    if (curUser) {
      updateUser({
        userId: curUser.id,
        updateParams 
      })
    }
  }

  render() {
    return (
      <UsersListView
        users={this.props.users}
        setCurrentUser={this.props.setCurrentUser}
        curUser={this.props.curUser}
        handleUserDelete={this.handleUserDelete}
        handleUserUpdate={this.handleUserUpdate}
        authorizedUsed={this.props.authorizedUsed}
      />
    )
  }
}

export default UsersListContainer