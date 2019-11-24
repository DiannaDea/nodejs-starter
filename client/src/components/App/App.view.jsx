import React from "react"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Container } from 'reactstrap'
import Header from '../Header'
import appRoutes from '../../routes'

const AppView = ({ token }) => (
  <div>
    <Router>
      <Header />
      <Container>
        {
          appRoutes.map(({
            component: Component, routes, isProtected, ...routeInfo
          }) => (
            <Route
              {...routeInfo}
              render={props => (
                ((token && isProtected) || !isProtected)
                  ? <Component {...props} routes={routes} />
                  : <Redirect to="/" />
              )}
            />
          ))
        }
      </Container>
    </Router>
  </div>
)

export default AppView