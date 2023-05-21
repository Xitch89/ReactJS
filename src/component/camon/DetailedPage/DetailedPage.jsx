import React, { useContext } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import classes from './DetailPage.module.css';
import { ThemeContext } from '../../Layout';

function DetailedPage({ weyImage, mainText, sumText }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={classes.detail}>
      <img className={classes.image} src={weyImage} alt="404" />
      <p className={cn(classes.mainText, { [classes.light]: theme === 'light', })}>{mainText}</p>
      <p className={cn(classes.smallText, { [classes.light]: theme === 'light', })}>{sumText}</p>
    </div>
  );
}

DetailedPage.propTypes = {
  weyImage: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  sumText: PropTypes.string.isRequired,
};

export default DetailedPage;
