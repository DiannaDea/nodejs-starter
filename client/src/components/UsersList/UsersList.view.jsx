import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'reactstrap';
import DeleteModal from '../DeleteUserModal'
import UpdateModal from '../UpdateUserModal'

class UsersList extends React.Component {
  state = {
    showDeleteModal: false,
    showUpdateModal: false,
  };

  getGroups = (user) => {
    return user.groups.map(group => {
      return (
        <Link to="/" key={group.id}>{group.name + '   '}</Link>
      )
    })
  }

  showModal = (stateProperty, user) => {
    this.setState({ [stateProperty]: true });
    this.props.setCurrentUser({curUser: user})
  };

  hideModal = (stateProperty) => {
    this.setState({ [stateProperty]: false });
  };
  
  handleUserDelete = () => {
    this.props.handleUserDelete()
    this.hideModal('showDeleteModal')
  }

  handleUserUpdate = (updateParams) => {
    this.props.handleUserUpdate(updateParams)
    this.hideModal('showUpdateModal')
  }

  render() {
    return (
      <React.Fragment>
        <Table>
          <thead>
            <tr>
              <th>Login</th>
              <th>Full Name</th>
              <th>Groups</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.users.map(user => (
                <tr key={user.id}>
                  <td>{user.login}</td>
                  <td>{user.fullName}</td>
                  <td>{this.getGroups(user)}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.showModal('showUpdateModal', user)}
                    >
                      Update
                    </Button>{' '}
                    <Button
                      color="danger"
                      onClick={() => this.showModal('showDeleteModal', user)}
                    >
                      Delete
                    </Button>{' '}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <DeleteModal
          show={this.state.showDeleteModal}
          hideModal={() => this.hideModal('showDeleteModal')}
          curUser={this.props.curUser}
          handleUserDelete={this.handleUserDelete}
        />
        <UpdateModal
          show={this.state.showUpdateModal}
          hideModal={() => this.hideModal('showUpdateModal')}
          curUser={this.props.curUser}
          handleUserUpdate={this.handleUserUpdate}
        />
      </React.Fragment>
    )
  }
}

export default UsersList