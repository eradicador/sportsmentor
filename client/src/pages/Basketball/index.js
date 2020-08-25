import React from "react"
import Navbar from "../../components/NavBar"
import BKDribble from "../../components/BKDribble"
import BKPass from "../../components/BKPass"
import BKShoot from "../../components/BKShoot"
import background from "../../images/hoop.jpg"
import { Container } from "semantic-ui-react"
import "./style.css"
export const Basketball = () => {
    return (
        <div className="basketball" style={{ backgroundImage: `url(${background})` }}>
            <BKDribble />
            <br />
            <BKPass />
            <br />
            <BKShoot />
            </div>
    )
}

export default Basketball;