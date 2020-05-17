import React, { Component } from "react";
import './ChatMessageView.css'
import {ChatMessageBubble} from "./ChatMessageBubble";
import {ChatAlert} from "./ChatAlert";

class ChatMessageView extends Component{

    constructor(props) {
        super(props);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }


    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const messageList = this.props.messages.map(
          message => (
              message.alert ?
                  <ChatAlert message={message}/> : <ChatMessageBubble fromMe={message.fromMe} chatMessage={message.message}/>
              )
        );

        return (
            <div className={"MessageView"}>
                <div style={{height: '10%'}}></div>
                {messageList}
                <div style={{ float:"left", clear: "both" , height: "10%" }}
                     ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        );
    }


}

export { ChatMessageView };

/*
                <ChatMessageBubble fromMe={true} chatMessage={"안녕하세요!"}></ChatMessageBubble>
                <ChatMessageBubble fromMe={false} chatMessage={"안녕하세요 ㅎ"}></ChatMessageBubble>
                <ChatMessageBubble fromMe={true} chatMessage={'궁금한게 있는데'}></ChatMessageBubble>
                <ChatMessageBubble fromMe={true} chatMessage={'물어봐도 되나요??'}></ChatMessageBubble>
                <ChatMessageBubble fromMe={false} chatMessage={"네! 편하게 물어보세요 ㅎㅎ"}></ChatMessageBubble>
                <ChatMessageBubble fromMe={true} chatMessage={'어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 '}></ChatMessageBubble>
                <ChatMessageBubble fromMe={true} chatMessage={'어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 '}></ChatMessageBubble>
                <ChatMessageBubble fromMe={true} chatMessage={'어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 '}></ChatMessageBubble>
                <ChatMessageBubble fromMe={false} chatMessage={'아 그거는 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 '}></ChatMessageBubble>
                <ChatMessageBubble fromMe={false} chatMessage={'도움이 되었으면 좋겠네요 ㅎ'}></ChatMessageBubble>
                <ChatMessageBubble fromMe={true} chatMessage={'감사합니다!!'}></ChatMessageBubble>
 */