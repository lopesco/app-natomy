import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

class App extends Component {
    render() {
        return (
            <div className="App container">

                <Routes />
            </div>
        );
    }
}

export default App;
