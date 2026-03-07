import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const MyMoviesCard = ({el}) => {
    const navigate = useNavigate()
  return (
    <Card className="movie-card" style={{ width: "18rem", cursor: "pointer" }}>
      <Card.Img variant="top" src={el.photo} onClick={()=>navigate(`/MoviePage/${el._id}`)} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>{ el.description }</Card.Text>

      </Card.Body>
    </Card>
  )
}

export default MyMoviesCard
