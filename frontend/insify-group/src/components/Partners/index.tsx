import React from 'react';
import { ReactComponent as LogoMre } from './assets/logo-mre.svg';
import { ReactComponent as LogoTaf } from './assets/logo-taf.svg';
import * as styles from './Partners.module.css';

type Props = {
  className?: string;
};

export const Partners = (_: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.intro}>
        We have surrounded ourselves with the best partners and experts to guarantee our contracts and our services.
      </h2>
      <h3 className={styles.label}>Our partners</h3>
      <div className={styles.partners}>
        <div className={styles.logo}>
          <LogoMre className={styles.mre} />
        </div>
        <div className={styles.logo}>
          <LogoTaf />
        </div>
      </div>
    </div>
  );
};
