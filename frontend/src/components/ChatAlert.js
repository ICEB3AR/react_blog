import React, {Component} from "react";
import RefreshIcon from "./icon/refresh.png"

class ChatAlert extends Component {


    render() {
        return (
            <div className="AlertContainer">
                <div className="ChatAlert">
                    {this.props.message.message}
                </div>
                {
                    this.props.message.refresh &&
                    <button className="RefreshButton">
                        <img className="RefreshIcon"
                             src={RefreshIcon}/>
                    </button>
                }
            </div>
        );
    }
}

export {ChatAlert};