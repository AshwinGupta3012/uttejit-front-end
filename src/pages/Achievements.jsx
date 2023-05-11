import React, { useEffect, useState } from "react";

function Achievements() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    const resp = await fetch("http://localhost:3690/achievements", {
      method: "GET",
    });
    const dataFetched = await resp.json();
    setData(dataFetched);
  };

  let mapped = data.map((singular) => {
    const subKeys = Object.keys(singular).filter((key) =>
      key.startsWith("sub")
    );
    const subListItems = subKeys.map((key) => <li> - {singular[key]}</li>);
    return (
      <div className="w-[700px] h-max  mb-[50px] mt-[40px]">
        <span className="text-[20px] text-teamred-0">{singular.title}</span>
        <ul className="ml-[20px] mt-[10px]">{subListItems}</ul>
      </div>
    );
  });

  return (
    <div className=" bg-blackbutnot-0 w-screen h-max">
      <div className="mb-[20px] text-[50px] font-FormulaReg mt-[50px] ml-[120px]">
        Achievements
      </div>
      <div className="flex h-max w-full flex-col pl-[200px]">{mapped}</div>
    </div>
  );
}

export default Achievements;
