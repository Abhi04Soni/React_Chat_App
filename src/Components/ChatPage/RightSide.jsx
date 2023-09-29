import React, { useContext } from "react";
import Cam from "../../Images/img/cam.png";
import Add from "../../Images/img/add.png";
import More from "../../Images/img/more.png";
import Messages from "./Messeges";
import Input from "./Input";
import { ChatContext } from "../../context/ChatContext";

const RightSide = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default RightSide