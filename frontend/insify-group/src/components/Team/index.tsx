import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './Team.module.css';

type Props = {
  className?: string;
};

type Member = {
  name: string;
  role: string;
  profileImage: React.ReactNode;
};

export const Team = (_: Props): JSX.Element => {
  const members: Member[] = [
    {
      name: 'Koen Thijssen',
      role: 'Founder, CEO',
      profileImage: <StaticImage src={'./assets/koen.jpg'} alt='Koen Thijssen' />,
    },
    {
      name: 'Ernst Moorman',
      role: 'Co-Founder',
      profileImage: <StaticImage src={'./assets/ernst.jpg'} alt='Ernst Moorman' />,
    },
    {
      name: 'Jort de Vries',
      role: 'Co-Founder',
      profileImage: <StaticImage src={'./assets/jort.jpg'} alt='Jort de Vries' />,
    },
    {
      name: 'Amélie Consigny-Bezemer',
      role: 'Head of insurance',
      profileImage: <StaticImage src={'./assets/amelie.jpg'} alt='Amélie Consigny-Bezemer' />,
    },
    {
      name: 'Martijn Rutten',
      role: 'CTO',
      profileImage: <StaticImage src={'./assets/martijn.jpg'} alt='Martijn Rutten' />,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>The team</h3>
      <div className={styles.memberList}>
        {members.map((member) => (
          <div key={member.name}>
            {member.profileImage}
            <div className={styles.name}>{member.name}</div>
            <div className={styles.role}>{member.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
