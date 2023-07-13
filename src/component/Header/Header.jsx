import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiMenu, HiMenuAlt1 } from 'react-icons/hi';
import classes from './Header.module.css';
import SwitchButton from '../SwitchButton/SwitchButton';

function Header({ toggleTheme, theme }) {
  const [burger, setBurger] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      localStorage.setItem('language', lng);
    });
  };
  return (
    <div className={classes.wrapper}>
      <header>
        <div>
          <button type="button" onClick={() => setBurger(!burger)} className={classes.burgerContainer}>
            {burger ? <HiMenuAlt1 className={classes.burgerButtonAlt} size={40} />
              : <HiMenu className={classes.burgerButton} size={40} />}
          </button>
          <nav className={`${classes.navBar} ${burger ? classes.active : classes.inactive}`}>
            <ul className={classes.navList}>
              <li>
                <Link className={classes.transparent_header_logo} to="/">
                  {t('atelier')}
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_overview} to="404">
                  {t('overview')}
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_other} to="404">
                  {t('pages')}
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_other} to="404">
                  {t('portfolio')}
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_other} to="404">
                  {t('template')}
                </Link>
              </li>
              <li>
                <Link className={classes.transparent_header_other} to="404">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={classes.rightNav}>
          <div className={classes.themeMode}>
            <label
              htmlFor="switchMode"
              className={classes.switchLabel}
            >
              {theme === 'dark' ? t('darkMode') : t('lightMode')}
            </label>
            <SwitchButton toggleTheme={toggleTheme} theme={theme} />
          </div>
          <Link className={classes.transparent_header_buyTemplate} to="404">
            {t('buyTemplate')}
          </Link>
          <button
            key={i18n.language}
            type="button"
            className={classes.leng}
            onClick={() => changeLanguage(i18n.language === 'en' ? 'ua' : 'en')}
          >
            {i18n.language.toUpperCase()}
          </button>
        </div>
      </header>
    </div>
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string,
};
Header.defaultProps = {
  theme: 'dark',
};

export default Header;
