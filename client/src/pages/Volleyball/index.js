import React from "react"
import Navbar from "../../components/NavBar"
import VbServing from "../../components/VbServing"
import VBBump from "../../components/VBBump"
import VBSet from "../../components/VBSet"
import VBSpike from "../../components/VBSpike"
import background from "../../images/vbbg.jpg"
import { Container } from "semantic-ui-react"
import "./style.css"


export const Volleyball = () => {
    return (
        <div className="volleyball" style={{ backgroundImage: `url(${background})` }}>
            <VbServing />
            <br />
            <VBBump />
            <br />
            <VBSet />
            <br />
            <VBSpike />
        </div>
    )
}

export default Volleyball;