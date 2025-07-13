import React from "react";
import "../VideoBackground.css";

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/video/2048.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <h1 className="slide-up" style={{animationDelay: "0.2s"}}>This is Mrekk</h1>
        <h1 className="slide-up" style={{animationDelay: "0.5s"}}>He's the GOAT</h1>
        <img className="fast-slide" src="https://mrekk.com/assets/mrekk-osu.png" alt="mrekk" />
      </div>
    </div>
  );
};

export default VideoBackground;
