import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfmdXcQ3Eepx5TXzlblYrLKFodY-GcPmJI9ga2Y2Y-YLvRcEA/viewform?usp=sf_link">THAP Assistance Request Form</a>
    <h1>MISSION</h1>
    <p>To provide safe housing and appropriate supportive services to transgender and gender nonconforming (defined as any personal gender identity different or transgressive from the sex assigned at birth) individuals who are homeless to facilitate movement to independent living and promote productive employment and reduction of risky behaviors, or who seek intermediate or long-term housing that’s centered on the needs of transgender and gender nonconforming people.</p>
    <h1> VISION</h1>
    <p>THAP seeks to bring about the following realities: That every transgender and gender nonconforming person in Georgia have access to safe and comfortable housing; A program that provides comprehensive services to transgender and gender nonconforming individuals that include, but are not limited to, job training/referrals, mental health, and linking our population to other services; A physical space maintained in a co-operative manner that provides beds, communal kitchen and dining facilities, as well as recreation, a library/media center, and meeting space primarily for transgender and gender nonconforming individuals; Coordinate de-centralized volunteer housing & create guidelines/minimum standards for space offered by volunteers, including a thorough vouching process for individuals offering beds, or those facilities providing transgender/gender nonconforming –friendly beds, for the benefit of transgender and gender nonconforming individuals in Georgia.</p>
    <br/>
    <h1>Coming soon</h1>
    <p>Create a new account: <Link to="/app/signup">Sign Up</Link></p>
    <Link to="/app/login">Sign In</Link><br />
    <Link to="/app/home">Home</Link><br />
    <Link to="/app/profile">Your profile</Link>
  </Layout>
)

export default IndexPage
