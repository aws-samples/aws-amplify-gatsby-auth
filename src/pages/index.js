import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

import Amplify from "aws-amplify";
import config from "../aws-exports";
Amplify.configure(config);

const IndexPage = () => (
  <Layout>
    <h1>Hello!</h1>
  </Layout>
);

export default IndexPage;
