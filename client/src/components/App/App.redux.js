import { connect } from 'react-redux'
import AppView from './App.view'

const mapStateToProps = (state) => {
  const {
    auth: {
      token
    }
  } = state

  return {
    token
  }
}

export default connect(mapStateToProps, null)(AppView)
