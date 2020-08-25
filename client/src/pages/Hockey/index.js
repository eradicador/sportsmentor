import React from "react"
import Navbar from "../../components/NavBar"
import HKDribble from "../../components/HKDribble"
import HKPass from "../../components/HKPass"
import HKShoot from "../../components/HKShoot"
import HKSkate from "../../components/HKSkate"
import background from "../../images/hockeybg.jpg"
import { Container } from "semantic-ui-react"
import "./style.css"
export const Football = () => {
    return (
        <div className="hockey" style={{ backgroundImage: `url(${background})` }}>
            <HKDribble />
            <br />
            <HKPass />
            <br />
            <HKShoot />
            <br />
            <HKSkate />
            </div>
    )
}

export default Football;