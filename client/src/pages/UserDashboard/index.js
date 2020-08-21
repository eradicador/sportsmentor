import React, { useEffect, useState } from 'react';
import API from "../../utils/API";
import { Header, Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import axios from "axios"
import Card from "../../components/SportCard"

export const UserDashboard = () => {

    const [sportscard, setSportscard] = useState([])

    useEffect(() => {
        loadSportscard()
    }, [])

    // load all the merch and set ot tp merch
    function loadSportscard() {
        API.getUsercard().then(result => {
            console.log(result)
            setSportscard(result.data)
        })
            .catch(err => console.log(err))
    }
    // access to the currentUser property from the auth reducer state
    const user = useSelector(state => state.auth.currentUser);
    useEffect(() => {
        axios.get("/api/dashboard/cards/" + user._id)
        .then(data => {
            console.log("this is the user", data)
        })



    }, [])
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> User Dashboard </Header>
                <p>This is a Protected Route</p>
                <p>Welcome {user ? user.email : ""}</p>
            </Message>
            <div className="container">
                <div className="row"> 
               
                        {sportscard.map(SCItem => {
                            return (
                                <div className="col-md-4 col-sm-6">
                             <Card
                                key={SCItem._id}
                                id={SCItem._id}
                                sportsname={SCItem.sportsname}
                                spImgUrl={SCItem.spImgUrl}
                                sportsLink1={SCItem.sportsLink1}
                                sportsLink2={SCItem.sportsLink2}
                                sportsLink3={SCItem.sportsLink3}
                                sportsLink4={SCItem.sportsLink4}
                                />
                                 </div>
                        )})}
                </div>
            </div>
        </>
    )
}

export default UserDashboard;
