import React, { useState, createContext, useContext } from "react";
import TopNavBar from "../Components/TopBar/TopNavBar";
import Messages from "../Components/Messages/Messages";
import EmptyChat from "../Components/Messages/EmptyChat";
import FunctionalChat from "../Components/Messages/FunctionalChat";
import { SideBar } from "../Components/messages";

const Inbox = () => {
  const [chat, setChat] = useState(false);

  const switchFunction = () => {
    setChat(true);
  };
  return (
    <div className="max-w-[1280px] overflow-y-hidden">
      <TopNavBar />
      <div className="sideBar flex w-1/5 h-screen">
        <SideBar />
      </div>

      <Messages switchFunction={switchFunction} />

      {chat ? <FunctionalChat /> : <EmptyChat />}
    </div>
  );
};

export default Inbox;
