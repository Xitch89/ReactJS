import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './Footer.module.css';

function Footer({ theme }) {
  const webflow = '404';
  const gitHubWey = 'https://github.com/Xitch89/ReactJS';
  const figma = 'https://www.figma.com/file/eukF6vHhGD51To79l661wN/Atelier.-%2B?node-id=1%3A2';
  const author = 'https://www.facebook.com/profile.php?id=100006864884681';
  const { t } = useTranslation();
  return (
    <div className={classes.footer}>
      <div className={classes.footer_container}>
        <div className={cn(classes.footer_powered, { [classes.light]: theme === 'light' })}>
          <p 
            className={cn(classes.footer_grayText, { [classes.light]: theme === 'light' })}
          >
            {t('poweredBy')}

          </p>
          <Link to={webflow}>{t('webflow')}</Link>
        </div>
        <div className={cn(classes.footer_rightRef, { [classes.light]: theme === 'light' })}>
          <Link to={gitHubWey}>{t('gitHub')}</Link>
          <Link className={classes.footer_rightRefBorder} to={figma}>
            {t('figma')}
          </Link>
          <Link to={author}>{t('author')}</Link>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  theme: PropTypes.string,
};
Footer.defaultProps = {
  theme: 'Dark',
};

export default Footer;
