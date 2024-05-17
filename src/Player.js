import React from "react";
import "./Player.css";
import Body from "./Body";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "./Player.css";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
