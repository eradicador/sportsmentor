import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../../utils/API";
import { Header, Message } from "semantic-ui-react";
import Card from "../../components/SportCard"
import "./style.css"

export const StudyUp = () => {

    const { currentUser, isAuthenticated } = useSelector(state => state.auth)
    // setting the components initial state
    const [sportscard, setSportscard] = useState([])

    // load all the merch and store it with setMerch
    useEffect(() => {
        loadSportscard()
    }, [])

    // load all the merch and set ot tp merch
    function loadSportscard() {
        API.getSportscard().then(result => {
            console.log(result)
            setSportscard(result.data)
        })
            .catch(err => console.log(err))
    }
    // save out the card for specific user 
    function handleSave(cardId) {

        console.log("cardId", cardId)
        console.log("currentUser.email", currentUser.email)
        // get userId, need to do still
        let email = currentUser.email;

        API.saveSportscard(email, cardId).then(result => {
            console.log(result)
            // setSportscard(result.data)
        })
            .catch(err => console.log(err))

    }

   

    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Get to Learning! </Header>
                <p>This is a Protected Route</p>

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
                                sportspage={SCItem.sportspage}
                                handleSave={handleSave} />
                                 </div>
                        )})}
                </div>
            </div>
        </>

    )
}

export default StudyUp;
