
import React from 'react';
import { Header } from 'semantic-ui-react';
import RegisterForm from "../../components/RegisterForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/authActions";
import videobg from "../../images/sport_intro.mp4"


const Register = () => {

    const dispatch = useDispatch();

    const renderFormMessage = () => {
        return <>Already Registered ? <Link to="/login">Login</Link></>
    }

    const onFormSubmit = (formVal) => {
        dispatch(registerUser(formVal));
    }

    return (

        <div className="form-container">
            <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                }}
                >
                <source src={videobg} type="video/mp4" />
            </video>
            <Header as='h2' secondary="true" textAlign='center'>
                Register
            </Header>
            <RegisterForm
                renderMessage={renderFormMessage}
                buttonText="Register"
                onSubmit={onFormSubmit}
            />
        </div>
    )
}

export default Register;