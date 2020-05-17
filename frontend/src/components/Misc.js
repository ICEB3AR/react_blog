import React, {Component} from "react";
class Misc extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <img style={{width:'100vh'}} src={"https://vignette.wikia.nocookie.net/webarebears/images/3/37/Ice_bear.png/revision/latest?cb=20160619204008"}/>
                {this.props.location.search}
            </div>
        );
    }
}
export { Misc }