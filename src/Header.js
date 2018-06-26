import React from "react";
import 'whatwg-fetch'
import {Menu} from "./Menu";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import img from "./xelogo.png";
import history from './history';
import { BrowserRouter } from 'react-router-dom'
export class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            loginCredentials: {
                username: "",
                password: ""
                }}
    }

    handleLogincredentialsChange(e) {
        const { value, name } = e.target;
        this.state.loginCredentials = Object.assign({}, this.state.loginCredentials, { [name]: value })
    }
    
    validate() {
        let isError=false;
        const errors={
            loginCredentials:{
            username: "",
            password: ""
            }
        
        };
        if (this.state.loginCredentials.password.length<4) {
            isError = true;
            alert("LoginCredentials not valid");
            }
               if (isError) {
                this.setState(
                    {
                        ...this.state,
                        ...errors
                    }
                );
            }
           
            return isError;
        };
    


    handleSubmit(event){
        event.preventDefault();
        const err = this.validate();
        if(!err)
            {
        this.postmethod(this.state.loginCredentials).then(response => {
            console.log(response)
            if(response.code==1000){
               history.push("/Menu")
               window.location.reload();
            }
        })
    }
}
             postmethod(logincredentials) {
                 return fetch("http://localhost:8085/login", {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                    'Content-Type': 'application/json',
                    'Proxy-Authorization': 'm88BdZpuDX2VLGWAN6hggQZ32Xb3kulo',
                    'Access-Control-Allow-Origin': '*',
                    'access-control-allow-credentials': true,
                    'Access-Control-Allow-Headers': true
                    },
                 body: JSON.stringify(logincredentials)
                  }).then(response => {
                    return response.json();
                    })
                 
        }
        render() {
        return (
            <div>

                <header className="header">
                    <img src={img} className="logo" alt="logo" />
                    <form className="enter" >
                        <input
                            type="text"
                            name="username"
                            className="number"
                            placeholder="user Id"
                            onChange={this.handleLogincredentialsChange.bind(this)}
                            value={this.state.username}
                        />
                        <input
                            type="password"
                            name="password"
                            className="password"
                            placeholder="Password"
                            onChange={this.handleLogincredentialsChange.bind(this)}
                            value={this.state.password}
                            />
                        <input
                            type="button"
                            className="login"
                            value="Login"
                            onClick={this.handleSubmit.bind(this)}
                            />
                    </form>
                </header>
            </div>
        );
    }

}
