import React, { useEffect, useState } from 'react';
import { Header, Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import axios from "axios"
import Card from "../../components/SportCard"
import background from "../../images/dashboardbg.jpg"

export const UserDashboard = () => {
    const [sportscard, setSportscard] = useState([])
    const user = useSelector(state => state.auth.currentUser);
    console.log("user", user._id)
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
        <div className="body" style={{ backgroundImage: `url(${background})` }}>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge">Dashboard</Header>
                <p></p>
                <p className="text-success font-weight-bold">Welcome {user ? user.firstname : ""}</p>
            </Message>
            <div className="container">
                <div className="row">

                    {sportscard.map(SCItem => {
                        return (
                            <div className="col-md-4 col-sm-6">
                                <Card
                                    key={SCItem._id}
                                    id={SCItem._id}
                                    isStudyUp={false}
                                    sportsname={SCItem.sportsname}
                                    spImgUrl={SCItem.spImgUrl}
                                    sportspage={SCItem.sportspage}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;
