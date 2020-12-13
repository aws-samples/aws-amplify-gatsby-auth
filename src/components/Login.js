import React, {useState} from "react"
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { setUser, isLoggedIn } from '../utils/auth'
import Error from './Error'
import { Auth } from 'aws-amplify'
import {Form,Input} from './emotion'
Input
const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    error: false
  });

  const handleUpdate = (event) => {
    setForm({...form,[event.target.name]: event.target.value});
  }

  const login = async () => {
    const { username, password } = form;
    try {
      await Auth.signIn(username, password)
      const user = await Auth.currentAuthenticatedUser()
      const userInfo = {
        ...user.attributes,
        username: user.username
      }
      setUser(userInfo)
      navigate("/app/home")
    } catch (err) {
      // this.setState({ error: err })
      console.log('error...: ', err)
    }
  }

  if (isLoggedIn()) navigate('/app/profile')
  return (
    <div>
      <h1>Sign In</h1>
      {form.error && <Error errorMessage={form.textAlignerror}/>}
      <Form>
        <Input
          onChange={handleUpdate}
          placeholder='Username'
          name='username'
          value={form.username}
        />
        <Input
          onChange={handleUpdate}
          placeholder='Password'
          name='password'
          value={form.password}
          type='password'
        />
        <div style={styles.button} onClick={login}>
          <span style={styles.buttonText}>Sign In</span>
        </div>
      </Form>
      <Link to="/app/signup">Sign Up</Link><br />
    </div>
  )
}

const styles = {
  button: {
    backgroundColor: 'rebeccapurple', padding: '15px 7px', cursor: 'pointer', textAlign: 'center', marginBottom: 10
  },
  buttonText: {
    color: 'white'
  }
}

export default Login