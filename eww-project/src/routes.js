import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './pages/main'
import Login from './pages/login'

function routes(props) {
  return (
    <Switch>
      <Route path="/login/" component={Login} />
      <Route path="/" component={Main} />
    </Switch>
  )
}

export default routes