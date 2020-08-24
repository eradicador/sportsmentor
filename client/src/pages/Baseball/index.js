import React from "react"
import Navbar from "../../components/NavBar"
import BBField from "../../components/BBField"
import BBHit from "../../components/BBHit"
import BBPitch from "../../components/BBPitch"
import background from "../../images/bbbg.png"
import { Container } from "semantic-ui-react"
import "./style.css"

export const Baseball = () => {
    return (
        <div className="baseball" style={{ backgroundImage: `url(${background})` }}>
            <BBField />
            <hr />
            <BBHit />
            <hr />
            <BBPitch />
        </div>
    )
    }

    export default Baseball;