import React from 'react'
// import { Button, Icon } from "semantic-ui-react";
// import { useSelector } from "react-redux";
import videobg from "../../images/sport_intro.mp4"

export const Home = () => {
    // access to the isAuthenticated property from the auth reducer state
    // const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    // const showLoginBtn = () => {
    //     if (!isAuthenticated) {
    //         return (
    //             <Button color="black" animated secondary>
    //                 <Button.Content visible>Login</Button.Content>
    //                 <Button.Content hidden>
    //                     <Icon name='arrow right' />
    //                 </Button.Content>
    //             </Button>
    //         )
    //     }
    // }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <p> A website to learn about sports</p>
                </div>

            </div>
            <div>

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
                {/* <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Home</Header>
                <p style={{ marginBottom: "5px" }}>This is a Boiler Plate MERN application with authentication using JSON Web Tokens.</p>
                <p style={{ margin: "5px 0 25px" }}>This APP was design to be used as a starting point for any developer looking to integrate authentication with a MERN application.</p>
                <Link to="/login">
                    {showLoginBtn()}
                </Link>
            </Message> */}

            </div>
        </>
    )
};

export default Home;
