import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { ReactComponent as LogoAccel } from './assets/logo-accel.svg';
import { ReactComponent as LogoFlyVentures } from './assets/logo-fly-ventures.svg';
import { ReactComponent as LogoVisionaries } from './assets/logo-visionaries.svg';
import * as styles from './Investors.module.css';

type Props = {
  className?: string;
};

export const Investors = (_: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h3>Our investors</h3>
      <div className={styles.investors}>
        <div className={styles.logo}>
          <LogoAccel className={styles.accel} />
        </div>
        <div className={styles.logo}>
          <LogoVisionaries />
        </div>
        <div className={styles.logo}>
          <LogoFlyVentures />
        </div>
        <div className={styles.logo}>
          <StaticImage src='./assets/logo-frontline.png' alt='frontline' width={110} />
        </div>
      </div>
    </div>
  );
};
