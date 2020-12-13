import React,{useState} from "react"
import { navigate} from "@reach/router"
import { Link } from 'gatsby'
import Error from './Error'
import { Auth } from 'aws-amplify'
import {Input,Form,PredictiveButton,HeaderLink} from './emotion'

const SignUp = () => {
  const [signupInfo,setSignupInfo] = useState({
    username: ``,
    password: ``,
    email: '',
    phone_number: '',
    authCode: '',
    stage: 0,
    error: ''
  });

  const handleUpdate = (e) => {
    setSignupInfo({...signupInfo,[e.target.name]:e.target.value});
    return;
  }

  const signUp = async () => {
    const { username, password, email, phone_number } = signupInfo;
    let usPhoneNumber = '+1'+phone_number;
    try {
      await Auth.signUp({ username, password, attributes: { email, phone_number }});
      setSignupInfo({...signupInfo,state: 1});
    } catch (err) {
      setSignupInfo({...signupInfo,error: err});
      console.log('error signing up...', err);
    }
  }

  const confirmSignUp = async () => {
    const { username, authCode } = signupInfo;
    try {
      await Auth.confirmSignUp(username, authCode)
      alert('Successfully signed up!')
      navigate("/app/login")
    } catch (err) {
      setSignupInfo({...signupInfo,error: err});
      console.log('error confirming signing up...', err)
    }
  }
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Sign Up</h1>
      {
        signupInfo.stage === 0 && (
          <Form >
            {signupInfo.error && <Error errorMessage={signupInfo.error}/>}
            <Input
              onChange={handleUpdate}
              placeholder='Username'
              name='username'
              value={signupInfo.username}
            />
            <Input
              onChange={handleUpdate}
              placeholder='Password'
              name='password'
              value={signupInfo.password}
              type='password'
            />
            <Input
              onChange={handleUpdate}
              placeholder='Email'
              name='email'
              value={signupInfo.email}
            />
            <Input
              onChange={handleUpdate}
              placeholder='Phone Number'
              name='phone_number'
              value={signupInfo.phone_number}
            />
            <div onClick={signUp}>
              <PredictiveButton style={{marginTop:'0'}}>Sign Up</PredictiveButton>
            </div>
          </Form>
        )
      }
      {
        signupInfo.stage === 1 && (
          <Form>
            {signupInfo.error && <Error errorMessage={signupInfo.error}/>}
            <Input
              onChange={handleUpdate}
              placeholder='Authorization Code'
              name='authCode'
              value={signupInfo.authCode}
            />
            <div onClick={confirmSignUp}>
              <PredictiveButton>Confirm Sign Up</PredictiveButton>              
            </div>
          </Form>
        )
      }
      <div style={{width: '50%',margin: 'auto'}}>
        <PredictiveButton style={{width: '25%'}} to="/app/login">Sign In</PredictiveButton>
      </div>
    </div>
  )
}

export default SignUp