import React from 'react'
import DeleteUserModalView from './DeleteUserModal.view'

class DeleteUserModalContainer extends React.Component  {
  render() {
    return <DeleteUserModalView
      modal={this.props.modal} toggle={this.props.toggle}
    />
  }
}

export default DeleteUserModalContainer