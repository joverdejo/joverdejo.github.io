import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { navigate } from "@reach/router";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "909229418073-ajc2c4iilvm40fsk1odf0s77eqgkgmrt.apps.googleusercontent.com";

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {videos: {vidLight:"/assets/videos/VidUniverse.mp4",vidDark: "/assets/videos/VidOcean.mp4"}, 
                  mode:"dark-theme",
                  currentVid: "/assets/videos/VidOcean.mp4"};
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentDidMount() {
    
  }

  changeTheme(){
    (this.state.mode === "dark-theme") ? this.setState({mode: "light-theme", currentVid: this.state.videos.vidLight}) : this.setState({mode: "dark-theme", currentVid: this.state.videos.vidDark});
}

  render() {
    return (
    <div className={this.state.mode}>
   
        {/*
        Add GOOGLE login later
        {this.props.userId ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.props.handleLogout}
            onFailure={(err) => console.log(err)}
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={this.props.handleLogin}
            onFailure={(err) => console.log(err)}
          />
        )} */}
          

    <div className="video-background">

        <div className="video-foreground">

            <video autoPlay loop muted playsInline key= {this.state.currentVid}>
  				<source src= {this.state.currentVid} type="video/mp4"/>
			</video>

            <h1 className="knockout-text">joshua verdejo</h1>
            <h1 className = "detail-text">(hover over&nbsp;<strong className="pop1"> square </strong>&nbsp;to begin, click&nbsp;<strong className="pop1">circle</strong>&nbsp;to change theme)</h1>  
        </div>

    </div>

    <div className="dropdown" style= {{float: "right"}}>
      <button className="dropbtn"></button>
      <div className="dropdown-content">
    <button className = "nav-button" onClick = {() => navigate("/home")}>Home</button>
      </div>
    </div> 

    <button className="theme-btn" onClick= {this.changeTheme}> <span className="theme-type"></span> </button>
</div>

    );
  }
}

export default Skeleton;
