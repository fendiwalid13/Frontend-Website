import NavProfil from './NavProfil'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import MyMoviesCard from './MyMoviesCard'
import { getMoviesByUser } from '../Redux/Actions/MovieActions'
import { useNavigate } from "react-router-dom"

const MyMovies = () => {
        const dispatch=useDispatch()
      useEffect(()=>{
        dispatch(getMoviesByUser())
      },[dispatch])
        const navigate = useNavigate()
    const moviesUser= useSelector(state=>state.MovieReducer.moviesUser)
  return (


            <div className="dashboard">
              <NavProfil />
              <main className="main-content">
        
                {moviesUser && moviesUser.length === 0 ? (
                  <div className="no-movies">
                    <h2>Aucun film à afficher</h2>
                    <button onClick={() => navigate("/AddMovie")}>
                      Add Movie
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="section-title">🎬 My Reviews</h2>
                    {moviesUser &&
                      moviesUser.map((el) => (
                        <MyMoviesCard key={el._id} el={el} />
                      ))
                    }
                  </>
                )}
        
              </main>
            </div>


  )
}

export default MyMovies
