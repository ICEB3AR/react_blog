import React, { Component } from "react";
import socketio from "socket.io-client";
import {ChatList} from "./ChatList";
import {ChatView} from "./ChatView";
import {ChatMessageView} from "./ChatMessageView";
import "./Admin.css";
let socket = null;

class Admin extends Component{

    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            messages: [],
        }
    }

    componentDidMount() {
        socket = socketio.connect('http://192.168.1.8:5050');

        socket.emit('getAllRooms',{

        });

        socket.on('rooms', (obj) => {
            this.setState({rooms:obj});
            console.log(this.state.rooms);
            for(let i of obj){
                console.log(i);
            }
        });
        socket.on('id', (obj) => {
            const messages = this.state.messages;

            var chat = {
                message : obj.message,
                fromMe: (obj.name !== 'admin') ? true : false,
                alert : false,
            }


            console.log(obj);
            messages.push(chat);
            this.setState({messages : obj.savedMessages})
            console.log(this.state.name);
        })
    }
    componentWillUnmount() {
        socket.disconnect();
    }
    joinRoom(room){
        console.log(room);
        socket.emit('joinRoom',{
            room: room
        });
    }
    render() {
        return (
            <div className={"Admin"}>
                <ChatList className={"ChatList"} joinHandler={this.joinRoom} list={this.state.rooms}/>
                <div className={"ChatMessageViewAdmin"} >
                    <ChatMessageView messages={this.state.messages}/>
                </div>

            </div>
        );
    }
}


export { Admin };