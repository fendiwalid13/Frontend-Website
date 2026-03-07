import './AddMovie.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovie } from '../Redux/Actions/MovieActions';

const AddMovie = () => {

    const dispatch=useDispatch()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [photo,setPhoto]=useState("")

    const navigate=useNavigate()
  return (
<div className="edit-movie-page">
  <Form className="edit-form">
      <Form.Group className="mb-3">
        <Form.Label>Title of the movie</Form.Label>
        <Form.Control  onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter Title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description of the movie</Form.Label>
        <Form.Control  onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter Description " />
      </Form.Group>
    
    <Form.Group className="mb-3">
        <Form.Label>Poster of the movie</Form.Label>
        <Form.Control onChange={(e)=>setPhoto(e.target.value)} type="text" placeholder="URL fo the poster" />
      </Form.Group>
      <Button className="edit-btn-primary"  variant="primary" type="submit" onClick={(e)=>{e.preventDefault(); dispatch(addMovie({title,photo,description},navigate))}}>Submit</Button>
      <Button className="edit-btn-secondary" variant="secondary" onClick={()=>{navigate('/ListMovies')}}>Go back</Button>
    </Form>
  </div>
  )
}

export default AddMovie
