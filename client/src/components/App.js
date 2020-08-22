import React, { useEffect } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { useDispatch } from "react-redux";
import { loadUser } from "../actions/authActions";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import UserDashboard from "../pages/UserDashboard";
import StudyUp from "../pages/StudyUp";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import NoMatch from "../pages/NoMatch";
import Baseball from "../pages/Baseball"
import Basketball from "../pages/Basketball"
import Football from "../pages/Football"
import Hockey from "../pages/Hockey"
import Soccer from "../pages/Soccer"
import Volleyball from "../pages/Volleyball"
import Footer from "./Footer";

export const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Router history={history}>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <PrivateRoute path="/dashboard" component={UserDashboard} />
                    <PrivateRoute path="/studyup" component={StudyUp} />
                    <PrivateRoute path="/baseball" component={Baseball} />
                    <PrivateRoute path="/basketball" component={Basketball} />
                    <PrivateRoute path="/football" component={Football} />
                    <PrivateRoute path="/hockey" component={Hockey} />
                    <PrivateRoute path="/soccer" component={Soccer} />
                    <PrivateRoute path="/volleyball" component={Volleyball} />
                    <Route component={NoMatch} />
                </Switch>
                <Footer />
            </Router>
        </>
    )
}

export default App;
