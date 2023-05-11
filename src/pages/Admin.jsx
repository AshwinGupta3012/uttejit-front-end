import React, { useEffect, useState } from "react";
import Repeater from "../utils/Repeater";

function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    const resp = await fetch("http://localhost:3690/contact", {
      method: "GET",
    });
    const dataFetched = await resp.json();
    setData(dataFetched);
  };

  const handleDel = async (e) => {
    const id = e.target.id;
    const resp = await fetch(`http://localhost:3690/contact/${id}`, {
      method: "DELETE",
    });
    if (resp.ok) {
      fetchData();
    }
  };

  let ContactList = [];
  ContactList = data.map((singular, index) => {
    return (
      <div
        className="ml-[160px]  w-[1400px] h-max flex flex-row justify-start bg-blackbutnot-0 p-[1px] rounded-lg drop-shadow-xl mb-5"
        id={index + 1}
      >
        <div className=" ml-3 h-max w-[50px] p-2 font-FormulaBold text-med ">
          <span>{index + 1}.</span>
        </div>
        <div className=" ml-[30px] w-[1000px]">
          <div className="w-max h-max p-1 mt-2 font-FormulaReg text-teamred-0 mb-1">
            {singular.Name}
          </div>
          <div className="w-max h-max p-1 font-GTFlexaLight tracking-wider text-palewhite-0 underline mb-1">
            {singular.Email}
          </div>
          <div className="w-max h-max p-1  font-GTFlexaReg tracking-wider text-palewhite-0 mb-1">
            {singular.Subject}
          </div>
          <div className="w-max h-[80px] p-1  font-GTFlexaReg tracking-wider text-palewhite-0 mb-2">
            {singular.Message}
          </div>
        </div>
        <div
          onClick={handleDel}
          id={singular._id}
          className="ml-auto w-[50px] h-[50px] m-4 p-2 hover:bg-teamred-0 border-palewhite-0 border-opacity-50w border-2 border-opacity-50 text-med hover:underline flex items-center justify-center"
        >
          del
        </div>
      </div>
    );
  });

  return (
    <div className="w-screen h-screen bg-[#1b1c1e]">
      <div className="flex flex-col">
        <div className="mb-[20px] text-[50px] font-FormulaReg mt-[50px] ml-[160px] text-palewhite-0 w-max">
          Admin Console
        </div>
        {ContactList}
      </div>
    </div>
  );
}
export default Admin;
