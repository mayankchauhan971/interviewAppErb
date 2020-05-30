import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import New from "./New";
import Show from "./Show";
import Edit from "./Edit";

const App = ()=> {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/interview/new" component={New} />
        <Route exact path="/interview/:id" component={Show} />
        <Route exact path="/interview/:id/edit" component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;