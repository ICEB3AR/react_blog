import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fab } from "./components/Fab.js";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./components/Home.js";
import { Admin } from "./components/Admin.js";
import { Sidebar } from "./components/Sidebar";
import { Misc } from "./components/Misc";
import EmailIcon from "./components/icon/email.png";
import Logo from "./components/icon/logo.png";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarToggle: true,
        }
    }
    toggleSidebar(){
        this.setState({sidebarToggle: !this.state.sidebarToggle});
    }
    render() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <button className="LogoButton">
                        <img className="Logo" src={Logo}/>
                    </button>
                    <div className="Panel">
                        <a href={"http://dev-pengun.tk"} target={"_blank"}>
                            <button className="LinkButton">Todo</button>
                        </a>
                        <Link to={"/"}>
                            <button className="LinkButton">홈</button>
                        </Link>
                        <Link to={"/admin"}>
                            <button className="LinkButton">관리자</button>
                        </Link>
                    </div>

                </header>
                <div style={{justifyContent:'space-between',backgroundColor:'white',width:'100vw',display:'flex',flexDirection:'row'}}>

                    <main>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/admin" component={Admin}/>
                        <Route exact path="/misc" component={Misc}/>
                    </main>
                    { this.state.sidebarToggle && <Sidebar/> }
                </div>
                <footer className="App-footer">
                    ©펭군<br/>
                    <img style={{height:'16px'}} src={EmailIcon}/>   jsw5258@ajou.ac.kr
                </footer>
                <Fab></Fab>
            </Router>
        </div>
    );
  }
}


export default App;