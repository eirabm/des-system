import styles from './buttons.module.scss';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useContext } from "react";
import { ThemeContext } from '@ds/local';

/* eslint-disable-next-line */
export interface ButtonsProps {}

export function Buttons(props: ButtonsProps) {
  const themeCtx = useContext(ThemeContext);
  const darkMode = themeCtx.state.isDark;

  const theme = darkMode ? "dark-theme" : "light-theme"

  return (
    <div className={`${styles.buttonsPage} ${styles[theme]}`}>
      <div className={styles.title}>
        <p>@teachable/ui</p>
        <h1>Buttons</h1>
        <p>Buttons change width depending on the content inside of them and have four variations:
          Primary, Sencondary, Tertiary and Caution
        </p>
      </div>

      <div className={styles.component}>
        <div className={styles.propsBox}> 
          <h2> Props </h2>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="disabled" />
          </FormGroup>

          <p>theme</p>
          <FormControl sx={{minWidth: 120 }}>
            <Select
              // value={age}
              //onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Un tema</MenuItem>
              <MenuItem value={20}>algo darks</MenuItem>
            </Select>
          </FormControl>
        </div>

      </div>

      <div>
        <h2>import</h2>
      </div>
    </div>
  );
}

export default Buttons;
