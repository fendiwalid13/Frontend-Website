import './Movie.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRates } from '../Redux/Actions/RateActions';



const CardMovie = ({el}) => {
      const [value, setValue] = useState(0)
      const [show, setShow] = useState(false);
      const dispatch =useDispatch()
      useEffect(()=>{
        dispatch(getAllRates())
        
      },[dispatch])

        const rates=useSelector(state=>state.RateReducer.rates)

        const x = rates.filter((item,i,t)=> item.movieId._id == el._id).reduce(
  (accumulator, currentValue) => accumulator + currentValue.rate,
  0,
)
const xlength = rates.filter((item,i,t)=> item.movieId._id == el._id)
  return (
    <Card className="movie-card" style={{ width: "18rem", cursor: "pointer" }}>
      <Card.Img variant="top" src={el.photo} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>Movie added by : {el?.owner?.name}</Card.Text>
        <Card.Text>{show ? el.description : `${el.description.substring(0,150)}...`}</Card.Text>
        <span  className="see-more-text" onClick={()=> setShow(!show)}>{show ? "Show less" : "Show more"}</span>
        <Rating  name="read-only" value={x / xlength.length} readOnly />
        <Button as={Link} to={`/MoviePage/${el._id}`}>See more</Button>
      </Card.Body>
    </Card>
  )
}

export default CardMovie
