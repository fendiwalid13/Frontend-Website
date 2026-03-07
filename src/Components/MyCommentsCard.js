import Card from 'react-bootstrap/Card';
import {  useNavigate } from 'react-router-dom';
import './MyCommentsCard.css'


const MyCommentsCard = ({el}) => {
  const navigate = useNavigate()
  return (

    <Card className="my-comment-card">
      <Card.Body>
        <Card.Title onClick={()=>navigate(`/MoviePage/${el.movieId._id}`)}>{el.movieId.title}</Card.Title>
        <Card.Text>Message: {el.message}</Card.Text>
      </Card.Body>
    </Card>

  )
}

export default MyCommentsCard

// onClick={navigate(`/MoviePage/${el.movieId._id}`)}