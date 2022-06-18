import React from 'react'
import { Link } from 'gatsby'
import { getCurrentUser } from '../utils/auth'
import { API } from 'aws-amplify'
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';

function Home() {
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		(async () => {
			const user =  await Auth.currentAuthenticatedUser();
			console.log(user);
			const userGroups = user.signInUserSession.accessToken.payload["cognito:groups"];
			console.log('usergroups:', userGroups);
			console.log('is this user an admin?' + userGroups.includes('admins'))
			setIsAdmin(userGroups.includes('admins'));
		  })();
		
	  }, []);

	
	
	return (<div>
  		<h1>Home</h1>
		<a href="https://join.slack.com/t/transhousingatlanta/shared_invite/zt-1b31a1cro-3eDWGQnho5Eif2Liih2ziQ">Join the slack channel!</a>
		<p>You are now logged in! <Link to="/app/profile">View profile</Link></p>
		{isAdmin && <div><p>You are an Admin!</p><Link to='/app/admin'>View Admin Portal</Link></div>}
	</div>);
}

export default Home