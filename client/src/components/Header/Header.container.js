import React from 'react'
import HeaderView from './Header.view'
import { removeTokensFromLocalstorage } from '../../utils/tokenManagement'

class HeaderContainer extends React.Component {
  handleLogout = () => {
    const { logout } = this.props

    logout()
    removeTokensFromLocalstorage()
  }

  render() {
    return (
      <HeaderView
        handleLogout={this.handleLogout}
      />
    )
  }
}

export default HeaderContainer