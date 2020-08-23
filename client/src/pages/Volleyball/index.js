import React from "react"
import Navbar from "../../components/NavBar"
import VbServing from "../../components/VbServing"
import background from "../../images/vbbg.jpg"
import { Container } from "semantic-ui-react"
import "./style.css"
export const Volleyball = () => {
    return (
        <div className="volleyball" style={{ backgroundImage: `url(${background})` }}>
            <VbServing />
            </div>
    )
}

export default Volleyball;