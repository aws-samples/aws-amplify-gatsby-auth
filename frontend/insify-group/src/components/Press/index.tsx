import React from 'react';
import { ReactComponent as Download } from './assets/download.svg';
import * as styles from './Press.module.css';

type Props = {
  className?: string;
};

type Article = {
  title: string;
  date: string;
  link: string;
};

export const Press = (_: Props): JSX.Element => {
  const articles: Article[] = [
    {
      title: 'Insify launches do-it-yourself insurance for entrepreneurs in construction. ',
      date: 'Dec 8, 2021.',
      link: 'https://insify.nl/nl/pers/release-bouw',
    },
    {
      title: 'Insurtech Insify insures bol.com sales partners.',
      date: 'Aug 25, 2021.',
      link: 'https://insify.nl/nl/pers/samenwerking-bol-com',
    },
    {
      title: 'New Dutch start-up Insify focuses on small business insurance.',
      date: 'Dec 09, 2020.',
      link: 'https://insify.nl/nl/pers/release',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Press release</h3>
      {articles.map((article) => (
        <div className={styles.article} key={article.title}>
          <h4 className={styles.articleTitle}>{article.title}</h4>
          <p>
            <span className={styles.articleDate}>{article.date}</span>
            <a href={article.link} target={'_blank'} rel='noreferrer'>
              Read now.
            </a>
          </p>
        </div>
      ))}
      <div className={styles.pressKit}>
        <h3>Downloads</h3>
        <a href='./InsifyPresskit2022.zip' className={styles.pressKitDownload}>
          <Download />
          Presskit 2022
        </a>
      </div>
    </div>
  );
};
