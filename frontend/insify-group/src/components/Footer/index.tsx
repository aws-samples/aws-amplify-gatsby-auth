import React from 'react';
import { ReactComponent as Logo } from './assets/logo-insify.svg';
import { ReactComponent as DutchFlag } from './assets/dutch-flag.svg';
import { ReactComponent as LogoFacebook } from './assets/facebook.svg';
import { ReactComponent as LogoInstagram } from './assets/instagram.svg';
import { ReactComponent as LogoLinkedin } from './assets/linkedin.svg';
import { ReactComponent as LogoTwitter } from './assets/twitter.svg';
import * as styles from './Footer.module.css';

type Props = {
  className?: string;
};

export const Footer = (_: Props): JSX.Element => {
  return (
    <footer className={styles.backdrop}>
      <div className={styles.content}>
        <div className={styles.top}>
          <Logo />
          <a href='https://insify.nl' className={styles.homeLink}>
            <DutchFlag />
            Insify.nl
          </a>
        </div>
        <div className={styles.contact}>
          <a className={styles.mail} href='mailto:hello@insify.nl'>
            hello@insify.nl
          </a>
          <div className={styles.socials}>
            <a target={'_blank'} rel='noreferrer' href='https://www.facebook.com/insifyverzekeringen'>
              <LogoFacebook />
            </a>
            <a target={'_blank'} rel='noreferrer' href='https://www.instagram.com/insify_nl'>
              <LogoInstagram />
            </a>
            <a target={'_blank'} rel='noreferrer' href='https://www.linkedin.com/company/insify'>
              <LogoLinkedin />
            </a>
            <a target={'_blank'} rel='noreferrer' href='https://twitter.com/insify'>
              <LogoTwitter />
            </a>
          </div>
        </div>

        <p className={styles.companyDetails}>
          Insify NLD Bemiddelaar B.V., Weesperplein 4B, 1018 XA Amsterdam, KvK 80084044 <br />
          Insify NLD Agent B.V., Weesperplein 4B, 1018 XA Amsterdam, KvK 80084036
          <br />
          <br />
          Read our <a href='https://insify.nl/nl/voorwaarden/privacybeleid'>privacy statement</a>.
        </p>
      </div>
    </footer>
  );
};
