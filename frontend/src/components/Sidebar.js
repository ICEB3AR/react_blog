import React, { Component } from "react";
import "./Sidebar.css"
import HamburgerButton from "./icon/hamburger_button.png"

const menu1 = [
    "웹 개발", [
        "React",
        "Node",
    ],
    "보안" , [
        "Pwnable",
        "Web",
    ],
    "블로그" , []
]
class Sidebar extends Component {

    constructor() {
        super();
    }

    render() {
        const menu = menu1.map((category) => (
            category instanceof Array ?
                <h2>{category}</h2>: <h1>{category}</h1>
        ));
        return (
            <div className="Sidebar">
                {menu}
                <ul>
                    <li>웹개발</li>
                    <li>보안</li>
                </ul>
            </div>
        );
    }
}

export { Sidebar }