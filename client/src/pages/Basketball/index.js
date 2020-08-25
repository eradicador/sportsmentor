import React from "react"
import BKDribble from "../../components/BKDribble"
import BKPass from "../../components/BKPass"
import BKShoot from "../../components/BKShoot"
import background from "../../images/hoop.jpg"
import "./style.css"
export const Basketball = () => {
    return (
        <div className="basketball" style={{ backgroundImage: `url(${background})` }}>
            <BKDribble />
            <hr />
            <BKPass />
            <hr />
            <BKShoot />
            </div>
    )
}

export default Basketball;