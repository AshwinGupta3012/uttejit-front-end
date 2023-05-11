import React, { useRef } from "react";
import { ReactComponent as FlagLogo } from "../_svg/FlagLogo.svg";
import { ReactComponent as AchievementsLogo } from "../_svg/achievementsnavIcons.svg";
import { ReactComponent as CarsLogo } from "../_svg/carnavIcons.svg";
import { ReactComponent as TeamLogo } from "../_svg/helmetnavIcons.svg";
import { ReactComponent as GalleryLogo } from "../_svg/VectornavIcons.svg";
import gsap from "gsap";
import { Link } from "react-router-dom";

function NavBar() {
  const carsRef = useRef(null);
  const teamRef = useRef(null);
  const achievementsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const flagRef = useRef(null);

  const handleMouseEnter = (ref, offset) => {
    gsap.to(ref.current, {
      alignSelf: "flex-start",
      duration: 0.2,
      width: offset - 5,
    });
  };

  const handleScroll = () => {
    const section = document.getElementById("target-section");
    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      alignSelf: "flex-end",
      duration: 1,
      width: 0,
    });
  };

  return (
    <>
      <nav className="sticky top-0 w-full h-[100px] flex items-center justify-between px-6 bg-blackbutnot-0 z-10">
        {/* NavBar */}
        <Link to="/">
          <div className="flex items-center cursor-pointer p-2 mr-[22px]">
            {/* Home */}
            <FlagLogo ref={flagRef} className="h-[30px] w-auto" />
          </div>
        </Link>
        <div className="flex justify-center items-center ml-[80px]">
          {/* Mid */}

          {/* Cars */}
          <Link to="/cars">
            <div
              className="flex items-center justify-center text-palewhite-0 mr-[72px] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(carsRef, 30)}
              onMouseLeave={() => handleMouseLeave(carsRef)}
            >
              <CarsLogo className="h-[17px] w-auto mr-[15px]" />
              <div className="flex-col">
                <div className="font-GTFlexaLight text-smoller z-0">CARS</div>
                <div
                  ref={carsRef}
                  className="mt-0 bg-palewhite-0 w-0 h-[1px] z-1"
                />
              </div>
            </div>
          </Link>
          {/* Team */}

          <Link to="/team">
            <div
              className="flex items-center justify-center mr-[72px] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(teamRef, "30")}
              onMouseLeave={() => handleMouseLeave(teamRef)}
            >
              <TeamLogo className="h-[19px] w-auto mr-[15px] text-palewhite-0" />
              <div className="flex-col">
                <div className="font-GTFlexaLight text-smoller z-0 self-center">
                  TEAM
                </div>
                <div
                  ref={teamRef}
                  className="mt-0 bg-palewhite-0 w-0 h-[1px] z-1"
                />
              </div>
            </div>
          </Link>

          <Link to="/achievements">
            {/* Achievements */}
            <div
              className="flex items-center justify-center mr-[72px] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(achievementsRef, 85)}
              onMouseLeave={() => handleMouseLeave(achievementsRef)}
            >
              <AchievementsLogo className="h-[18px] w-auto mr-[15px] text-palewhite-0" />
              <div className="flex-col">
                <div className="font-GTFlexaLight text-smoller z-0 self-center">
                  ACHIEVEMENTS
                </div>
                <div
                  ref={achievementsRef}
                  className="mt-0 bg-palewhite-0 w-0 h-[1px] z-1"
                />
              </div>
            </div>
          </Link>
          <Link to="/gallery">
            {/* Gallery */}
            <div
              className="flex items-center justify-center mr-[66px] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(galleryRef, 50)}
              onMouseLeave={() => handleMouseLeave(galleryRef)}
            >
              <GalleryLogo className="h-[19px] w-auto mr-[15px] text-palewhite-0" />
              <div className="flex-col">
                <div className="font-GTFlexaLight text-smoller z-0 self-center">
                  GALLERY
                </div>
                <div
                  ref={galleryRef}
                  className="mt-0 bg-palewhite-0 w-0 h-[1px] z-1"
                />
              </div>
            </div>
          </Link>
        </div>
        {/* ContactUs */}
        <Link to="/" onClick={handleScroll}>
          <div
            className="flex-col items-center justify-end p-2 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(contactRef, 80)}
            onMouseLeave={() => handleMouseLeave(contactRef)}
          >
            <div className="text-[12px] text-teamred-0 font-GTFlexaReg mt-[1px] contact-us mb-0">
              CONTACT US
            </div>
            <div
              ref={contactRef}
              className="mt-0 bg-teamred-0 w-0 h-[1px] z-1"
            />
          </div>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
