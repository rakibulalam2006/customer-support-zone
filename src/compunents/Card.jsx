import React from "react";
import { toast } from "react-toastify";

const Card = ({ issue, data, setData, setHistory }) => {
  //   console.log(issue);

  const handleClick = () => {
    console.log("Card clicked");
    

    const currentData = data.map((elem) => {
      if(elem.id === issue.id){
        toast("In progress!");
        return {...elem,status:"In Progress",}
      }
      return elem;
    });
    setData(currentData);

    setHistory((prev) => [
      ...prev,{
      title:issue.title,
      status:
      issue.status === "In Progress"}
    ]);
  };

  return (
    <div>
      <div className="p-4 rounded-lg shadow-md bg-white" onClick={handleClick}>
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">{issue.title}</h2>
          <button
            className={`font-semibold py-1 px-2 shadow rounded mr-2 ${
              issue.status == "In Progress"
                ? "text-yellow-500 bg-yellow-100"
                : "text-green-500 bg-green-100"
            }`}
          >
            <i class="fa-solid fa-circle"></i>
            <span> </span>
            {issue.status}
          </button>
        </div>
        <p className="text-gray-500 text-lg mt-[6px]">{issue.description}</p>
        <div className="flex justify-between mt-[6px]">
          <div className="flex gap-5">
            <span className="text-[#627382]">#{issue.id}</span>
            <span
              className={`font-semibold py-1 px-2 shadow rounded mr-2 ${
                issue.priority == "High"
                  ? "text-red-500 bg-red-100"
                  : issue.priority == "Medium"
                  ? "text-yellow-500 bg-yellow-100"
                  : "text-green-500 bg-green-100"
              }`}
            >
              {issue.priority}
            </span>
          </div>
          <div className="text-[#627382] text-[14px] flex gap-2">
            <span>{issue.customer}</span>
            <span>{issue.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

