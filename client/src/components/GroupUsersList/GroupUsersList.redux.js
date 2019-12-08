import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getGroupUsersRequest } from '../../redux/actions/groups/groupActions'
import GroupUsersListContainer from './GroupUsersList.container'

const mapStateToProps = state => ({
  groupUsers: state.groups.groupUsers,
})

const mapDispatchToProps = dispatch => ({
  getGroupUsers: (payload) => dispatch(getGroupUsersRequest(payload)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroupUsersListContainer))
