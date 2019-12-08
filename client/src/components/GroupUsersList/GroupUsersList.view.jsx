import React from 'react';
import { Table, Button } from 'reactstrap';

const GroupUsersList = ({ groupUsers }) => (
  <React.Fragment>
    <Table>
      <thead>
        <tr>
          <th>Login</th>
          <th>Full Name</th>
        </tr>
      </thead>
      <tbody>
        {
          groupUsers.map(user => (
            <tr key={user.id}>
              <td>{user.login}</td>
              <td>{user.fullName}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  </React.Fragment>
)

export default GroupUsersList;
