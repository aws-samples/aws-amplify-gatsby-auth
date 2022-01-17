import React from 'react';
import * as styles from './Layout.module.css';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Layout = ({ children }: Props): JSX.Element => {
  return <div className={styles.wrapper}>{children}</div>;
};
