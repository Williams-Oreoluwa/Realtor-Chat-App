import TopNavBar from "../Components/TopBar/TopNavBar";
import { NoChat, SideBar } from "../Components/messages";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Messages = () => {
  const navigate = useNavigate();
  const successNotify = () => {
    toast("Log Out Successful", { position: toast.POSITION.TOP_RIGHT });
  };
  const logOut = () => {
    successNotify();
    console.log("log out");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <div>
      <div className="sideBar flex w-1/5 h-screen">
        <SideBar logOut={logOut} />
      </div>
      <TopNavBar />
      <div className="absolute top-[30%] left-[18%] messageCon flex w-4/5 flex-col overflow-x-hidden">
        <NoChat />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Messages;
