import React from "react"
import Navbar from "../../components/NavBar"
import FBCatch from "../../components/FBCatch"
import background from "../../images/fbbg.jpg"
import { Container } from "semantic-ui-react"
import "./style.css"
export const Football = () => {
    return (
        <div className="football" style={{ backgroundImage: `url(${background})` }}>
            <FBCatch />
            </div>
    )
}

export default Football;