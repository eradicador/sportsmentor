import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { useSelector } from "react-redux";
import API from "../../utils/API";
import { Header, Message } from "semantic-ui-react";
import Card from "../../components/SportCard"
import "./style.css"
import background from "./background.jpg"

export const StudyUp = () => {

    const { currentUser, isAuthenticated } = useSelector(state => state.auth)
    // setting the components initial state
    const [sportscard, setSportscard] = useState([])
    const [showToast, setShowToast] = useState(false)
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
            setShowToast(true)
            
        })
            .catch(err => console.log(err))

    }



    return (

        <div className="body" style={{ backgroundImage: `url(${background})` }}>

            {/* <Message className="message-container" size="huge" secondary="true">
                    <Header size="huge"> Get to Learning! </Header>
                    <p></p>

                </Message> */}
            <div className="container">
                <div className="row">
                    <div className="col-12 library-header">
                        <h1>Sports Library</h1>
                        <div className="toast-message">
                            <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                                <Toast.Header>
                                    <img
                                        src="holder.js/20x20?text=%20"
                                        className="rounded mr-2"
                                        alt=""
                                    />
                                    <strong className="mr-auto">Saved!</strong>
                                </Toast.Header>
                                <Toast.Body>View your saved sports in the dashboard.</Toast.Body>
                            </Toast>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {sportscard.map(SCItem => {
                        return (
                            <div className="col col-md-4 col-sm-6">
                                <Card
                                    key={SCItem._id}
                                    id={SCItem._id}
                                    isStudyUp={true}
                                    sportsname={SCItem.sportsname}
                                    spImgUrl={SCItem.spImgUrl}
                                    sportspage={SCItem.sportspage}
                                    handleSave={handleSave} />
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default StudyUp;
