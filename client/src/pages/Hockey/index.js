import React from "react"
import background from "../../images/hockeybg.jpg"
import "./style.css"
import HKDribble from "../../components/HKDribble"
import HKPass from "../../components/HKPass"
import HKShoot from "../../components/HKShoot"
import HKSkate from "../../components/HKSkate"

export const Football = () => {
    return (
        <div className="hockey" style={{ backgroundImage: `url(${background})` }}>
            <HKDribble />
            <hr />
            <HKPass />
            <hr />
            <HKShoot />
            <hr />
            <HKSkate />
        </div>
    )
}

export default Football;