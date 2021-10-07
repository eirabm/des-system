import styles from './sidebar.module.scss';

import { NavLink } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
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

    </div>
  );
}

export default Sidebar;
