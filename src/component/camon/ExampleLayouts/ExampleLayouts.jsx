import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import classes from './ExampleLayouts.module.css';
import { ThemeContext } from '../../Layout/Layout';

function ExampleLayouts({ grayText, yellowText }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classes.exampleLayouts}>
      <p 
        className={cn(classes.exampleLayouts_core, { [classes.light]: theme === 'light', })}
      >
        {grayText}
      </p>
      <p className={cn(classes.bigYellowText, { [classes.light]: theme === 'light', })}>{yellowText}</p>
    </div>
  );
}

ExampleLayouts.propTypes = {
  grayText: PropTypes.string.isRequired,
  yellowText: PropTypes.string.isRequired,
};

export default ExampleLayouts;
