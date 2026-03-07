import './EditRate.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Rating from '@mui/material/Rating'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {  deleteRate, updateRate } from '../Redux/Actions/RateActions'

const EditRate = ({ el, setShowEdit }) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState(el.rate)

  const handleClose = () => setShowEdit(false)

  return (
  <Modal show={true} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title className="modal-title"><h5>Edit your rating</h5></Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body">
        <h5 className="modal-owner">{el.owner?.name}</h5>

        <Rating
          value={value}
          max={5}
          precision={1}
          onChange={(event, newValue) => setValue(newValue)}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            dispatch(updateRate(el._id, { rate: value }, el.movieId?._id || el.movieId));
            handleClose();
          }}
        >
          Save
        </Button>

        <Button
          variant="danger"
          onClick={(e) => {
            e.preventDefault();
            dispatch(deleteRate(el._id, el.movieId?._id || el.movieId));
            handleClose();
          }}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditRate