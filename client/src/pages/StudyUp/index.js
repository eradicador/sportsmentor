import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Header, Message } from "semantic-ui-react";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/SportCard"


export const StudyUp = () => {
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
    
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Get to Learning! </Header>
                <p>This is a Protected Route</p>
               
            </Message>
            <Container fluid>
            <Row>
                <Col size="md-6">
                    {sportscard.map(SCItem => {
                        return <Card
                            sportsname={SCItem.name}
                            spImgUrl={SCItem.spImgUrl}
                            sportsLink1={SCItem.sportsLink1}
                            sportsLink2={SCItem.sportsLink2}
                            sportsLink3={SCItem.sportsLink3}
                            sportsLink4={SCItem.sportsLink4} />
                    })}
                 
            </Col>
        </Row>
    </Container>
        </>
    )
}

export default StudyUp;
