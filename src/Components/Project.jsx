import React from "react";
import { projectDetails } from "../constants/index.js";
import { TbBrandGithub } from "react-icons/tb" ;


function Project() {
  return (
    <div
      id="project"
      className="bg-bodyBg font-poppins w-screen px-28 py-20 h-full "
    >
      <div className="flex justify-center items-center mb-10">
        <div className="bg-gray-700 w-20 h-0.5 mr-4 "></div>
        <div className="text-2xl text-fontPurple font-semibold mr-1 ">
          NoteWorthy Projects
        </div>
        <div className="bg-gray-700 w-20 h-0.5 "></div>
      </div>

      <div>
        {projectDetails.map((project) => {
          return(<div className="flex justify-between flex-wrap md:flex-nowrap even:flex-row-reverse p-2 ">
            <div className=" w-[250%] h-[250%] md:w-1/3 md:h-1/3  bg-fontPurple rounded-xl m-4 ">
              <img
                src={project.image}
                alt="projectImage"
                className="object-fill rounded-xl mix-blend-overlay hover:mix-blend-normal  "
              />
            </div>
            <div className="flex flex-col  justify-center items-start m-2">
              <p className="text-4xl font-montserrat " >{project.title}</p>
              <p className="my-4 " >{project.description}</p>
              <p  >{project.techStack.map((tech) => <span className="m-2 text-lg font-semibold text-fontPurple">{tech}</span>)}</p>
              <a href={project.links} className=" hover:text-fontPurple cursor-pointer text-3xl m-2" >{<TbBrandGithub />}</a>
            </div>
          </div>);
        })}
      </div>
    </div>
  );
}

export default Project;
