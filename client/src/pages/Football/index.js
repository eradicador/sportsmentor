import React from "react"
import FBCatch from "../../components/FBCatch"
import background from "../../images/fbbg.jpg"
import "./style.css"
import FBTackle from "../../components/FBTackle"
import FBThrow from "../../components/FBThrow"
export const Football = () => {
    return (
        <div className="football" style={{ backgroundImage: `url(${background})` }}>
            <FBCatch />
            <hr />
            <FBTackle />
            <hr />
            <FBThrow />
            </div>
    )
}

export default Football;