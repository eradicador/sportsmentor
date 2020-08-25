import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import background from "../../images/homebg.jpg";
// import "./style.css"
import videobg from "../../images/sport_intro.mp4"
import "./style.css"

export const Home = () => {
    // access to the isAuthenticated property from the auth reducer state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const showLoginBtn = () => {
        if (!isAuthenticated) {
            return (
                <Button color="black" animated secondary>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            )
        }
    }

    return (
        <div>
            {/* <div className="row">
                    <div className="col-12">
                        <h1>SportsMentor</h1>
                    </div>

                </div> */}
            <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                }}
                >
                <source src={videobg} type="video/mp4" />
            </video>
           <div className="container" >
               <div  className="row">
                   <div className="col-md-12"  id="home-message">
                       <h1>Welcome to SportsMentor</h1>
                       <p>SportsMentor is your own personal hub for learning and training your athletic skills in different compartments of multiple sports. Get started by checking out our StudyUp page. By clicking the image of the sport you are interested in, you will be able to learn a whole new array of skills and become more and more competitive with each visit!</p>
                   </div>
               </div>
           </div>

        </div>
    )
};

export default Home;
