import React from 'react';
import { ReactComponent as Checkmark } from './assets/checkmark.svg';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './Header.module.css';

type Props = {
  className?: string;
};

const Statistic = ({ statistic, label }: { statistic: React.ReactNode; label: React.ReactNode }): JSX.Element => {
  return (
    <div className={styles.statistic}>
      <h2>{statistic}</h2>
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export const Header = (_: Props): JSX.Element => {
  return (
    <header className={styles.backdrop}>
      <div className={styles.content}>
        <p className={styles.mission}>Our mission</p>
        <h1 className={styles.title}>Making business insurance fast, simple and fair</h1>
        <div className={styles.usps}>
          <div className={styles.usp}>
            <Checkmark />
            <p>
              <strong>Simple questions, </strong>crystal clear insurance.
            </p>
          </div>
          <div className={styles.usp}>
            <Checkmark />
            <p>
              <strong>Fast. </strong>Covered in 5 minutes.
            </p>
          </div>
          <div className={styles.usp}>
            <Checkmark />
            <p>
              <strong>Fair. </strong>Razor sharp prices, no hidden costs.
            </p>
          </div>
        </div>
      </div>
      <StaticImage
        placeholder='tracedSVG'
        className={styles.imageMobile}
        objectFit='contain'
        breakpoints={[1440]}
        src='./assets/images/header-mobile.png'
        alt='header-image'
      />
      <StaticImage
        placeholder='tracedSVG'
        className={styles.imageDesktop}
        objectFit='contain'
        src='./assets/images/header-desktop.png'
        alt='header-image'
      />
      <div className={styles.content}>
        <p className={styles.statsIntro}>The easiest way to insure your business</p>
        <div className={styles.stats}>
          <Statistic statistic={<strong>1500+</strong>} label={'Professions covered'} />
          <Statistic
            statistic={
              <>
                <strong>4.6</strong>/5
              </>
            }
            label={'Average review rating'}
          />
          <Statistic statistic={<strong>2 min</strong>} label={'To get a quote'} />
        </div>
      </div>
    </header>
  );
};
