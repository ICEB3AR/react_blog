import React, {Component} from "react";

class ChatList extends Component{
    constructor(props) {
        super(props);
        this.handleJoinRoom = this.handleJoinRoom.bind(this);
    };


    handleJoinRoom(room){
        this.props.joinHandler(room);
    };

    render() {
        const chatList = this.props.list.map((room)=>(
            <div style={{border: '1px solid #ebebeb'}}>
                <button style={{outline: '0', border: '0'}} onClick={() => this.handleJoinRoom(room)}>
                    <div className={"RoomName"}> {'펭군' + room.substr(room.length-6,6)} </div>
                    <div>채팅 메시지</div>
                </button>
            </div>
        ));
        return (
            <div>
                {chatList}
            </div>
        );

    }
}

export { ChatList }