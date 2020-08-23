import React from "react"
import Navbar from "../../components/NavBar"
import BKDribble from "../../components/BKDribble"
import background from "../../images/hoop.jpg"
import { Container } from "semantic-ui-react"
import "./style.css"
export const Basketball = () => {
    return (
        <div className="basketball" style={{ backgroundImage: `url(${background})` }}>
            <BKDribble />
            </div>
    )
}

export default Basketball;