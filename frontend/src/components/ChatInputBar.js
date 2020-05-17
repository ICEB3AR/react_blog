import React, { Component } from "react";
import "./ChatInputBar.css"
import SendIcon from "./icon/send-button.svg"
class ChatInputBar extends Component{

    constructor(props) {
        super(props);
        this.state ={
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePress = this.handlePress.bind(this);
    }
    handleChange(e) {
        this.props.onMessageInputChange(e.target.value);
    }
    handlePress(e) {
        if (e.key === 'Enter') {
            this.props.onEnterPressed();
        }
    }
    render() {
        const messageInput = this.props.messageInput;

        return (
            <div className={"ChatInputContainer"}>
                <input value={messageInput}
                       onChange={this.handleChange}
                       onKeyPress={this.handlePress}
                       className={"ChatInput"}
                       placeholder={"메세지를 입력해주세요."}/>
                <button onClick={this.props.onEnterPressed} className={"SendButton"}>
                    <img className={"SendIcon"}
                         src={SendIcon}
                         alt="send icon"/>
                </button>
            </div>
        );
    }
}


export { ChatInputBar };