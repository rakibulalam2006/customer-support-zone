import React from "react";
import { toast } from "react-toastify";

const History = ({ history,data, setData, resolvedTask,setResolvedTask }) => {

  const handleComplete =(title) =>{
    const currentData = data.map((item)=>{
      if(item.title === title){
        toast("Completed!")
        return {...item,status:"Resolved"}
        
      }
      return item;
    })
    setData(currentData)
    setResolvedTask(prev =>[...prev,title])
  }

  return (
    <div className="mt-3">
      <h1 className="text-2xl font-bold text-[#34485A]">Task Status</h1>
      {history.map((item, i) => (
        <div
          key={i}
          className="max-w-[350px] h-auto p-4 shadow-lg rounded-md bg-white mt-1"
        >
          <h2 className="font-semibold">{item.title}</h2>
          <button onClick={() =>handleComplete(item.title)} className="text-white bg-green-500 hover:bg-green-300 w-[250px] py-1 rounded-md mt-1">
            Complete
          </button>
        </div>
      ))}
      <div className="mt-2">
        <h1 className="text-2xl font-bold text-[#34485A]">Resolved Task</h1>
        {resolvedTask.map((task,i)=>(
          <div key={i}
          className="max-w-[350px] h-auto p-4 shadow-lg rounded-md bg-white mt-1">
            <h2 className="font-semibold">{task}</h2>
            <p className="bg-green-100 p-1 rounded-md">Completed</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default History;
