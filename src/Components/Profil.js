import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../Redux/Actions/UserActions";
import { useNavigate } from "react-router-dom";
import DeleteProfil from "./DeleteProfil";
import "./Profil.css"
import NavProfil from "./NavProfil";

const Profil = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const user = useSelector((state) => state.UserReducer.user);
  const navigate = useNavigate();

  return (

<div className="dashboard">
  <NavProfil/>
  <main className="main-content">
    <div className="profile-card">
      <div className="profile-header">
                <img src={user.photo} style={{width : '100px'}}  alt="profil"/>
                <h2>{user?.name}</h2>
                <button className="btn" onClick={() => navigate("/UpdateProfil")} >Edit Profil</button>
                <DeleteProfil /> 
      </div>

        </div>
    </main>
</div>
  );
};

export default Profil;