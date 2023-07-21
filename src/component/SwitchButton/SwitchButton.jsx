import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import classes from './SwitchButton.module.css';

function SwitchButton({ toggleTheme, theme }) {
  const [checked, setChecked] = useState(theme === 'dark');
  const [isOn, setIsOn] = useState(false);
  // const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 18,
  };
  const toggleSwitch = () => {
    setIsOn(!isOn);
    setChecked(!checked);
    toggleTheme();
  };
  // const handleChange = () => {
  //   setChecked(!checked);
  //   toggleTheme();
  // };
  // const switchID = useId();

  return (
    <button type="button" className={classes.switch} data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className={classes.handle} layout transition={spring} />
    </button>
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
