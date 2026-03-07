
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/Actions/UserActions"
import "./Profil.css"

const NavProfil = () => {
      const dispatch = useDispatch();
     const navigate = useNavigate();
  return (
<>
<aside className="sidebar">
    <div className="logo">MyDashboard</div>

    <ul className="nav-links">
        <li onClick={()=>navigate('/Profil')}>Profil</li>
        <li onClick={()=>navigate('/MyComments')}>My Comments</li>
        <li onClick={()=>navigate('/MyMovies')}>My Movies</li>
        <li className="logout" onClick={()=>{dispatch(logout()); navigate('/')}}>
            Log Out
        </li>
    </ul>
</aside>
</>
  )
}

export default NavProfil
