import React from "react";
import { IoIosAdd, IoIosClose } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

const categories = [
  {
    id: 1,
    title: "List 1",
    desc: "Some Basic Description",
  },
  {
    id: 2,
    title: "List 2",
    desc: "Some Basic Description",
  },
  {
    id: 3,
    title: "List 3",
    desc: "Some Basic Description",
  },
];

const Sidebar = () => {
  return (
    <div className="h-screen p-7 bg-zinc-800 w-60 fixed left-0 top-0 flex flex-col justify-between items-start">
      <p className="text-3xl font-display uppercase font-bold">TodoList</p>

      <div className="pb-40 w-full">
        <h2 className="mb-10 text-xl">My Categories</h2>
        <ul className="flex flex-col gap-5">
          {categories.map((cat) => (
            <li
              key={cat.id}
              className=" py-3 px-4 bg-zinc-200 text-black rounded-2xl flex justify-between items-center hover:bg-amber-400 transition cursor-pointer"
            >
              {cat.title}
              <IoIosClose size={25} className="hover:text-red-600" />
            </li>
          ))}
          <li className=" py-3 px-4 bg-zinc-700 text-white rounded-2xl flex justify-between items-center hover:bg-amber-400 transition cursor-pointer">
            Add List
            <IoIosAdd size={25} />
          </li>
        </ul>
      </div>

      <button className="flex items-center gap-3 bg-zinc-900 hover:bg-amber-400 hover:*:text-black hover:text-black w-full py-4 rounded-2xl transition px-2 cursor-pointer">
        <CiLogout className="text-amber-400 hover:text-black" size={24} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
