import { GoPlus } from "react-icons/go";
import { chatLightIcon } from "../../assets";
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { toast, Toaster } from "react-hot-toast";
import useSaveUser from "../../hook/useSaveUser";

const NoChat = () => {
  const [open, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);
  const onOpenModal = () => setOpen(true);
  const data = true;
  const isLoading = false
  const error = false

  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const {data, isLoading, error} = useSaveUser('/api', formData)
    setOpen(false)
     if(isLoading){
        toast.loading("Adding New Person", {
            position: 'top-center'
        })
     } else if (error){
        toast.error("Unable to add a new person", {
            position: 'top-center'
        })
     } else (
        toast.success("Person has successfully been added", {
            position: 'top-right',
            duration: 5000
        })
     )
  };

  return (
    <div className="font-inter h-full flex items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center w-[308px] h-[229px] p-2">
        <div className="w-full flex items-center justify-center flex-col">
          <img src={chatLightIcon} alt="chatLightIcon" />
          <h3 className="text-[25px] text-[#828282]"> No Chats </h3>
          <p className="text-[16px] text-center text-[#828282]">
            You have not received or send anyone a message.
          </p>
        </div>

        <div className="btnContainer bg-[#0B468C] p-3 flex gap-2 items-center justify-center w-10/12 h-[56px] mt-[35px] rounded-lg">
          <GoPlus className="text-white text-[25px]" />
          <button
            onClick={onOpenModal}
            type="button"
            className="text-white text-[16px]"
          >
            Add a person
          </button>

          <Toaster />

          <Modal open={open} onClose={onCloseModal} center>
            <h2 className="text-[#4F4F4F] text-[20px] mb-[26px]">
              Invite a Person
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col w-[500px]">
              <label> Email Address </label>
              <input
                type="email"
                placeholder="E.g john@gmail.com"
                className="border border-[#E0E0E0] h-[56px] rounded-md pl-3 my-2"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label> Name (Optional) </label>
              <input
                type="text"
                placeholder="E.g John"
                className="border border-[#E0E0E0] h-[56px] rounded-md pl-3 my-2"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <div className="btnCon w-full flex gap-2 mt-4">
                <button
                  type="button"
                  onClick={onCloseModal}
                  className="cancel h-[48px] border border-[#E0E0E0] w-6/12 py-2 px-3 rounded-lg text-[#828282]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="addPerson h-[48px] bg-[#0B468C] text-white w-6/12 py-2 px-3 rounded-lg"
                >
                  Add Person
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default NoChat;
