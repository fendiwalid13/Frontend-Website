import './Movie.css'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getAllMovies } from "../Redux/Actions/MovieActions"
import CardMovie from "./CardMovie"

const ListMovies = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllMovies())
  }, [dispatch])

  const movies = useSelector(state => state.MovieReducer.movies)

  return (
    <div className="movies-container">

      {movies && movies.length === 0 ? (
        <div className="no-movies">
          <h2>Aucun film à afficher</h2>
          <button onClick={() => navigate("/AddMovie")}>
            Add Movie
          </button>
        </div>
      ) : (
        movies && movies.map((el) => (
          <CardMovie key={el._id} el={el} />
        ))
      )}

    </div>
  )
}

export default ListMovies