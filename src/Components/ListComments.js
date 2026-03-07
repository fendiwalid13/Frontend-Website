import './Comment.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllComments } from '../Redux/Actions/CommentsActions'
import CardComment from './CardComment'
import { currentUser } from '../Redux/Actions/UserActions'

const ListComments = ({movieId}) => {
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getAllComments())
       dispatch(currentUser())
    },[dispatch])

    const comments=useSelector(state=>state.CommentsReducer.comments)
    const moviecomments= comments.filter((el,i,t)=>el.movieId?._id===movieId ||el.movieId===movieId)
return (
  <div className="comments-wrapper">
    <h3 className="comments-title">
      Comments <span>({moviecomments.length})</span>
    </h3>

    {moviecomments.length === 0 ? (
      <p className="no-comments">No comments yet</p>
    ) : (
      <div className="comments-list">
        {moviecomments.map((el) => (
          <CardComment key={el._id} el={el} />
        ))}
      </div>
    )}
  </div>
)
}

export default ListComments
