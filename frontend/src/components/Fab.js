import React, { Component } from "react";
import "./Fab.css"

import ChatIcon from "./icon/chat.png"
import ChatIconClose from "./icon/close.svg"
import {ChatView} from "./ChatView";

class Fab extends Component{

    constructor(props) {
        super(props);

        this.onFabClick = this.onFabClick.bind(this)
        this.state ={
            fabClicked : false
        }
    }

    onFabClick() {
        this.setState({fabClicked : !this.state.fabClicked})
    }
    render() {
        return (
            <div className={"Fab"}>
                { this.state.fabClicked && <ChatView toggle={this.state.fabClicked} />}
                <button className={"FloatButton"} onClick={this.onFabClick}>
                    <img className={this.state.fabClicked ? "ButtonImageClose" : "ButtonImage"} src={this.state.fabClicked ? ChatIconClose : ChatIcon} alt="chat icon"/>
                </button>
            </div>
        );
    }
}


export { Fab };