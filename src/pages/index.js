import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { getCurrentUser,logout, isLoggedIn } from "../utils/auth"
import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)
const user = getCurrentUser();
const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi people</h1>

      {!isLoggedIn()
      ? <>
          <p>Welcome to Fantasy Pro Boxing!</p> 
          <Link to="/app/signup">Sign Up</Link><br />
          <Link to="/app/login">Sign In</Link><br />
        </>
      : <>
          <p>Welcome back to Fantasy Pro Boxing, <span style={{fontWeight:'bold'}}>{user.username}</span>!</p> 
          <Link to="/app/home">Home</Link><br />
          <Link to="/app/profile">Your profile</Link>
        </>
      }
    </Layout>
  )
}

export default IndexPage