import axios from 'axios'
import { GETALLRATES, GETONERATE, GETRATESBYMOVIE } from '../ActionTypes/RateTypes';

const apiUrl=process.env.REACT_APP_API_URL

export const getOneRate=(id)=>async(dispatch)=>{
   try {
    const res=await axios.get(`${apiUrl}/api/rate/getOneRate/${id}`)
    dispatch({
        type:GETONERATE,
        payload:res.data.RateFound
    })
   } catch (error) {
      console.log(error)
   }
}

export const getRatesByMovie=(id)=>async(dispatch)=>{
   try {
    const res=await axios.get(`${apiUrl}/api/rate/getRatesByMovie/${id}`)
    dispatch({
        type:GETRATESBYMOVIE,
        payload:res.data.RatesFound
    })
   } catch (error) {
      console.log(error)
   }
}

export const getAllRates=()=>async(dispatch)=>{
   try {
    const res=await axios.get(`${apiUrl}/api/rate/getAllRates`)
    dispatch({
        type:GETALLRATES,
        payload:res.data.rates
    })
   } catch (error) {
      console.log(error)
   }
}

export const addRate=(rate)=>async(dispatch)=>{
   try {
    await axios.post(`${apiUrl}/api/rate/addRate`,rate,{headers:{authorized:localStorage.getItem('token')}})
    dispatch(getRatesByMovie(rate.movieId))
   } catch (error) {
      console.log(error)
   }
}

export const updateRate=(id,modifRate,movieId)=>async(dispatch)=>{
   try {
    await axios.put(`${apiUrl}/api/rate/updateRate/${id}`,modifRate,{ headers: { authorized: localStorage.getItem('token') } })
    dispatch(getRatesByMovie(movieId))
   } catch (error) {
      console.log(error)
   }
}

export const deleteRate=(id,movieId)=>async(dispatch)=>{
   try {
    await axios.delete(`${apiUrl}/api/rate/deleteRate/${id}`,{ headers: { authorized: localStorage.getItem('token') } })
    dispatch(getRatesByMovie(movieId))
   } catch (error) {
      console.log(error)
   }
}