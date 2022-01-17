import * as React from 'react';
import '../assets/global.css';
import '../assets/variables.css';
import { Header } from '../components/Header';
import { Investors } from '../components/Investors';
import { Layout } from '../components/Layout';
import { Navigation } from '../components/Navigation';
import { Partners } from '../components/Partners';
import { Team } from '../components/Team';
import { Values } from '../components/Values';
import { Press } from '../components/Press';
import { Footer } from '../components/Footer';

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <title>Insify group</title>
      <Navigation />
      <Header />
      <Partners />
      <Values />
      <Team />
      <Investors />
      <Press />
      <Footer />
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;
