import React from "react";
import { Link } from "react-router-dom";
import "./style.css"



function Card(props) {

    return (
      
        <div className="card">
          <Link to={props.sportspage} className="item">
        <img src={props.spImgUrl} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h2 className="card-title">{props.sportsname}</h2>
          <button onClick={()=>props.handleSave(props.id)} className="btn btn-danger">SAVE</button>
        </div>
      </div>
      
    )
}

export default Card;