import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login } from '../Redux/Actions/UserActions';
import "./Auth.css";


const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch =useDispatch()
  const navigate=useNavigate()
    
  return (
<div className="auth-page">
  <div className="auth-card">
    <h2 className="auth-title">Welcome Back</h2>

    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          onChange={(e)=>setEmail(e.target.value)} 
          type="email" 
          placeholder="Enter email" 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          onChange={(e)=>setPassword(e.target.value)} 
          type="password" 
          placeholder="Password" 
        />
      </Form.Group>

      <Button
        className="auth-btn"
        onClick={(e)=>{
          e.preventDefault();
          dispatch(login({password,email},navigate))
        }}
        variant="primary"
        type="submit"
      >
        Login
      </Button>
    </Form>
  </div>
</div>
  )
}

export default Login
