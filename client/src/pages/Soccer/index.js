import React from "react"
import SCDribble from "../../components/SCDribble"
import SCPass from "../../components/SCPass"
import SCShoot from "../../components/SCShoot"
import background from "../../images/scbg.jpg"
import "./style.css"
export const Soccer = () => {
    return (
        <div className="soccer" style={{ backgroundImage: `url(${background})` }}>
            <SCDribble />
            <hr />
            <SCPass />
            <hr />
            <SCShoot />
            </div>
    )
}

export default Soccer;