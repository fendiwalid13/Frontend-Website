import  { useEffect } from 'react'
import NavProfil from './NavProfil'
import { useDispatch, useSelector } from 'react-redux'
import MyCommentsCard from './MyCommentsCard'
import { getCommentsByUser } from '../Redux/Actions/CommentsActions'

const MyComments = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCommentsByUser())
  }, [dispatch])

  const commentsUser = useSelector(
    state => state.CommentsReducer.commentsUser
  )

  return (
    <div className="dashboard">
      <NavProfil />
      <main className="main-content">

        {commentsUser && commentsUser.length === 0 ? (
          <div className="no-comments">
            <h2>Aucun commentaire à afficher</h2>
          </div>
        ) : (
          <>
            <h2 className="section-title">🎬 My Reviews</h2>
            {commentsUser &&
              commentsUser.map((el) => (
                <MyCommentsCard key={el._id} el={el} />
              ))
            }
          </>
        )}

      </main>
    </div>
  )
}

export default MyComments