import React from "react"
import Navbar from "../../components/NavBar"
import HKDribble from "../../components/HKDribble"
import background from "../../images/hockeybg.jpg"
import { Container } from "semantic-ui-react"
import "./style.css"
export const Football = () => {
    return (
        <div className="hockey" style={{ backgroundImage: `url(${background})` }}>
            <HKDribble />
            </div>
    )
}

export default Football;