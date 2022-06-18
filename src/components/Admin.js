import React from 'react'
import { Link } from 'gatsby'
import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';

function Admin() {
  const [volunteers, setVolunteers] = useState([]);
  const [requests, setRequests] = useState([]);

	useEffect(() => {
    const getRequests = async() => {
      try {
        const requests = await API.graphql({query: queries.listRequests});
        console.log(requests);
        setRequests(requests);
      } catch(e){
        console.error('error getting data ', e)
      }
    };

    const getVolunteers = async() => {
      try {
        const volunteers = await API.graphql({query: queries.listVolunteers});
        console.log(volunteers);
        setVolunteers(volunteers.data.listVolunteers.items);
      } catch(e) {
        console.error('error getting data ', e)
      }
    }

    try {
      getRequests();
      getVolunteers();
    } catch (e) {
      console.error('error getting data ', e)
    }
    
	}, []);
  
  return (
      <div>
        <h1>Admin</h1>
	      <p>You are now logged in as an Admin! <Link to="/app/profile">View profile</Link></p>
        <h2>Open Requests</h2>
        <h2>Clients</h2>
        <h2>Current Volunteers</h2>
        {volunteers.map((v) => <p>{v.name} {v.email}</p>)}
      </div>
    )
  }

export default Admin