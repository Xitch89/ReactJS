import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './SwitchButton.module.css';

function SwitchButton({ toggleTheme, theme }) {
  const [checked, setChecked] = useState(theme === 'dark');

  const handleChange = () => {
    setChecked(!checked);
    toggleTheme();
  };

  return (
    <label className={classes.switchButton} htmlFor="inputId">
      <input
        id="inputId"
        type="checkbox"
        className={classes.switch_input}
        checked={checked}
        onChange={handleChange}
      />
      <span className={`${classes.switch_slaider} ${checked ? classes.active : classes.inactive}`} />
    </label>
  );
}

SwitchButton.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string,
};
SwitchButton.defaultProps = {
  theme: 'dark',
};

export default SwitchButton;
