import UsersList from './components/UsersList'
import LoginForm from './components/LoginForm'

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
  }
]
export default appRoutes
