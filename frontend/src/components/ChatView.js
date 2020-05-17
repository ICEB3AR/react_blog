import React, { Component } from "react";
import "./ChatView.css"
import {ChatInputBar} from "./ChatInputBar";
import {ChatMessageView} from "./ChatMessageView";
import {ChatHeaderBar} from "./ChatHeaderBar";

import uuid from "react-uuid";
import socketio from "socket.io-client";
const socket = socketio.connect('http://192.168.1.8:5050');
class ChatView extends Component{

    constructor(props) {
        super(props);
        this.state ={
            name : '1',
            inputMessage : '',
            roomEnterd: false,
            status: false,
            messages : [
                {
                    message : '채팅서버와 연결중입니다...',
                    alert : true,
                    refresh : true,
                },
            ]
        }
        this.handleMessageInputChange = this.handleMessageInputChange.bind(this);
        this.handleEnterPressed = this.handleEnterPressed.bind(this);
    }
    handleMessageInputChange(message) {
        this.setState({inputMessage : message});
    }
    handleEnterPressed() {


        socket.emit('chat-msg',{
            name : this.state.name,
            message: this.state.inputMessage,
        });

        this.setState({inputMessage : ''});
    }
    componentDidMount() {
        if(this.props.toggle == true && !this.state.roomEnterd){
            socket.emit('requestRoom',{
            });
            this.setState({roomEnterd : true});
        }
        socket.on('id', (obj) => {

            this.setState({name: obj.id});

            const messages = (obj.savedMessages);
            console.log(obj.savedMessages);

            this.setState({messages : messages})

        });
        socket.on('chat-msg', (obj) => {
            const messages = this.state.messages;

            var chat = {
                message : obj.message,
                fromMe: (obj.name === this.state.name) ? true : false,
                alert : false,
            }


            console.log(chat);
            messages.push(chat);
            this.setState({messages : messages})
            console.log(this.state.name);
        });
    }

    render() {
        return (
            <div className={"ChatContainer"}>
                <ChatMessageView messages={this.state.messages}/>
                <ChatHeaderBar status={this.state.status}/>

                <div style={{height: '80%'}}></div>
                <ChatInputBar messageInput={this.state.inputMessage}
                              onEnterPressed={this.handleEnterPressed}
                              onMessageInputChange={this.handleMessageInputChange}
                              className={"ChatInputBar"} />
            </div>
        );
    }
}

export { ChatView };


/*
            messages : [
                {
                    message : '안녕하세요',
                    fromMe : true,
                },
                {
                    message : '안녕하세요',
                    fromMe : false,
                },
                {
                    message : '궁금한게 있는데',
                    fromMe : true,
                },
                {
                    message : '물어봐도 되나요??',
                    fromMe : true,
                },
                {
                    message : '네! 편하게 물어보세요!',
                    fromMe : false,
                },
                {
                    message : '어쩌구어쩌구 저쩌구 저쩌구어쩌구어쩌구 저쩌구 저쩌구어쩌구어쩌구 저쩌구 저쩌구',
                    fromMe : true,
                },

            ]
 */