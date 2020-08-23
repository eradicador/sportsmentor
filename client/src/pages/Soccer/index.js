import React from "react"
import Navbar from "../../components/NavBar"
import SCDribble from "../../components/SCDribble"
import background from "../../images/scbg.jpg"
import { Container } from "semantic-ui-react"
import "./style.css"
export const Soccer = () => {
    return (
        <div className="soccer" style={{ backgroundImage: `url(${background})` }}>
            <SCDribble />
            </div>
    )
}

export default Soccer;