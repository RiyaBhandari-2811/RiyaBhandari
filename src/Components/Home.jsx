import React from "react";
import { socialMedia } from "../constants/index.js";
// import { Link as LinkR } from "react-router-dom";

function Home() {
  return (
    <div
      id="home"
      className="bg-bodyBg "
      style={{ height: "calc(100vh - 3.3rem" }}
    >
      <div className=" hidden md:block fixed bottom-16 left-14 ">
        {socialMedia.map((media) => (
          <a href={media.links} target="_blank">
           
            {
              <media.icon className="text-4xl mb-6  hover:text-fontPurple " />
            }
          </a>
        ))}
      </div>

      <div
        class=" hidden md:block fixed 
        left-[71px]  w-0.5 h-16 bottom-0 bg-black "
      ></div>

      <div className="flex flex-col justify-center items-center h-3/4 tracking-wide">
        <p className=" text-fontPurple text-4xl  leading-[3.7rem] font-poppins ">
          Hi , my name is
        </p>
        <p className=" text-fontBlack text-7xl  leading-[3.7rem] font-heroFont ">
          Riya Bhandari.
        </p>
        <p className=" text-fontGrey text-2xl  leading-[3.7rem] uppercase font-poppins font-thin ">
          Engineer | Web Developer
        </p>
      </div>

      <p className=" hidden md:block fixed -right-16 rotate-90 top-2/3 text-lg hover:text-fontPurple font-medium font-poppins">
        bhandari28riya@gmail.com
      </p>
      <div class=" hidden md:block fixed right-16  w-0.5 h-16 bottom-0 bg-black "></div>
    </div>
  );
}

export default Home;
