import React from "react";

const Count_box = () => {
  return (
    <div>
      <div className="mt-3">
        <h1 className="text-2xl font-bold text-[#34485A]">Task Status</h1>
        <div className="max-w-[350px] h-auto md:h-[1080px] p-4 shadow-lg rounded-md bg-white">
          <h2 className="font-semibold">Login Issues - Can't Access Account</h2>
          <button className="text-white bg-green-500 hover:bg-green-300 w-[250px] py-1 rounded-md mt-1">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count_box;
