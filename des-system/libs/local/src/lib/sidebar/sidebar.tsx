/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import styles from './sidebar.module.scss';

import Switch from '@mui/material/Switch';
import Brightness2Icon from '@mui/icons-material/Brightness2';

import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { changeTheme, getThemeSelector } from '@ds/store'

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {

  const dispatch = useDispatch()

  const theme = useSelector(getThemeSelector) ? 'dark' : 'light'

  return (
    <div className={styles.sidebar}>
      
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

      <Brightness2Icon /> <Switch onChange={() => {dispatch(changeTheme())}}/>


    </div>
  );
}

export default Sidebar;
