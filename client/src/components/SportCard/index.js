import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./style.css"



function Card(props) {
  const [complete, setComplete] = useState(false)
  function handleComplete() {
    setComplete(!complete)
  }

  let classComplete = "card"; 
  if(complete) {
    classComplete = "card green"
  }
  let button = <button onClick={()=>handleComplete(props.id)} className="btn btn-success">Complete</button>
  
  if(props.isStudyUp) {
    button = <button onClick={()=>props.handleSave(props.id)} className="btn btn-primary">SAVE</button>
  }
    return (
      
        <div className={classComplete}>
          <Link to={props.sportspage} className="item">
        <img src={props.spImgUrl} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h2 className="card-title">{props.sportsname}</h2>
          {button}  
        </div>
      </div>
      
    )
}

export default Card;