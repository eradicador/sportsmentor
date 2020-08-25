
import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import videobg from "../../images/sport_intro.mp4"


const Login = (props) => {
    // access to the isAuthenticated property from the auth reducer state
    const { isAuthenticated } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/studyup")
        }

    })

    const renderFormMessage = () => {
        return <>New to us ? <Link to="/register">Register</Link></>
    }

    const onFormSubmit = (formVal) => {
        dispatch(loginUser(formVal));
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
                Login to your account
                </Header>
            <LoginForm
                renderMessage={renderFormMessage}
                buttonText="Login"
                onSubmit={onFormSubmit}
            />
        </div>
    )
}

export default Login;