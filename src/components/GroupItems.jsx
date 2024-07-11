import { IoMdMore } from "react-icons/io";

const GroupItems = () => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div>
        <img src="/group_img.png" alt="group_img" />
      </div>
      <div>
        <h3 className="name">Big Kahuna Burger Ltd.</h3>
        <p>love you...</p>
      </div>
      <IoMdMore className="ml-auto cursor-pointer" />
    </div>
  );
};

export default GroupItems;
