import "./MoviePage.css";
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from "react-redux"
import { useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom"
import { deleteMovie, getOneMovie } from "../Redux/Actions/MovieActions";
import AddComment from "./AddComment"
import ListComments from "./ListComments"
import { addRate,  getRatesByMovie } from '../Redux/Actions/RateActions';
import ListRates from './ListRates';



const MoviePage = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(getOneMovie(id))
       dispatch(getRatesByMovie(id))
    },[dispatch, id])
    const navigate =useNavigate()
    const onemovie=useSelector(state=>state.MovieReducer.onemovie)
    const rates=useSelector(state=>state.RateReducer.rates)
    const user = useSelector(state => state.UserReducer.user)
    const myRate = rates.find(r => r.owner === user?._id)

            const x = rates.filter((item,i,t)=> item.movieId._id === onemovie._id).reduce(
  (accumulator, currentValue) => accumulator + currentValue.rate,
  0,
)
const xlength = rates.filter((item,i,t)=> item.movieId._id === onemovie._id)

return (
  <div className="movie-page">
    <div className="movie-card">

      <h1 className="movie-title">{onemovie?.title}</h1>
      <h4 className="movie-owner">
        Movie added by : {onemovie?.owner?.name}
      </h4>

      <p className="movie-description">{onemovie?.description}</p>
      <img className="movie-image" src={onemovie?.photo} alt={onemovie?.title} />

      <div className="movie-buttons">
        <button
          className="movie-btn btn-back"
          onClick={() => navigate('/ListMovies')}
        >
          Go Back
        </button>

        <button
          className="movie-btn btn-delete"
          onClick={() => dispatch(deleteMovie(onemovie._id, navigate))}
        >
          Delete
        </button>

        <button
          className="movie-btn btn-edit"
          onClick={() => navigate(`/EditMovie/${onemovie._id}`)}
        >
          Edit
        </button>
      </div>



        {
          !rates.find((el,i,t)=> el.owner._id === user._id) &&
                <div className="rating-section">
        <h3>Rate this movie</h3>
           <Rating
          max={5}
          precision={1}
          value={myRate?.rate || 0}
          onChange={(event, newValue) => {
            dispatch(addRate({ rate: newValue, movieId: onemovie?._id }))
          }}
        />
          </div>
        }
       
    

      <div className="comments-section">
        <AddComment movieId={onemovie?._id} />
        <ListComments movieId={onemovie?._id} />
      </div>
        <h1>Total Rate</h1>
          <Rating  name="read-only" value={x / xlength.length} readOnly />
      <ListRates rates={rates} />

    </div>
  </div>
);
}

export default MoviePage
