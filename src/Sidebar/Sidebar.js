import React from "react";

import { IconButton } from "@material-ui/core";

import CreateIcon from "@material-ui/icons/BorderColor";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";

import "./Sidebar.css";

import Test from "../images/test.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerLeft">
          <button className="close" />
          <button className="minimize" />
          <button className="screen" />
        </div>
        <div className="sidebar__headerRight">
          <img src={Test} alt="test" />
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <CreateIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchBar">
          <SearchIcon />
          <span>Search or start new chat</span>
        </div>
      </div>
      <div className="sidebar__chatList"></div>
    </div>
  );
};

export default Sidebar;
