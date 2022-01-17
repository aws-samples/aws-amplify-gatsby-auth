import React from 'react';
import { ReactComponent as Heart } from './assets/heart.svg';
import { ReactComponent as Sun } from './assets/sun.svg';
import { ReactComponent as Shock } from './assets/shock.svg';
import { ReactComponent as Power } from './assets/power.svg';
import * as styles from './Values.module.css';

type Props = {
  className?: string;
};

type Value = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const Values = (_: Props): JSX.Element => {
  const values: Value[] = [
    {
      icon: <Power />,
      title: 'Grit',
      description: 'Passion, perseverance, and old fashioned hard work',
    },
    {
      icon: <Shock />,
      title: 'Impact',
      description: 'Innovative and fast, achieving more than anyone else',
    },
    {
      icon: <Sun />,
      title: 'Entrepreneurship',
      description: 'Optimistic and seeing opportunities, we think bigger',
    },
    {
      icon: <Heart />,
      title: 'Care',
      description: 'We care deeply about the entrepreneurs we support',
    },
  ];

  return (
    <div className={styles.backdrop}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Our values</h3>
        <div className={styles.values}>
          {values.map((value) => (
            <div key={value.title} className={styles.value}>
              <h3>
                {value.icon} {value.title}
              </h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
