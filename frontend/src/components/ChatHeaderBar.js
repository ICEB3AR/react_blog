import React, { Component } from "react";
import './ChatHeaderBar.css';
import StatusOn from './icon/status_on.png';
import StatusOff from './icon/status_off.png';

class ChatHeaderBar extends Component{

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"ChatHeaderContainer"}>
                {
                    this.props.status ?
                        <img style={{marginRight: "10px", height: "10px"}} src={StatusOn}/> :
                        <img style={{marginRight: "10px", height: "10px"}} src={StatusOff}/>
                }
                <div className={"ChatHeader"}>
                    채팅
                </div>

            </div>
        );
    }


}
export { ChatHeaderBar };