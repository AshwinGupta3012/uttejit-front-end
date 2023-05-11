import React, { useEffect, useState } from "react";
import Repeater from "../utils/Repeater";
import img from "../_images/cars/1.jpg";

function Cars() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    const resp = await fetch("http://localhost:3690/cars", {
      method: "GET",
    });
    const dataFetched = await resp.json();
    setData(dataFetched);
  };

  let CarsList = [];

  CarsList = data.map((singular) => {
    console.log(singular.img);
    console.log(img);
    return (
      <div className="h-[300px] m-[12px] mb-[30px]  w-[1300px]  rounded-[10px] flex justify-between overflow-hidden ">
        <div className="w-[630px] flex h-full justify-center items-center align-center bg-teal-400">
          <img src={singular.img} alt={singular.name}></img>
        </div>
        <div className="mt-[20px] w-full h-full flex flex-col">
          <div className="text-[20px] m-[30px] tracking-[10px] text-teamred-0">
            {singular.name}
          </div>
          <div className="ml-[30px]  mr-[50px] h-[50%]">
            <p>{singular.desc}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className=" bg-blackbutnot-0 w-screen h-max">
      <div className="mb-[20px] text-[50px] font-FormulaReg mt-[50px] ml-[160px]">
        The Cars
      </div>
      <div className="ml-[160px] flex-col flex">{CarsList}</div>
    </div>
  );
}

export default Cars;
