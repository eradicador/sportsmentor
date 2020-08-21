import React from "react";
import "./style.css"



function Card(props) {
    return (
        <div className="card">
        <img src={props.spImgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.sportsname}</h5>
          <a href={props.sportsLink1} className="card-link">Card link</a>
          <a href={props.sportsLink1} className="card-link">Card link</a>
          <a href={props.sportsLink1} className="card-link">Card link</a>
          <a href={props.sportsLink1} className="card-link">Card link</a>
          <button onClick={()=>props.handleSave(props.id)} className="btn danger">SAVE</button>
        </div>
      </div>
    )
}

export default Card;