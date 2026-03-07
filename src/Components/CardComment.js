import './Comment.css'
import EditComment from './EditComment'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment } from '../Redux/Actions/CommentsActions'

const CardComment = ({el}) => {
   const user =useSelector(state=>state.UserReducer.user)
   const dispatch=useDispatch()
  const date =           new Date(el.createdAt).toLocaleString(   { day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
 return (
  <div className="comment-card">
    <div className="comment-header">
      <strong className="comment-owner">{el.owner?.name}</strong>
      <span className="comment-date">{date}</span>
    </div>

    <h4 className="comment-message">{el.message}</h4>

    {el.owner?._id === user?._id && (
       <div className="comment-actions">
         <EditComment el={el} date={date} />
         <button className="comment-delete-btn" onClick={() => dispatch(deleteComment(el._id))}> Delete</button>
      </div>
    )}
  </div>
)
}

export default CardComment
