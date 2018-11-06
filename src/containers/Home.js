import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 &&
            this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState ({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className= "Home">
                <div className= "lander">
                    <h1>Appnatomy</h1>
                    <p>Estudo prático de anatomia</p>
                </div>
                <div className= "Login">
                    <form onSubmit= {this.handleSubmit}>
                        <FormGroup controlId= "email" bsSize= "large">
                            <ControlLabel>E-mail</ControlLabel>
                            <FormControl
                                autoFocus
                                type= "email"
                                value= {this.state.email}
                                onChange= {this.handleChange}
                                />
                        </FormGroup>
                        <FormGroup controlId= "password" bsSize= "large">
                            <ControlLabel>Senha</ControlLabel>
                            <FormControl
                                value= {this.state.password}
                                onChange= {this.handleChange}
                                type= "password"
                                />
                        </FormGroup>
                        <Button
                            block
                            bsSize= "large"
                            disabled= {!this.validateForm()}
                            type= "submit"
                            >
                            Entrar
                        </Button>
                    </form>
            </div>
            </div>
        );
    }
}
