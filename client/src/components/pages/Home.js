import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { navigate } from "@reach/router";

import "./Home.css";
import "./Main.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
class Home extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {pics: {kidMe:"/assets/videos/VidUniverse.mp4",vidDark: "/assets/videos/VidOcean.mp4"}, 
                  mode:"dark-theme",
                  currentVid: "/assets/videos/VidOcean.mp4"};
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentDidMount() {
    
  }

  changeTheme(){
    (this.state.mode === "dark-theme") ? this.setState({mode: "light-theme"}) : this.setState({mode: "dark-theme"});
}

  render() {
    return (
    <div className={this.state.mode} style = {{width: "100vw", height: "100vh"}}>          
    <div className = "detail-text">(hover over&nbsp;<strong>bold</strong>&nbsp;words)</div>
    <div className ="page">
    <h1 className = "page-text">My name is 
    
    <strong className="pop1"> Josh Verdejo, 
    <img className = "info-img popimg1" src="/assets/photos/kidme.jpg" alt=''/>
    <div className = "caption"> This is me (as a kid)</div></strong> I am a 
        
    <strong className="pop2"> student at MIT
    <img className = "info-img popimg2" src='/assets/photos/mitacceptance.gif' alt=''/>
    <div className = "caption"> Me getting accepted</div></strong> pursuing 
        
    <strong className="pop3"> Computer Science and Electrical Engineering 
    
    <img className = "info-img popimg3" src='/assets/photos/me.png' alt=''/> 
    <div className = "caption"> This is me (now)</div></strong> degrees.</h1>
    </div>
    

    <div className="dropdown" style={{float: "right"}}>
    <button className="dropbtn"></button>
    <div className="dropdown-content">
    <button className = "nav-button" onClick = {() => navigate("/home")}>Home</button>    
    <button className = "nav-button" onClick = {() => navigate("/about")}>About</button>
    <button className = "nav-button" onClick = {() => navigate("/contact")}>Contact</button>
    <button className = "nav-button" onClick = {() => navigate("/projects")}>Projects</button>
    </div>
    </div>  
    <button className="theme-btn" onClick= {this.changeTheme}> <span className="theme-type"></span> </button>
</div>

    );
  }
}

export default Home;
