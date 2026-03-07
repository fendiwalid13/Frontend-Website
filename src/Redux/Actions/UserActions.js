import { CURRENTUSER, GETALLUSERS, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/UserTypes"
import axios from 'axios'
import { handleError } from "./ErrorActions"

const apiUrl=process.env.REACT_APP_API_URL

export const register=(cordUser,navigate)=>async(dispatch)=>{
   try {
    const res =await axios.post(`${apiUrl}/api/user/SignUp`, cordUser)
    dispatch(
        {
            type:REGISTER,
            payload:res.data
        }
    )
    navigate('/Profil')
   } catch (error) {

    error.response.data.errors.forEach(element => {
        dispatch(handleError(element.msg))
    });

   }
}

export const login=(cordUser,navigate)=>async(dispatch)=>{
   try {
        const res =await axios.post(`${apiUrl}/api/user/SignIn`,cordUser)
    dispatch(
        {
            type:LOGIN,
            payload:res.data
        }
    )
    navigate('/Profil')
   } catch (error) {

      error.response.data.errors.forEach(element => {
        dispatch(handleError(element.msg))
    });
  
   }
}

export const currentUser=()=>async(dispatch)=>{
   try {
        const config={
            headers:{authorized:localStorage.getItem('token')}
        }
        const res =await axios.get(`${apiUrl}/api/user/CurrentUser`,config)
        
    dispatch(
        {
            type:CURRENTUSER,
            payload:res.data
        }
    )

   } catch (error) {
    console.log(error)
   }
}

export const logout=()=>{
 return(
    {
        type:LOGOUT
    }
 )
}
export const updateProfil=(id, modifContact,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`${apiUrl}/api/user/UpdateProfil/${id}`,modifContact)
        dispatch(currentUser())
        navigate('/Profil')
    } catch (error) {
        console.log(error)
    }
}

export const deleteProfil=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`${apiUrl}/api/user/DeleteProfil/${id}`)
        dispatch(logout())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const getAllUsers=()=>async(dispatch)=>{
    try {
        const res=await axios.get(`${apiUrl}/api/user/getAllUsers`)
        dispatch({
            type:GETALLUSERS,
            payload:res.data.users
        })

    } catch (error) {
        console.log(error)
    }
}


export const deleteUser=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`${apiUrl}/api/user/DeleteUser/${id}`)
        dispatch(getAllUsers())

    } catch (error) {
        console.log(error)
    }
}