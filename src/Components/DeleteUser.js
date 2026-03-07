import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser  } from "../Redux/Actions/UserActions"
import { useDispatch } from "react-redux"
import { useState } from 'react';

const DeleteUser = ({el}) => {
    const dispatch=useDispatch()


      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete the profil!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>dispatch(deleteUser(el._id))}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default DeleteUser
