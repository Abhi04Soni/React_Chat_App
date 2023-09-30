import React, { useContext } from "react";
import Messages from "./Messeges";
import Input from "./Input";
import { ChatContext } from "../../context/ChatContext";

const RightSide = () => {
  const { data } = useContext(ChatContext);
  // const { image } = 
  return (
    <div className="chat">
      <div className="chatInfo">
        <img src={data.user.photoURL} alt="" />
        <span>{data.user?.displayName}</span>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default RightSide