import React from 'react';
import GroupUsersListView from './GroupUsersList.view';

class GroupUsersListContainer extends React.Component {
  componentDidMount() {
    const { match: { params: { groupId } } } = this.props;

    this.props.getGroupUsers({
      groupId
    });
  }

  render() {
    return (
      <GroupUsersListView
        groupUsers={this.props.groupUsers}
      />
    )
  }
}

export default GroupUsersListContainer