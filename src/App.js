import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Home from "./components/Home";
import * as pathConstants from "./utils/constants/PathConstants";
import React, {useState, userReducer} from "react";

function App() {
    return (
        <Router>
            <div>
                <Menu/>
                <Route path={pathConstants.loginPath} component={Login}/>
                <Route path={pathConstants.homePath} component={Home}/>
                <Route path={pathConstants.logoutPath} component={Logout}/>
                <Route path={pathConstants.profilePath} component={Home}/>

            </div>
        </Router>
    );
}

export default App;
