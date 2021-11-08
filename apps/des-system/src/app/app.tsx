import styles from './app.module.scss';

import { Sidebar, About, Buttons } from '@ds/local';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getThemeSelector } from '@ds/store';


export function App() {
  const isDark = useSelector(getThemeSelector)
  const theme = isDark.isDark ? "dark-theme" : "light-theme"
  
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
