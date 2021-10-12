import styles from './app.module.scss';

import { Sidebar, About, Buttons, ThemeContext } from '@ds/local';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useContext } from "react";



export function App() {
  const themeCtx = useContext(ThemeContext);
  const darkMode = themeCtx.state.isDark;

  const theme = darkMode ? "dark-theme" : "light-theme"
  
  return (
    <div className={`${styles.app} ${styles[theme]}`}>
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
