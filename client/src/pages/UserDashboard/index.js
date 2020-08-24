import React, { useEffect, useState } from 'react';
import API from "../../utils/API";
import { Header, Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import axios from "axios"
import Card from "../../components/SportCard"

export const UserDashboard = () => {

    const [sportscard, setSportscard] = useState([])
    
    // useEffect(() => {
    //     loadSportscard()
    // }, [])

    // // load all the merch and set ot tp merch
    // function loadSportscard() {
    //     API.getUsercard().then(result => {
    //         console.log("result.data", result.data)
            
    //         setSportscard(result.data)
    //     })
    //         .catch(err => console.log(err))
    // }
    // access to the currentUser property from the auth reducer state
    const user = useSelector(state => state.auth.currentUser);
    console.log("user", user._id)
    console.log(user)
    useEffect(() => {
        const url = "/api/dashboard/cards/" + user._id
        console.log("url", url)
       
        axios.get(url)
        .then(result => {
            console.log("this is the user", result)
            
            setSportscard(result.data.cards)
        })



    }, [])
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge">Dashboard</Header>
                <p></p>
                <p>Welcome {user ? user.firstname : ""}</p>
            </Message>
            <div className="container">
                <div className="row"> 
               
                        {sportscard.map(SCItem => {
                            return (
                                <div className="col-md-4 col-sm-6">
                             <Card
                                key={SCItem._id}
                                id={SCItem._id}
                                isStudyUp = {false}
                                sportsname={SCItem.cardId.sportsname}
                                spImgUrl={SCItem.cardId.spImgUrl}
                                sportspage={SCItem.cardId.sportspage}
                                spstatus={SCItem.status}
                                />
                                 </div>
                        )})}
                </div>
            </div>
        </>
    )
}

export default UserDashboard;
