import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'reactstrap';

const UsersList = ({ users }) => {
  const getGroups = (user) => {
    return user.groups.map(group => {
      return (
        <Link to="/" key={group.id}>{group.name + '   '}</Link>
      )
    })
  }

  return (
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
          users.map(user => (
            <tr key={user.id}>
              <td>{user.login}</td>
              <td>{user.fullName}</td>
              <td>{getGroups(user)}</td>
              <td>
                <Button color="primary">Update</Button>{' '}
                <Button color="danger">Delete</Button>{' '}
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default UsersList