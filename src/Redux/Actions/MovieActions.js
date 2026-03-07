import axios from 'axios'
import { GETALLMOVIES, GETMOVIESBYUSER, GETONEMOVIE } from '../ActionTypes/MovieTypes'
import { handleError } from './ErrorActions'

const apiUrl=process.env.REACT_APP_API_URL

const handleApiError = (error, dispatch) => {
  if (error.response?.data?.errors) {
    error.response.data.errors.forEach(element => {
      dispatch(handleError(element.msg));
    });
  } else {
    dispatch(handleError(error.message));
  }
};

export const getAllMovies=()=>async(dispatch)=>{
   try {
    const res=await axios.get(`${apiUrl}/api/movie/getAllMovies`)
    dispatch({
        type:GETALLMOVIES,
        payload:res.data.movies
    })
   } catch (error) {
  handleApiError(error, dispatch);
}
}

export const getOneMovie=(id)=>async(dispatch)=>{
   try {
    const res=await axios.get(`${apiUrl}/api/movie/getOneMovie/${id}`)
    dispatch({
        type:GETONEMOVIE,
        payload:res.data.found
    })
   } catch (error) {
  handleApiError(error, dispatch);
}
}

export const UpdateMovie=(id,modifMovie,navigate)=>async(dispatch)=>{
   try {
    await axios.put(`${apiUrl}/api/movie/updateMovie/${id}`,modifMovie)
    dispatch(getAllMovies())
    navigate('/ListMovies')
   } catch (error) {
  handleApiError(error, dispatch);
}
}

export const addMovie=(newMovie,navigate)=>async(dispatch)=>{
   try {
   
    await axios.post(`${apiUrl}/api/movie/addMovie`,newMovie,{
            headers:{authorized:localStorage.getItem('token')}
        })
    dispatch(getAllMovies())
    navigate('/ListMovies')
   } catch (error) {
  handleApiError(error, dispatch);
}
}

export const deleteMovie=(id,navigate)=>async(dispatch)=>{
   try {
    await axios.delete(`${apiUrl}/api/movie/deleteMovie/${id}`)
    dispatch(getAllMovies())
    navigate('/ListMovies')
   } catch (error) {
  handleApiError(error, dispatch);
}
}

export const getMoviesByUser=()=>async(dispatch)=>{
    try {
        const config={
            headers:{authorized:localStorage.getItem('token')}
        }

        const res= await axios.get(`${apiUrl}/api/movie/getMoviesByUser`, config)
        dispatch({
            type:GETMOVIESBYUSER,
            payload:res.data.UserMovies
        })
    } catch (error) {
  handleApiError(error, dispatch);
}
}