import styles from './app.module.scss';

import { Sidebar, About, Buttons } from "@ds/local";

import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export function App() {
  return (
  
    <Router>
    <Sidebar />

      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/buttons" component={Buttons} />
      </Switch>
    </Router>

  
  );
}

export default App;
