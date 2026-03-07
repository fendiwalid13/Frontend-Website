import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteProfil  } from "../Redux/Actions/UserActions"
import {useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux"
import { useState } from 'react';
import "./Profil.css"

const DeleteProfil = () => {
      const navigate =useNavigate()
      const dispatch=useDispatch()
     const user =useSelector(state=>state.UserReducer.user)

      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className='btn-delete' variant="primary" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} ClassName="custom-modal"> 
        <Modal.Header closeButton>
          <Modal.Title className="modal-owner">Delete Profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete the profil!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>dispatch(deleteProfil(user._id,navigate))}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default DeleteProfil
