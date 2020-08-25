import React from "react"
import BBField from "../../components/BBField"
import BBHit from "../../components/BBHit"
import BBPitch from "../../components/BBPitch"
import background from "../../images/bbbg.png"
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