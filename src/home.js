import React from "react";
import "./style.css";
import { Header } from "./Header.js";
import { Sidebar } from "./Sidebar.js";
import { Mainbody } from "./Mainbody.js";
export class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <Mainbody />
            </div>
        );
    }
}

