import React from "react";
import ReactPlayer from "react-player";
import "./player.css";
function Player(props) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={props.url}
        width="90%"
        height="100%"
        controls={true}
        volume={1}
     
      />
    </div>
  );
}
export default Player;
