import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/main';
import Login from './pages/login';
import SignUp from './pages/signup';
import UserMenu from './pages/userMenu';
import Play from './pages/play';
import Summary from './pages/summary';
import Story from './pages/story';
import Confirm from './components/Confirm';

function routes(props) {
  return (
    <Switch>      
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/user" component={UserMenu}/>
      <Route path="/play" component={Play}/>
      <Route path="/story" component={Story} />
      <Route path="/summary" component={Summary} />
      <Route path="/confirm" component={Confirm}/>
      <Route exact path="/" component={Main} />          
    </Switch>
  )
}

export default routes;