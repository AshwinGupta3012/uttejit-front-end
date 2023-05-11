import subGraphic from "../_svg/SubTitle.svg";
import ContactBG from "../_svg/Contact Us.png";
import CarElem from "./CarElem";
import { useState } from "react";
function Hero() {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(form);
    setForm({
      Name: "",
      Email: "",
      Subject: "",
      Message: "",
    });
    const resp = await fetch("http://localhost:3690/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-Type": "application/json",
      },
    });
    alert("message sent!");
  }
  return (
    <div className="h-[2500px] flex-col w-screen flex items-center">
      <div className="flex m-0 p-0 h-[700px] bg-blackbutnot-0 w-screen">
        <div>
          <div className="flex-col p-0 ml-[180px] mt-[225px] w-max">
            <div className="text-teamred-0 font-FormulaReg text-[80px] leading-[.9] text-right z-10">
              TEAM
            </div>
            <div className="text-teamred-0 font-FormulaBold text-[80px] leading-[.9] text-right z-10">
              UTTEJIT
            </div>
          </div>
          <div className="flex ml-[160px] mt-[70px] justify-end p-[5px]">
            <div className="self-center mr-[40px]">
              <img src={subGraphic} alt="" className="z-0" />
            </div>
            <div className={`font-GTFlexaReg text-[14px] mr-[10px] `}>
              FORMULA STUDENT TEAM
            </div>
          </div>
        </div>
        {/* <CarElem /> */}
      </div>
      <div className="w-[800px] h-[1px] opacity-50 bg-palewhite-0 m-0 "></div>
      <div className="w-[1400px] h-[450px] flex justify-between mt-[130px]">
        <div className="font-GTFlexaReg text-med self-end tracking-[10px] text-palewhite-0">
          about us
        </div>
        <p className="w-[1024px] text-right text-[14px] mt-[10px] font-GTFlexaReg h-max text-palewhite-0">
          <span className="text-teamred-0">TEAM UTTEJIT</span>
          <> </>
          is the official Formula Hybrid team of VIT University, Vellore.
          <br />
          <br />
          The team's roots extend back to 2013, where its groundwork was laid to
          manufacture a high performance vehicle keeping its environmental
          footprint in mind. We initially worked on Go-kart for about two years
          and then later on shifted onto manufacturing an FS car. Four years
          down the line, we emerged as the reigning champions of
          <br />
          Asia's largest Formula student competition -<br />
          the<> </>
          <span className="text-teamred-0">
            ISIE-Hybrid Vehicle Challenge(HVC) in 2016-17
          </span>
          <br />
          and we were also ranked 6th in the
          <br />
          <span className="text-teamred-0">
            Formula Hybrid, USA in 2018-19.
          </span>
          <br />
          <br />
          TEAM UTTEJIT won
          <> </>
          <span className="text-teamred-0">Formula Imperial HVC 2020</span>
          and now is a<> </>
          <span className="text-teamred-0">two-time champion.</span>
          <br />
          <br />
          All of this has been made possible by a group of highly motivated
          students,
          <br />
          consisting of brilliant, diverse and unique members.
          <br />
          Each student within our departments bring a<br />
          defined sense of innovation to our design tables
          <br />
          working tirelessly throughout the season to bring the best output.
          <br />
          We emphasize the need for effective communication
          <br />
          across the team to produce a race car that not only
          <br />
          works but is fast and reliable.
        </p>
      </div>
      <div
        id="target-section"
        className="mt-[555px] w-[1200px] h-auto relative"
      >
        <div className="z-10">
          <div className="mt-[12px] ml-[899px] absolute text-[22px] tracking-[8px] z-10">
            CONTACT US
          </div>
          <img
            src={ContactBG}
            alt="form"
            className="z-0 absolute"
            w-full
            h-full
          ></img>
        </div>
        <div className="z-2 absolute mt-[100px] ml-[60px] text-blackbutnot-0">
          <div className="flex w-[1000px] h-max justify-between">
            <form
              method="post"
              onSubmit={handleSubmit}
              className="text-smol w-[600px] flex"
            >
              <div className="w-2/3">
                <div className="mb-2 flex justify-between">
                  <label className="block text-med text-blackbutnot-0 w-[max]">
                    Name<> </>
                  </label>
                  <input
                    name="Name"
                    onChange={handleForm}
                    value={form.Name}
                    className="bg-transparent active:bg-transparent p-1 pl-2 h-[30px] border-blackbutnot-0 border-[2px] border-opacity-60 rounded-sm w-[300px] text-blackbutnot-0"
                  />
                </div>
                <div className="mb-2 flex justify-between">
                  <label className="block text-med text-blackbutnot-0 w-[max]">
                    Email<> </>
                  </label>
                  <input
                    name="Email"
                    onChange={handleForm}
                    value={form.Email}
                    className="bg-transparent active:bg-transparent pl-2 h-[30px] border-blackbutnot-0 border-[2px] border-opacity-60 rounded-sm mt-1 w-[300px] text-blackbutnot-0"
                  />
                </div>
                <div className="mb-2 flex justify-between">
                  <label className="block  mb-2 text-med text-blackbutnot-0 w-max mr-2">
                    Subject<> </>
                  </label>
                  <input
                    name="Subject"
                    onChange={handleForm}
                    value={form.Subject}
                    className="bg-transparent active:bg-transparent h-[30px] border-blackbutnot-0 border-[2px] border-opacity-60 pl-2 rounded-sm mt-1 w-[300px] text-blackbutnot-0"
                  />
                </div>
                <div className="mb-4 flex justify-between">
                  <label className="block mr-2 w-max mb-2 text-med text-blackbutnot-0">
                    Message<> </>
                  </label>
                  <textarea
                    name="Message"
                    onChange={handleForm}
                    value={form.Message}
                    className="bg-transparent pl-2 border-blackbutnot-0 border-[2px] rounded-sm h-[60px] resize-none w-[300px] p-1 text-smol border-opacity-60 text-blackbutnot-0"
                  />
                </div>
              </div>
              <div className="w-1/3 flex justify-center">
                <input
                  type="submit"
                  className="text-palewhite-0 font-GTFlexaReg text-med h-max w-max self-center p-1 pl-2 pr-2 border-blackbutnot-0 border-[2px] rounded-md bg-blackbutnot-0"
                ></input>
              </div>
            </form>
            <div>
              <p className="text-blackbutnot-0 text-right leading-[1.3]">
                MH-B Block Workshop,
                <br />
                VIT University,
                <br />
                Vellore-632014
              </p>
              <div className="underline text-blackbutnot-0 mt-[40px]">
                teamuttejit.official@gmail.com
              </div>
              <div className="text-blackbutnot-0 mt-[30px]">+91-9574615016</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
