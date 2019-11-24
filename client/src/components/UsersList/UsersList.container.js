import React from 'react'
import UsersListView from './UsersList.view'

class UsersListContainer extends React.Component {
  componentDidMount(prevProps) {
    // if (prevProps.token !== this.props.token) {
    //   this.props.getUsers()
    // }
    this.props.getUsers()
  }

  render() {
    return (
      <UsersListView
        users={this.props.users}
        setCurrentUser={this.props.setCurrentUser}
        curUser={this.props.curUser}
      />
    )
  }
}

export default UsersListContainer