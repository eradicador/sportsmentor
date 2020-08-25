import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import { Toast } from "react-bootstrap";



function Card(props) {
  const [complete, setComplete] = useState(false)
  const [showToast, setShowToast] = useState(false)
  function handleComplete() {
    setComplete(!complete)
    setShowToast(true)
  }

  let classComplete = "card";
  if (complete) {
    classComplete = "card green"
  }
  let button = <button onClick={() => handleComplete(props.id)} className="btn btn-success">Complete</button>
  

  if (props.isStudyUp) {
    button = <button onClick={() => props.handleSave(props.id)} className="btn btn-primary">SAVE</button>
  }
  return (
    <>
      <div className="toast-message">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Congratulations!</strong>
          </Toast.Header>
          <Toast.Body>You have completed your tutorial.</Toast.Body>
        </Toast>
      </div>
      <div className={classComplete}>
        <Link to={props.sportspage} className="item">
          <img src={props.spImgUrl} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h2 className="card-title">{props.sportsname}</h2>
          {button}
        </div>
      </div>
    </>
  )
}

export default Card;