import React from "react";
import data from "./MessageList";
import { useState, useEffect } from "react";

const Messages = ({ switchFunction }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // const getMessages = async () => {
    //   try {
    //     const res = await fetch("/");
    //     const data = await res.json();
    //     if (data.error) {
    //       console.log("check network connections");
    //       return;
    //     }
    //     console.log(data);
    //   } catch (error) {
    //     console.log("something went wrong!!");
    //   }
    // };
    setTimeout(() => {
      setMessages(data);
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return (
      <>
        <div className="absolute font-inter left-[30%] top-[50%] ">
          <h2>Your Messages are Loading....</h2>
        </div>
      </>
    );
  }

  return (
    <section className="fixed font-inter left-[20%] top-[15%] w-[29%] p-4  bg-[#F9FAFB] overflow-y-scroll h-[1cd00%]">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-[2rem]">Inbox</h1>
        <div className="relative">
          <form action="">
            <input
              type="text"
              className="p-2 pl-8 pr-2 rounded-md bg-transparent border border-[#E0E0E0]  focus:pl-10 w-full shadow-sm placeholder:text-[.9rem] placeholder:text-[#E0E0E0] placeholder:pl-[1rem]"
              placeholder="Search for message"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-4">
          {messages

            .filter((item) => item.name.toLowerCase().includes(searchQuery))
            .map((item) => {
              const { id, name, img, message, time } = item;
              if (item.name.toLowerCase().includes(searchQuery)) {
                return (
                  <>
                    <div
                      key={id}
                      className="flex flex-row gap-6 items-center justify-between cursor-pointer"
                      onClick={switchFunction}
                    >
                      <div>
                        <img
                          className="w-[1.7rem] h-[1.7rem] rounded-[50%]"
                          src={img}
                          alt={name}
                        />
                      </div>
                      <div className="flex flex-col text-[.9rem]">
                        <h2>{name}</h2>
                        <p className="text-[.7rem]">{message.length > 10 ? `${message.substring(0, 45)}...` : message}</p>
                      </div>
                      <div className="relative flex flex-col text-right text-[.6rem]">
                        <h2>{time}</h2>
                        <div className="absolute right-0 top-4 w-[1.1rem] flex items-center justify-center h-[1.1rem] rounded-[50%] bg-[#1A75E0]">
                          <h3 className="text-white">2</h3>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}
        </div>
      </div>
    </section>
  );
};

export default Messages;
