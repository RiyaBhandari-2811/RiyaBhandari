import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { works , education } from "../constants/index.js";

function Experience() {
  return (
    <div
      id="experience"
      className="bg-bodyBg font-poppins w-screen  py-16 px-4 sm:px-24 sm:py-20 h-full "
    >
      <div>
        <div className="flex justify-end ">
          <div className="bg-gray-700 w-12 sm:w-40 h-0.5 mr-6 mt-4"></div>
          <div className=" text-xl sm:text-3xl text-fontPurple tracking-wide font-semibold ">
            Where I've Worked
          </div>
        </div>
        <br/>
        <br/>
        <VerticalTimeline layout={'1-column-left'}>
          {works.map((work) => (
            <VerticalTimelineElement
             
              contentStyle={{ color: "rgba(51, 83, 158, 0.63)" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date={work.timeSpan}
              dateClassName="date text-black "
              position="right"
              iconStyle={{ background: "rgba(191, 184, 218)", zIndex: 1 }}
              icon={<work.icon />}
            >
              <h3 className="vertical-timeline-element-title text-xl font-semibold">
                {work.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lg ">
                {work.role}
              </h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <br/>
        <br/>
        <div className="flex justify-start ml-4">
          <div className="text-3xl text-fontPurple tracking-wide font-semibold ">
            Education
          </div>
          <div className="bg-gray-700 w-40 h-0.5 ml-6 mt-4"></div>
        </div>
        <br/>
        <br/>
        <VerticalTimeline layout={'1-column-left'}>
          {education.map((edu) => (
            <VerticalTimelineElement
              
              contentStyle={{ color: "rgba(51, 83, 158, 0.63)" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date={edu.timeSpan}
              dateClassName="date text-black "
              position="right"
              iconStyle={{ background: "rgba(191, 184, 218)", zIndex: 1 }}
              icon={<edu.icon />}
            >
              <h3 className="vertical-timeline-element-title text-xl font-semibold">
                {edu.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lg ">
                {edu.branch}
              </h4>
              <h6 className="font-semibold ">CGPA : {edu.cgpa}</h6>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </div>
    </div>
  );
}

export default Experience;
