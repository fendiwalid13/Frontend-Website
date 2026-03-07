import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { currentUser, updateProfil } from "../Redux/Actions/UserActions"
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';


const UpdateProfil = () => {
      const dispatch=useDispatch()
      useEffect(()=>{
         dispatch(currentUser())
      },[dispatch])
      const user =useSelector(state=>state.UserReducer.user)
      const [name,setName]=useState(user.name)
      const [email,setEmail]=useState(user.email)
      const [photo,setPhoto]=useState("")
      const navigate=useNavigate()
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Picture of you</Form.Label>
        <Form.Control value={photo} onChange={(e)=>setPhoto(e.target.value)} type="text" placeholder="Enter URL" />
      </Form.Group>

      <Button onClick={(e)=>{e.preventDefault(); dispatch(updateProfil(user._id,{name,email,photo},navigate))}} variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  )
}

export default UpdateProfil
