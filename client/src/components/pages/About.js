import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { navigate } from "@reach/router";

import "./Skeleton.css";
import "./About.css";
import "./Main.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
class About extends Component {
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


    <h1 class = "page-text">I love
    <strong class="pop1"> listening to music  
    <img class = "info-img popimg1" src='/assets/photos/jayzIcon.png' alt=''/>
    <div class = "caption"> My favorite artist of all time is Jay-Z </div></strong> and 
    <strong class="pop2"> working on CS projects.
    <img class = "info-img popimg2" src='/assets/photos/reactIcon.webp' alt=''/>
    <div class = "caption"> I made this website from <br/>scratch with React! </div> </strong>
       Feel free to open
        
    <a href = "https://drive.google.com/open?id=1TEJquWURrfKDu1yLEGvyQS5FO5KG57sH" class="pop3"> my resume 
    <div class = "caption"> Click to view </div></a> to get a better look at what I do. 
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

export default About;
