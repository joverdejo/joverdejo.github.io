import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { navigate } from "@reach/router";
import Home from "./Home.js";
import "./Projects.css";



class Projects extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {pics: {kidMe:"/assets/videos/VidUniverse.mp4",vidDark: "/assets/videos/VidOcean.mp4"}, 
                  mode:"dark-theme container",
                  pic:"/assets/photos/ProjectLightIcon.png"};
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentDidMount() {
    
  }

  changeTheme(){
    (this.state.mode === "dark-theme container") ? this.setState({mode: "light-theme container", pic:"/assets/photos/ProjectDarkIcon.png"}) : this.setState({mode: "dark-theme container", pic:"/assets/photos/ProjectLightIcon.png"});
}

openTab(url){
    window.open(url)
}

  render() {
    return (
      <body className= {this.state.mode} style= {{overflowY: "auto"}}>
        <div className="child a1">
        <div className= "project-overview">
        <img class = "img" src={this.state.pic} alt='Click Here to Learn More'/>
            I believe in creating technologies that feel <strong>intuitive</strong>, creating experiences that challenge users to <strong>interact with technology in different ways</strong>.
            Scroll <strong>down</strong> to learn more about it.
        </div>
        </div>

        <div className="child a2">
        <div className="project-title">The Tavern</div>
        <div className= "project-overview">
        <img class = "img" src="/assets/photos/tavernIcon.png" alt='Click Here to Learn More' onClick={() => this.openTab("https://www.youtube.com/watch?v=eRShngeHPN0")}/>
            I worked on a text based adventure creation engine called The Tavern, which won 1st place at the MIT Weblab Competion, as well as a Facebook Community award!
        </div>
        </div>

        <div className="child a3">    
        <div className="project-title">LASSIE</div>
        <div className= "project-overview">
            <img class = "img" src="/assets/photos/lassieIcon.png" alt='Click Here to Learn More' onClick={() => this.openTab("https://sites.google.com/view/lassiereport")}/>
            I built a WiFi enabled, low-cost search and rescue robot that was controllable from a website, including collision detection, speakers, 
            temperature detection, and a camera.
        </div>
        </div>

        <div className="child a4">
            <div className="project-title">Brain Swarm Interface</div>
        <div className= "project-overview">
            <img class = "img" src="/assets/photos/bciIcon.png" alt='Click Here to Learn More' onClick={() => this.openTab("https://www.youtube.com/playlist?list=PL8CxV3ShMq0Z34DcwOvDCD4o-epDxOfAq")}/>
            I wrote a program that optimized a connection between user thoughts and controlling a robotic swarm!
        </div>
        </div>

        <div className="child a5">
        <div className="project-title">Miscallaneous</div>
        <div className= "project-overview">
            <img class = "img" src="/assets/photos/devIcon.png" alt='Click Here to Learn More' onClick={() => this.openTab("https://github.com/joverdejo/joverdejo.github.io")}/>
            I have worked on a number of miscallaneous projects, in web, app, and game development, as well as graphic design! (Page to be updated)
        </div>
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
      </body>

    );
  }
}

export default Projects;
