import React, { useEffect, useState } from "react";

function Team() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    const resp = await fetch("http://localhost:3690/team", {
      method: "GET",
    });
    const dataFetched = await resp.json();
    setData(dataFetched);
  };

  let members = [];

  members = data.map((singular, index) => {
    return (
      <div className="w-[272px] h-[400px] mr-[32px] mb-[30px] drop-shadow-2xl shadow-teamred-0">
        <div className="w-full h-[320px] bg-red-500">
          <img
            className="h-full w-auto object-cover"
            src={`https://picsum.photos/id/${index + 30}/1920/1080`}
            alt="image"
          ></img>
        </div>
        <div className="flex flex-col p-2 pt-4">
          <span className="mb-2 text-[14px] font-GTFlexaReg">
            {singular.name}
          </span>
          <span className="text-smol font-GTFlexaLight">
            {singular.position}
          </span>
        </div>
      </div>
    );
  });

  console.log(members);

  return (
    <div className="bg-blackbutnot-0 w-screen h-max pb-[100px]">
      <div className=" flex justify-between w-screen h-max">
        <div className="mb-[20px] text-[50px] font-FormulaReg mt-[100px] ml-[115px]">
          The Team
        </div>
        <div className="mr-[125px] w-[1000px] mt-[150px]">
          <p className="text-right">
            We have served the Formula Student community for over 6 years.
            <br />
            <br />
            We are a group of highly motivated students, consisting of
            brilliant, diverse, and unique members. Each student within our
            departments brings a defined sense of innovation to our design
            tables working tirelessly throughout the season to bring the best
            output.
            <br />
            Our team consists of<> </>
            <span className="text-teamred-0">60 engineering students</span>,
            emphasizing the need for effective communication across the team to
            produce a race car that not only works but is fast and reliable.
          </p>
        </div>
      </div>
      <div className="w-screen h-max p-[90px] flex flex-wrap mt-[40px]">
        {members}
      </div>
    </div>
  );
}

export default Team;
