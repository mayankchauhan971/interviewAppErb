import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from "./Home";
import New from "./New";
import Show from "./Show";
import Edit from "./Edit";

const App = ()=> {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/interviews/new" component={New} />
        <Route exact path="/interviews/:id" component={Show} />
        <Route exact path="/interviews/:id/edit" component={Edit} />
      </Switch>
    </div>
  );
}

export default App;