import React, { useState } from "react";

import { IconButton } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import MoodIcon from "@material-ui/icons/Mood";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicNoneIcon from "@material-ui/icons/MicNone";
import SendIcon from "@material-ui/icons/Send";

import "./Chat.css";

import Test from "../images/test.jpg";

const Chat = () => {
  const [inputMessage, setInputMessage] = useState("");

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <img src={Test} alt="test" />
          <div className="chat__headerLeft-chatInfo">
            <span className="chatName">Chatty Chat</span>
            <span className="chatInfo">Jenna, Jennifer, Chris, You</span>
          </div>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__chatroom">
        <div className="chat__chatroom-messages">
          <div className="message received">
            <span className="text">{"hello"}</span>
            <span className="time">{"4:16pm"}</span>
          </div>
          <div className="message sent">
            <span className="text">{"hey!"}</span>
            <span className="time">{"4:16pm"}</span>
          </div>
        </div>
        <form className="chat__chatroom-sendMessages">
          <div className="message_functionalityLeft">
            <MoodIcon />
            <AttachFileIcon />
          </div>
            <div className="inputWrapper">
              <input
                type="text"
                placeholder="Type a message"
                onChange={e => setInputMessage(e.target.value)}
              />
            </div>
            <div className="message_functionalityRight">
              {inputMessage ? <SendIcon /> : <MicNoneIcon />}
            </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
