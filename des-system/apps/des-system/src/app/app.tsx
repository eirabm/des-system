import styles from './app.module.scss';

import { Sidebar, About, Buttons } from '@ds/local';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Sidebar />

        <Switch>
          <div className={styles.content}>
            <Route exact path="/" component={About} />
            <Route exact path="/buttons" component={Buttons} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
