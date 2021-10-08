import styles from './sidebar.module.scss';

import Switch from '@mui/material/Switch';
import Brightness2Icon from '@mui/icons-material/Brightness2';

import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '@ds/store'

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {

  const dispatch = useDispatch()

  console.log(dispatch(changeTheme()))

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

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

      <Brightness2Icon /> <Switch {...label} />


    </div>
  );
}

export default Sidebar;
