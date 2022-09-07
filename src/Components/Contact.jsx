import React from "react";
import { socialMedia } from "../constants";

function Contact() {
  return (
    <div
      id="contact"
      className="bg-bodyBg font-poppins w-screen px-28 py-20 h-full "
    >
      <div className="flex flex-col justify-center items-center">
       
        <div className=" text-fontPurple text-3xl  ">
          <p> Let's Work Together !! </p>
        </div>
        <div className=" font-infoFont text-center  p-8 text-xl md:w-3/5  ">
          <p>
            Don't worry , I hate forms too ! Just shoot me an email by clicking
            the below button and I'll be in touch ASAP ! Although I'm currently
            looking for any new opportunities, my inbox is always open. Whether
            you have a question or just want to say hi, I'll try my best to get
            back to you!
          </p>
        </div>
        <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=VpCqJbPftzwQLcSxGtkxBMdPGHkPftHhtcXDcttMzlBgSFKMLtMdPFhVqmKrTRJNgbKWmtb" target="_blank" className="md:mt-12"><button className="border-4 border-double border-fontPurple rounded-lg p-4 mb-2 text-lg text-fontPurple font-semibold shadow-md shadow-fontPurple"> Send Email </button></a>
        <div className=" md:hidden flex bottom-16 left-14 ">
        {socialMedia.map((media) => (
          <a href={media.links} target="_blank">
           
            {
              <media.icon className=" text-2xl m-8 mt-12  hover:text-fontPurple " />
            }
          </a>
        ))}
      </div>
      </div>
      <div className=" mt-16 md:mt-32  text-center text-fontPurple "> Designed and developed by Riya Bhandari </div>

    </div>
  );
}

export default Contact;



