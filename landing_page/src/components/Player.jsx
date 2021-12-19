import React from "react";
import ReactPlayer from "react-player";
import "./player.css";
import { useLocation } from "react-router-dom";
function Player() {
  const location = useLocation();
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={location.state.url}
        width="90%"
        height="100%"
        controls={true}
        volume={1}
      />
    </div>
  );
}
export default Player;
