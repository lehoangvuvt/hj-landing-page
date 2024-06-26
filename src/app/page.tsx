"use client";

import Image from "next/image";
import logo from "/public/images/logo.png";
import homeBanner from "/public/images/home-banner.png";
import "./home.css";

export default function Home() {
  return (
    <div className="w-screen flex flex-col px-[60px] items-center">
      <div className="w-[80%] flex flex-row items-center justify-center">
        <div className="w-[23%] aspect-video relative -mt-[30px]">
          <Image
            src={logo.src}
            fill
            objectFit="contain"
            objectPosition="center"
            alt="logo"
          />
        </div>
      </div>
      <div className="w-[80%] flex flex-row flex-wrap px-[30px]">
        <div className="w-[50%] flex flex-col justify-center gap-[45px]">
          <div className="font-bold text-[3rem] text-[rgba(0,0,0,0.8)]">
            Everything Is <br />
            Figureoutable
          </div>
          <div className="text-[1.3rem] font-semibold text-[rgba(0,0,0,0.7)]">
            <span className="text-[#EC407A]">Take it</span> day by day. <br />
            <span className="text-[#EC407A]">Be grateful</span> for every
            breath. <br />
            <span className="text-[#EC407A]">Life</span> is a collection of{" "}
            <span className="text-[#EC407A]">moments.</span> <br />
          </div>
          <div className="w-full flex flex-row mt-[20px] gap-[15px] items-center">
            <button
              onClick={() => {
                window.open("https://podcast.healing-journey.asia");
              }}
              className={`bg-[#131418] text-[0.9rem] font-medium rounded-[2rem] text-[white] px-[30px] py-[15px] hover:bg-[#EC407A] transition-all`}
            >
              Listen Here
            </button>
            <button
              className={`text-[1rem] font-bold rounded-[2rem] text-[rgba(0,0,0,0.8)] px-[30px] py-[15px] hover:text-[#EC407A] transition-all`}
            >
              Learn more
            </button>
          </div>
        </div>
        <div className="flex-1 flex h-[75vh] relative">
          <Image
            className="home-banner tilt"
            src={homeBanner.src}
            fill
            objectFit="contain"
            objectPosition="center"
            alt="home-banner"
          />
        </div>
      </div>
    </div>
  );
}
