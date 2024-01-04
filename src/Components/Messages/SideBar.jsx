import { Link } from "react-router-dom";
import { HomeIcon, chatIcon } from "../../assets";
import { TbLogout2 } from "react-icons/tb";

const SideBar = ({ logOut }) => {
  return (
    <div className="font-inter p-4 flex w-full">
      <div className="flex items-~center w-full justify-between flex-col">
        <div className="containerFirst flex flex-col w-full justify-center items-center">
          <div className="homeLogo flex items-center justify-center mt-4 gap-2">
            <img src={HomeIcon} alt="Home" />
            <h2 className="text-center text-white text-[24px] align-baseline">
              Home
            </h2>
          </div>
          <Link
            to="/messages"
            className="messagesBtn flex items-center justify-start gap-2 w-full p-4 mt-12 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="text-white w-7 h-7 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span className="text-white"> Home </span>
          </Link>

          <Link
            to="/inbox"
            className="messagesBtn flex items-center justify-start gap-2 w-full p-4 mt-6 rounded-lg"
          >
            <img src={chatIcon} alt="message" className="ml-4" />
            <span className="text-white"> Message </span>
          </Link>
        </div>

        <div
          onClick={logOut}
          className="logout cursor-pointer flex items-center justify-center gap-2 w-full mt-12 p-4 rounded-lg bg-white"
        >
          <TbLogout2 className="text-red-500" />
          <span className="text-red-500 text-[1.3rem]"> Logout </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
