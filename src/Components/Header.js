import {
  FlashOn,
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
} from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_icons">
        <div className="header_icon header_icon_active">
          <Home />
          <p>HOME</p>
        </div>
        <div className="header_icon">
          <FlashOn />
          <p>TRENDING</p>
        </div>
        <div className="header_icon">
          <LiveTv />
          <p>VERIFIED</p>
        </div>
        <div className="header_icon">
          <VideoLibrary />
          <p>COLLECTIONS</p>
        </div>
        <div className="header_icon">
          <Search />
          <p>SEARCH</p>
        </div>
        <div className="header_icon">
          <PersonOutline />
          <p>ACCOUNT</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt=""
      />
    </div>
  );
}

export default Header;
