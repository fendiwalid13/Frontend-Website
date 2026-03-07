
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneMovie, UpdateMovie } from '../Redux/Actions/MovieActions';

const EditMovie = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(getOneMovie(id))
    },[])

    const onemovie=useSelector(state=>state.MovieReducer.onemovie)
    const [title,setTitle]=useState(onemovie.title)
    const [description,setDescription]=useState(onemovie.description)
    const [photo,setPhoto]=useState(onemovie.photo)

    useEffect(()=>{
     setTitle(onemovie.title)
     setDescription(onemovie.description)
     setPhoto(onemovie.photo)
   },[onemovie])
    const navigate=useNavigate()
  return (
<Form>
      <Form.Group className="mb-3">
        <Form.Label>Title of the movie</Form.Label>
        <Form.Control value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter Title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description of the movie</Form.Label>
        <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter Description " />
      </Form.Group>
    
    <Form.Group className="mb-3">
        <Form.Label>Poster of the movie</Form.Label>
        <Form.Control value={photo} onChange={(e)=>setPhoto(e.target.value)} type="text" placeholder="URL fo the poster" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>{e.preventDefault(); dispatch(UpdateMovie(id,{title,photo,description},navigate))}}>Submit</Button>
      <Button  variant="secondary" onClick={()=>{navigate('/ListMovies')}}>Go back</Button>
    </Form>

    
  )
}

export default EditMovie
