import './Comment.css'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addComment } from '../Redux/Actions/CommentsActions'
const AddComment = ({movieId}) => {
    const dispatch=useDispatch()
    const [message,setMessage]=useState("")
  const handleSubmit = () => {
    if (!message.trim()) return;

    dispatch(
      addComment({
        message,movieId,
      })
    );

    setMessage("");
  };
return (
  <div className="add-comment-container">
    <input
      className="comment-input"
      type="text"
      placeholder="Write your comment..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
    <button className="comment-submit-btn" onClick={handleSubmit}>
      Add Comment
    </button>
  </div>
)
}

export default AddComment
