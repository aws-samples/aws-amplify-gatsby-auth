import React from 'react'
import {HeaderLink, HeaderStyle} from './emotion'
// import { Link } from 'gatsby'
// import { navigate } from '@reach/router'
// import { logout, isLoggedIn } from "../utils/auth"
// import { Auth } from 'aws-amplify'

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <HeaderLink to='/'>
      {siteTitle}
    </HeaderLink>
  
      {/* {
        isLoggedIn() && (
          <p
            onClick={
              () => Auth.signOut().then(logout(() => navigate('/app/login'))).catch(err => console.log('eror:', err))
            }
          >Sign Out</p>
        )
      } */}
  </HeaderStyle>
)

export default Header
