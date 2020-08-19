import React from 'react';
import { Header, Message } from "semantic-ui-react";
import Card from "../../components/SportCard"


export const StudyUp = () => {
    return (
        <>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Get to Learning! </Header>
                <p>This is a Protected Route</p>
               
            </Message>
            <Card></Card>
        </>
    )
}

export default StudyUp;
