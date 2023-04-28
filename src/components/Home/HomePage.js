import { useSelector } from "react-redux";
import videoHomePage from "../../assets/videos/video-homepage.mp4";
import { useNavigate } from "react-router-dom";
const HomePage = (props) => {
   const isAuthenticated = useSelector(state => state.user.isAuthenticated)

   const navigate = useNavigate()
   return (
      <div className="homepage-container">
         <video autoPlay muted loop>
            <source src={videoHomePage} type="video/mp4" />
         </video>
         <div className="homepage-content">
            <div className="title">There's a better way to ask</div>
            <div className="desc">
               You don't want to make a boring form. And your audience won't
               answer one. Create a typeform instead—and make everyone happy.
            </div>
            <div className="btn-start">
               {isAuthenticated === false ?
                  <button className="btn-getstarted" type="button" onClick={ () => navigate('/login')}>
               Get started - it's free
            </button>
                  :
                  <button className="btn-getstarted" type="button" onClick={ () => navigate('/users')}>
               Doing quiz now
            </button>
}
            </div>
            
         </div>
      </div>
   );
};

export default HomePage;
