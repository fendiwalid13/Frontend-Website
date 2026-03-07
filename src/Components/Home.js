import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate =useNavigate()
  return (
    <div className="page-wrapper">
      <div className="landing-card">

        {/* HERO CONTENT */}
        <div className="landing-content">

          {/* LEFT SIDE */}
          <div className="left">
            <div className="users">
              <div className="avatars">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>277+ Million Happy Customers</p>
            </div>

            <h1>
              Unlimited Movies, <br />
              TV Shows, & More
            </h1>

            <p className="subtitle">
              Unlock the entertainment industry with the leading streaming
              service in the world. Cancel anytime.
            </p>

            <div className="buttons">
              <button nClick={navigate('/Register')} className="primary-btn">
                69 Day Free Trial
              </button>
              <button onClick={navigate('/Register')} className="secondary-btn">
                Create an Account
              </button>
            </div>

            <div className="stats">
              <div>
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div>
                <h3>100+</h3>
                <p>New Additions Daily</p>
              </div>
              <div>
                <h3>8k</h3>
                <p>Highest Quality</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="right">
            <img
              src="https://images.unsplash.com/photo-1608889825205-eebdb9fc5806"
              alt="movie"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;