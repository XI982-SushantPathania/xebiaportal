import React from "react";
import "./Menu.css";
import img from "./xelogo.png";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Details } from "./Details";
import history from './history';
export class Menu extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        alert("Enter your Details");
        history.push("/Details")
        window.location.reload();
    }
    render() {

        return (
            <div>
                <header className="header">
                    <img src={img} className="logo" alt="logo" />
                    <nav className="navbar">
                        <ul>
                            <li>Adrenalin  |</li>
                            <li>XI-App |</li>
                            <li>Wiki |</li>
                            <li>Blog |</li>
                            <li>Resource |</li>
                            <li>Xebia-Calc |</li>
                            <li>etc.</li>
                        </ul>
                    </nav>
                </header>
                <form class="enter">
                    <input
                        type="button"
                        class="employee"
                        value="Employee"
                        onClick={this.handleSubmit.bind(this)} />
                    <input
                        type="button"
                        class="employee"
                        value="Project"
                    />
                    <input
                        type="button"
                        class="employee"
                        value="Report"
                    />
                </form>>
</div>
        );
    }
}