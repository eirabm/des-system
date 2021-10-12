/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './sidebar.module.scss';

import Switch from '@mui/material/Switch';
import Brightness2Icon from '@mui/icons-material/Brightness2';

import { useContext } from "react";
import { NavLink } from 'react-router-dom';

import { ThemeContext } from '@ds/local';


/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  const themeCtx = useContext(ThemeContext);
  const darkMode = themeCtx.state.isDark;

  const theme = darkMode ? "dark-theme" : "light-theme"

  return (
    <div className={`${styles.sidebar} ${styles[theme]}`}>
      
      <NavLink exact to="/" className={styles.inactive} activeClassName={styles.selected}>
        Overview
      </NavLink>

      <NavLink exact to="/Components" className={styles.inactive} activeClassName={styles.selected}>
        Components
      </NavLink>

      <NavLink exact to="/buttons" className={styles.inactive} activeClassName={styles.selected}>
        Buttons
      </NavLink>

      <NavLink exact to="/Spinner" className={styles.inactive} activeClassName={styles.selected}>
        Spinner
      </NavLink>

      <Brightness2Icon /> <Switch onChange={() => {darkMode ? themeCtx.dispatch({type: "LIGHTMODE"}) : themeCtx.dispatch({type: "DARKMODE"})}}/>

    </div>
  );
}

export default Sidebar;
