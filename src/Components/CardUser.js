import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import DeleteUser from './DeleteUser';
import "./ListUsers.css"

const CardUser = ({el}) => {

  return (
    <Card className="user-card" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{el.email}</Card.Subtitle>

        <DeleteUser el={el}/>

      </Card.Body>
    </Card>
  )
}

export default CardUser
