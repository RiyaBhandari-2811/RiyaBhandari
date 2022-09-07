import React from "react";
import { Profile } from "../assets";
import { IoMdArrowDropright } from "react-icons/io";

function About() {
  const techs = [
    " Java ",
    "JavaScript",
    "React.Js",
    "Express.Js",
    "Node.Js",
    "SQL",
  ];
  return (
    <div id="about" className="bg-bodyBg font-poppins w-screen px-28 py-20 h-full  ">
      <div className="flex justify-center items-center">
      <div className='bg-gray-700 w-24 h-0.5 mr-6'></div>
        <div className="text-4xl text-fontPurple tracking-wide font-semibold  ">
          About Me
        </div>
        {/* <div className=" mt-2 w-60 h-0.5 bottom-0 bg-gray-700 "></div> */}
        <div className='bg-gray-700 w-24 h-0.5 ml-6'></div>
      </div>

      <div className="flex justify-between p-4 flex-col-reverse md:flex-row flex-wrap">
        <div className=" w-full md:w-2/3 text-xl md:text-2xl font-medium font-infoFont">
          <p>
            <br />
            I'm 21 years old, currently final year engineering student at Pune
            Vidyarthi Griha's COET. I'm mainly engaged in programming & web
            development . <br /> <br /> Keeping abreast with Technologies and
            acquiring new skills is something that interests me . I'm currently
            Looking for design and development opportunities as well as
            freelance projects. <br /> <br /> Here are a few technologies I've
            been working with recently:
          </p>
          <br />
          <div className="grid grid-cols-2">
            {techs.map((tech) => (
              <span>
                <IoMdArrowDropright className="inline text-fontPurple " />
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-fontPurple  w-72 h-72 rounded-lg  hover:bg-none ">
          <img
            src={Profile}
            alt="Profile"
            className="object-fill mix-blend-overlay border-2 border-solid border-fontPurple hover:mix-blend-normal  rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}

export default About;

//

// I’ve spent the past time working as  core java-sql inter & open source contributor at ggsoc’22 and Hacktoberfest ‘21 .

// Keeping abreast with Technologies and acquiring new skills is something that interests me . I’m currently Looking for design and development opportunities as well as freelance projects.

// Here are a few technologies I’ve been working with recently:

//  >  JavaScript                                                                 >  Java
//  > React.Js                                                                        > Node.Js
//   > Express.Js                                                                  >  MongoDb
