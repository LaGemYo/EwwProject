import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './pages/main'
import Login from './pages/login'
import SignUp from './pages/signup'

function routes(props) {
  return (
    <Switch>      
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/" component={Main} />          
    </Switch>
  )
}

export default routes