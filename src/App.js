import { useState } from "react";
import './App.css';

function App() {
  const[count, setCount]=useState(0);

  function increamentHandler(){
    setCount(count+1);
  }

  function decreamentHandler(){
    setCount(count-1);
  }

  function resetHandler(){
    setCount(0);
  }
  return (
    <div className="bg-blue-900 w-[100vw] h-[100vh] flex flex-col 
    justify-center items-center ">
      <div className="text-green-400 text-2xl mb-2">
       Increament & Decreament
      </div>
      <div className="bg-white flex justify-between rounded-sm text-2xl">
          <div className="px-4 text-3xl border-r-2 cursor-pointer select-none " onClick={decreamentHandler}>-</div>
          <div className="px-4 text-2xl">{count}</div>
          <div className="px-4 text-3xl border-l-2 cursor-pointer select-none " onClick={increamentHandler}>+</div>
      </div>
      <button className="mt-4 bg-blue-300 px-4 rounded-sm hover:bg-blue-200 " onClick={resetHandler}>Reset</button>
    </div>
);
}

export default App;
