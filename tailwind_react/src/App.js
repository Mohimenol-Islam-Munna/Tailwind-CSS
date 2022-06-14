import React, { useState } from "react";
import "./App.css";

function App() {
  const [leftNavigationWidth, setLeftNavigationWidth] = useState(0);

  return (
    <>
      <div className="bg-green-500 p-8">
        <h2 className="text-center text-white font-bold text-2xl">
          React Tailwind
        </h2>
      </div>

      {/* clip path  */}
      <div className="w-[30%] mt-5 mx-auto rounded-lg p-20 bg-red-300 before:bg-indigo-400 before:rounded-lg custom_clip_path">
        <h2 className="text-center text-white text-2xl titl">clip path to</h2>
      </div>

      <div className="w-[30%] mt-5 mx-auto rounded-lg p-2 py-20 bg-green-300 before:bg-indigo-400 before:rounded-lg custom_clip_path2">
        <p className="text-center text-white text-2xl titl">
          clip path with extended
        </p>
      </div>

      {/* dropdown button  */}
      <div className="w-52 mt-10 mb-60 mx-auto relative group border">
        <button className="w-full bg-indigo-700 p-5 text-white">
          Dropdown
        </button>
        <div className="w-full bg-green-600 hidden absolute group-hover:block">
          <a
            href=""
            className="block border-b border-red-400 p-2 hover:bg-gray-400"
          >
            Home
          </a>
          <a
            href=""
            className="block border-b border-red-400 p-2 hover:bg-gray-400"
          >
            About
          </a>
          <a
            href=""
            className="block border-b border-red-400 p-2 hover:bg-gray-400"
          >
            Content
          </a>
          <a
            href=""
            className="block border-b border-red-400 p-2 hover:bg-gray-400"
          >
            Skills
          </a>
          <a
            href=""
            className="block border-b border-red-400 p-2 hover:bg-gray-400"
          >
            Portfolio
          </a>
        </div>
      </div>

      {/* sidebar navigation  */}
      <div>
        {/* <div
          id="left_navigation"
          className={`h-screen w-[${leftNavigationWidth}%] bg-gray-900 fixed top-0 left-0 overflow-hidden z-50 box-border transition-[width]`}
        >
          <a
            href=""
            className="block text-right border-b border-red-400 p-2 hover:bg-gray-400 text-white"
          >
            <span
              className="bg-red-500 w-5 h-5 p-2 rounded-full text-white  hover:bg-white hover:text-red-500 border"
              onClick={(e) => {
                e.preventDefault();
                setLeftNavigationWidth(0);
              }}
            >
              X
            </span>
          </a>
          <a
            href=""
            className="block border-b border-red-400 p-2 hover:bg-gray-400 text-white"
          >
            Home
          </a>
          <a
            href=""
            className="block border-b border-red-400 p-2 hover:bg-gray-400 text-white"
          >
            About
          </a>
          <a
            href=""
            className="block border-b border-red-400 p-2 hover:bg-gray-400 text-white"
          >
            Content
          </a>
          <a
            href=""
            className="block border-b border-red-400 p-2 hover:bg-gray-400 text-white"
          >
            Skills
          </a>
          <a
            href=""
            className="block border-b border-red-400 p-2 hover:bg-gray-400 text-white"
          >
            Portfolio
          </a>
        </div> */}

        <div className="w-[25%] mx-auto border-2 space-y-2 mb-48">
          <div>
            <button
              className="w-full p-2 bg-red-400"
              onClick={() => {
                setLeftNavigationWidth(20);
              }}
            >
              SideBar Navigation left
            </button>
          </div>
          <div>
            <button className="w-full p-2 bg-red-400">
              SideBar Navigation right
            </button>
          </div>
          <div>
            <button className="w-full p-2 bg-red-400">
              SideBar Navigation bottom
            </button>
          </div>
          <div>
            <button className="w-full p-2 bg-red-400">
              SideBar Navigation top
            </button>
          </div>
        </div>

        <div className="w-[80%] mx-auto mb-20 border border-red-900">
          <h2>Tailwind Flex</h2>
          <div className="my-10 flex bg-slate-200 py-5">
            <div className="border border-red-400">Left</div>
            <div className="border border-green-700 text-center w-52 basis-0">
              Center
            </div>
            <div className="border border-blue-700">Right</div>
          </div>
        </div>

        {/* custom checkout  */}
        <div className="w-[80%] mx-auto my-20 border">
          <h2>Custom Checkbox</h2>
          <div className="inline-block w-32 my-10 p-5 bg-slate-200 border-4 border-green-900 text-center">
            <input
              type="checkbox"
              name="check"
              id="check"
              className="peer hidden"
            />
            <label
              htmlFor="check"
              className="group block w-full h-[35px] border-2 border-yellow-900 rounded-full ring-4 before:content-[''] before:bg-green-400 relative z-10 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-full before:-z-10 before:translate-x-[-50%] overflow-hidden peer-checked:before:translate-x-[50%]"
            ></label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
