import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux"
import { useEffect, useState } from 'react';
import { getOneComment, updateComment } from '../Redux/Actions/CommentsActions';


const EditComment = ({el,date}) => {

    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(getOneComment(el._id))
    },[])
  // const onecomment=useSelector(state=>state.CommentsReducer.oneComment)
  const [comment,setComment]=useState(el.message)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button className="comment-edit-btn" onClick={handleShow}>
  ✏ Edit
</button>


<Modal show={show} onHide={handleClose} centered contentClassName="custom-modal">
  <Modal.Header closeButton>
    <Modal.Title className="modal-owner">
      {el.owner?.name}
    </Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <Form>
      <Form.Group className="mb-3">
        <Form.Control
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          type="text"
          placeholder="Enter message"
        />
      </Form.Group>
    </Form>

    <div className="modal-date">{date}</div>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button
      variant="primary"
      onClick={(e) => {
        e.preventDefault();
        dispatch(updateComment(el._id, { message: comment }));
        handleClose();
      }}
    >
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>
      </>
  )
}

export default EditComment
