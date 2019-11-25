import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'reactstrap';
import DeleteModal from '../DeleteUserModal'

class UsersList extends React.Component {
  state = { show: false };

  getGroups = (user) => {
    return user.groups.map(group => {
      return (
        <Link to="/" key={group.id}>{group.name + '   '}</Link>
      )
    })
  }

  showModal = (user) => {
    this.setState({ show: true });
    this.props.setCurrentUser({curUser: user})
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  
  handleUserDelete = () => {
    this.props.handleUserDelete()
    this.hideModal()
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
                    <Button color="primary">Update</Button>{' '}
                    <Button color="danger" onClick={() => this.showModal(user)}>Delete</Button>{' '}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <DeleteModal
          show={this.state.show}
          hideModal={this.hideModal}
          curUser={this.props.curUser}
          handleUserDelete={this.handleUserDelete}
        />
      </React.Fragment>
    )
  }
}

export default UsersList