import React from "react"
import Navbar from "../../components/NavBar"
import FBCatch from "../../components/FBCatch"
import FBTackle from "../../components/FBTackle"
import FBThrow from "../../components/FBThrow"
import background from "../../images/fbbg.jpg"
import { Container } from "semantic-ui-react"
import "./style.css"

export const Football = () => {
    return (
        <div className="football" style={{ backgroundImage: `url(${background})` }}>
            <FBCatch />
            <br />
            <FBTackle />
            <br />
            <FBThrow />
            </div>
    )
}

export default Football;