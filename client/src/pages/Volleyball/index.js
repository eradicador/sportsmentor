import React from "react"
import VBBump from "../../components/VBBump"
import VBServe from "../../components/VBServe"
import VBSet from "../../components/VBSet"
import VBSpike from "../../components/VBSpike"
import background from "../../images/vbbg.jpg"
import "./style.css"

export const Volleyball = () => {
    return (
        <div className="volleyball" style={{ backgroundImage: `url(${background})` }}>
            <VBServe />
            <hr />
            <VBBump />
            <hr />
            <VBSet />
            <hr />
            <VBSpike />
            </div>
    )
}

export default Volleyball;