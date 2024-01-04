import React from "react";
import { useState } from "react";
import data from "./MessageList";
import OwnMessage from "./ownMessage";

const FunctionalChat = () => {
  const [people, setPeople] = useState([]);

  useState(() => {
    setPeople(data);
  });
  return (
    <>
      <div className="fixed font-inter top-[15%] left-[50%] w-[49%] min-h-screen overflow-y-hidden ">
        <div className="flex flex-col item-start">
          <div className="flex  items-center justify-start gap-4 p-4">
            <div className="flex flex-row items-center justify-start gap-4">
              <img
                className="w-[1.5rem] h-[1.5rem] rounded-[50%]"
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div>
                <h2 className="text-[#BDBDBD]">Abraham</h2>
                <h4 className="text-green-300 text-[.6rem]">Online</h4>
              </div>
            </div>
          </div>
          <div className="overflow-y-scroll h-[400px]">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h3>12:03</h3>
            <img
              className="w-[98%] h-[5rem] rounded-lg"
              src="/Rectangle-15.svg"
              alt=""
            />
          </div>
          <div className="flex item-center justify-start pt-4 pl-2">
            <h2>2 Bedroom Duplex</h2>
          </div>
          <OwnMessage myMessage={true} />
          <OwnMessage myMessage={false} />
          <OwnMessage myMessage={true} />
          <OwnMessage myMessage={false} />
          <OwnMessage myMessage={false} />
          <OwnMessage myMessage={false} />
          <OwnMessage myMessage={true} />
          <OwnMessage myMessage={false} />
          <OwnMessage myMessage={true} />
          <OwnMessage myMessage={false} />
          </div>
          
        </div>
      </div>
      <div className=" bg-white fixed bottom-0 right-0 p-4  inline-flex items-center justify-center min-w-[50%] ">
        <input
          type="text"
          className="p-2 pl-8 pr-2 bg-[#F8F8F8] rounded-md rounded-r-none bg-transparent border border-r-0 border-[#E0E0E0]  focus:outline-none w-full  placeholder:text-[.9rem] placeholder:text-[#E0E0E0]"
          placeholder="Write your message...."
        />
        <div className="relative inset-y-0 right-0 flex items-center text-[#1A75E0] bg-[#F8F8F8] p-2 rounded-md rounded-l-none border border-l-0 border-[#E0E0E0] pr-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default FunctionalChat;
