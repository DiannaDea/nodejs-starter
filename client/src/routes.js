import UsersList from './components/UsersList'
import LoginForm from './components/LoginForm'
import CreateUserForm from './components/CreateUserForm'
import GroupUsersList from './components/GroupUsersList'

const appRoutes = [
  {
    path: '/',
    exact: true,
    component: LoginForm,
    key: 1,
    isProtected: false
  }, 
  {
    path: '/users',
    exact: true,
    component: UsersList,
    key: 2,
    isProtected: true
  },
  {
    path: '/create-user',
    exact: true,
    component: CreateUserForm,
    key: 3,
    isProtected: true
  },
  {
    path: '/groups/:groupId/users',
    exact: true,
    component: GroupUsersList,
    key: 4,
    isProtected: true
  },
]
export default appRoutes
