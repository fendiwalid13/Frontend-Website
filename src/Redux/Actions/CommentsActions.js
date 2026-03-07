import axios from 'axios'
import { GETALLCOMMENTS, GETCOMMENTSBYUSER, GETONECOMMENT } from '../ActionTypes/CommentsTypes'
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

export const addComment=(comment)=>async(dispatch)=>{
    try {
    await axios.post(`${apiUrl}/api/comment/addComment`,comment,{
            headers:{authorized:localStorage.getItem('token')}
        })
        dispatch(getAllComments())
    } catch (error) {
  handleApiError(error, dispatch);
    }
}

export const getAllComments=()=>async(dispatch)=>{
    try {
        const res= await axios.get(`${apiUrl}/api/comment/getAllComments`)
        dispatch({
            type:GETALLCOMMENTS,
            payload:res.data.comments
        })
    } catch (error) {
  handleApiError(error, dispatch);
    }
}

export const getOneComment=(id)=>async(dispatch)=>{
    try {
        const res= await axios.get(`${apiUrl}/api/comment/getOneComment/${id}`)
        dispatch({
            type:GETONECOMMENT,
            payload:res.data.commentFound
        })
    } catch (error) {
  handleApiError(error, dispatch);
    }
}

export const updateComment=(id,modifComment)=>async(dispatch)=>{
    try {
        await axios.put(`${apiUrl}/api/comment/updateComment/${id}`,modifComment)
        dispatch(getAllComments())
        
    } catch (error) {
  handleApiError(error, dispatch);
    }
}

export const deleteComment=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`${apiUrl}/api/comment/deleteComment/${id}`)
        dispatch(getAllComments())
        
    } catch (error) {
  handleApiError(error, dispatch);
    }
}

export const getCommentsByUser=()=>async(dispatch)=>{
    try {
        const config={
            headers:{authorized:localStorage.getItem('token')}
        }

        const res= await axios.get(`${apiUrl}/api/comment/getCommentsByUser`, config)
        dispatch({
            type:GETCOMMENTSBYUSER,
            payload:res.data.UserComments
        })
    } catch (error) {
  handleApiError(error, dispatch);
    }
}