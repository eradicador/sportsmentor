import React from "react";
import "./style.css"

function Card(props) {
    return (
        <div className="card" style={{width: "30%"}}>
        <img src={props.spImgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 class="card-title">{props.sportsname}</h5>
          <a href={props.sportsLink1} class="card-link">Card link</a>
          <a href={props.sportsLink1} class="card-link">Card link</a>
          <a href={props.sportsLink1} class="card-link">Card link</a>
          <a href={props.sportsLink1} class="card-link">Card link</a>
        </div>
      </div>
    )
}

export default Card;