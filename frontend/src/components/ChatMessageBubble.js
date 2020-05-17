import React, {Component} from  "react";
import "./ChatMessageBubble.css"
class ChatMessageBubble extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={"ChatBubbleContainer"}>
                <div className={this.props.fromMe ? "ChatBubbleFromMe" : "ChatBubbleFromOther"}>
                    {this.props.chatMessage}
                </div>
            </div>
        );
    }

}
export {ChatMessageBubble}
