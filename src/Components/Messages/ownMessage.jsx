import React from "react";

const OwnMessage = ({ myMessage }) => {
  return (
    <div className="">
       <div className="flex flex-col gap-4 px-6 pt-4 ">
      {myMessage ? (
        <div className="flex flex-row items-center justify-start gap-3">
          <img
            className="w-[1.7rem] h-[1.7rem] rounded-[50%]"
            src=" https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
            alt=""
          />
          <div className="p-2 rounded-lg bg-[#EFF7FE]">
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <div className="pt-2 text-[.8rem] text-[#BDBDBD]">
              <h5>1:03PM</h5>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-end gap-3">
          <div className="p-2 rounded-lg bg-red-200">
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <div className="pt-2 text-[.8rem] text-[#BDBDBD]">
              <h5>3:45PM</h5>
            </div>
          </div>

          <img
            className="w-[1.7rem] h-[1.7rem] rounded-[50%]"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      )}
    </div>

    </div>
   
  );
};

export default OwnMessage;
