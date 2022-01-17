import React from 'react';
import { ReactComponent as Logo } from './images/logo-insify.svg';
import * as styles from './Navigation.module.css';

type Props = {
  className?: string;
};

export const Navigation = (_: Props): JSX.Element => {
  return (
    <nav className={styles.wrapper}>
      <Logo />
      <a className={styles.careers} href='https://careers.insify.nl/' target={'_blank'} rel='noreferrer'>
        We’re hiring!
      </a>
    </nav>
  );
};
