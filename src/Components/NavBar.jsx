import React, { useState } from "react";
import { navLinks } from "../constants/index.js";
import { Link as LinkS } from "react-scroll";
import { CgMenuRight, CgClose } from "react-icons/cg";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-2 bg-bodyBg ">
      <div className=" font-logoFont font-semibold text-fontPurple text-3xl">
        <a href="/">RB</a>
      </div>

      <button
        className=" text-4xl mx-2 absolute top-2 right-0 z-50 text-fontPurple "
        onClick={() => setOpen(!open)}
      >
        {open ? <CgClose /> : <CgMenuRight />}
      </button>

      <ul
        className={`font-medium flex flex-col items-center justify-center h-screen content-center capitalize top-0 rounded-tl-md rounded-bl-md absolute z-40 right-0 w-4/6 md:w-1/3 font-navItemFont transition-all ease-in duration-500 ${
          open ? " w-4/6 md:w-1/3  bg-white bg-opacity-40 backdrop-blur-md  " : " w-0 md:w-0 right-0 overflow-y-hidden"
        }`}
      >
        {navLinks.map((nav, id) => (
          <li
            className={`cursor-pointer p-4 text-2xl tracking-wide ${
              open ? " opacity-100 " : " opacity-0 "
            }`}
          >
            <LinkS
              to={`${nav.title}`}
              smooth={true}
              duration={500}
              className=" hover:text-fontPurple duration-500 "
              onClick={() => setOpen(!open)}
            >
              {nav.title}
            </LinkS>
          </li>
        ))}

        {/* <a
          href="RiyaBhandari.pdf"
          download={"Riya_Bhandari.pdf"}
          className="p-2 text-xl"
        >
          <button
            className={`border-4 border-double border-fontPurple rounded px-2  text-fontPurple font-semibold shadow-md shadow-fontPurple ${
              open ? " block " : " hidden "
            } `}
          >
            RESUME
          </button>
        </a> */}
      </ul>
    </nav>
  );
}

export default NavBar;
