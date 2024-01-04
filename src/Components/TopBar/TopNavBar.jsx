import React from "react";

const TopNavBar = () => {
  return (
    <>
      <header className="fixed z-10 right-0 w-[80%] h-[15%] flex flex-row items-center justify-between p-3 border-b-2 border-[#E0E0E0] bg-white px-4 ">
        <div className=" h-16 bg-none text-[#E0E0E0] ">
          <div className="relative flex float-left items-center justify-center p-5">
            <div className="relative">
              <input
                type="text"
                className="p-2 pl-8 pr-2 rounded-md rounded-r-none bg-transparent border border-[#E0E0E0]  focus:outline-none w-[80%] shadow-sm placeholder:text-[.9rem] placeholder:text-[#E0E0E0]"
                placeholder="Search for house"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
            <div className="relative left-[-2.8rem]">
              <input
                type="text"
                className="flex p-2 pl-8 pr-2 rounded-md rounded-l-none bg-transparent border border-[#E0E0E0] focus:outline-none w-[55%] placeholder:text-[.9rem] placeholder:text-[#E0E0E0]"
                placeholder="location"
              />
              <div className="absolute inset-y-0 right-[7rem] flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center gap-6">
            <div className="p-4 border-2 border-[#E0E0E0] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
             className="w-6 h-6 text-[#131364]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
              
            </div>
       
            <div className="font-inter flex gap-3 p-3 border-2 rounded-lg border-[#E0E0E0]">
              <img className="w-[1.7rem] h-[1.7rem] rounded-[50%]" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h4>John Doe</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopNavBar;
