import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { navigate } from "@reach/router";

import "./Skeleton.css";
import "./Contact.css";
import "./Main.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
class Contact extends Component {
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

    
    <h1 class = "page-text">
    See a way to  
    <a href = "https://github.com/joverdejo/joverdejo.github.io" class="pop1"> improve this site?  
    <img class = "info-img popimg1" src="/assets/photos/githubicon.webP" alt=''/>
    <div class = "caption"> Click for GitHub</div></a> Want to reach out for
    <a href="https://www.linkedin.com/in/joverdejo/" class="pop2"> business inquiries?
    <img class = "info-img popimg2" src='/assets/photos/linkedinicon.png' alt=''/>
    <div class = "caption">  Click for Linkedin </div></a>  Just want <a href="mailto:joverdejo@gmail.com" class="pop3">
    to say hello? 
    <img class = "info-img popimg3" src='/assets/photos/mailicon.png' alt=''/>
    <div class = "caption"> Click for Email </div></a> Send a message!
    </h1>

    
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

export default Contact;
