import React from 'react'
import DeleteUserModalView from './DeleteUserModal.view'

class DeleteUserModalContainer extends React.Component  {
  render() {
    return <DeleteUserModalView
      show={this.props.show}
      hideModal={this.props.hideModal}
      curUser={this.props.curUser}
      handleUserDelete={this.props.handleUserDelete}
    />
  }
}

export default DeleteUserModalContainer