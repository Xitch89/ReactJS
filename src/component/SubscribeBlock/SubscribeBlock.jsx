import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './SubscribeBlock.module.css';
import { ThemeContext } from '../Layout';

function SubscribeBlock() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={classes.subscribeBlock}>
      <p 
        className={cn(classes.subscribeBlock_YellowText, { [classes.light]: theme === 'light' })}
      >
        {t('subscribeToAtelier')}
        <br />
        {t('newsletter')}
      </p>
      <p className={cn(classes.subscribeBlock_someText, { [classes.light]: theme === 'light' })}>
        {t('newsletterText')}
      </p>
      <form className={classes.subscribe} action="#" method="post">
        <input type="email" required />
        <button className={classes.subscribe_button} type="submit">
          {t('subscribeButton')}
        </button>
      </form>
      <p className={cn(classes.sub_expl_btn, { [classes.light]: theme === 'light' })}>
        {t('termsAgreement')}
      </p>
    </div>
  );
}

export default SubscribeBlock;
