import React from "react";
import { useDispatch } from "react-redux";
import { activeChat } from "../reducer/chatSlice";

const ChatItems = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(activeChat({ ...data, type: "single" }))}
      className="flex items-center gap-4 mb-4"
    >
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={data.friendImg} alt="friend" />
      </div>
      <div>
        <h3 className="name">{data.friendName}</h3>
      </div>
      <button className="ml-auto font-Inter text-sm font-normal text-brand">
        10:30 PM
      </button>
    </div>
  );
};

export default ChatItems;
