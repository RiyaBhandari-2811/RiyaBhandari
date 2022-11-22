import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { SayIt, WebScrapping, GymManagement, InstReelIMG, InstaReelIMG, HackerRank2 } from "../assets/index";
import {FaLaptopCode , FaGraduationCap} from "react-icons/fa"

export const navLinks = [
  {
    id: "1",
    title: "about",
  },
  {
    id: "2",
    title: "project",
  },
  {
    id: "3",
    title: "experience",
  },
  {
    id: "4",
    title: "contact",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: TbBrandGithub,
    links: "https://github.com/RiyaBhandari-2811",
  },
  {
    id: "social-media-2",
    icon: FiLinkedin,
    links: "https://www.linkedin.com/in/riya-bhandari-27406620b",
  },
  {
    id: "social-media-3",
    icon: FiTwitter,
    links: "https://twitter.com/RIYABHANDARI28",
  },
  {
    id: "social-media-4",
    icon: BsInstagram,
    links: "https://www.instagram.com/",
  },
];

export const projectDetails = [
  
  {
    image: InstaReelIMG ,
    title: "Instagram-Reels",
    description:
      "Instagram-Reels helps you to upload videos to share with your friends or anyone . It is basic clone of the instagram Reel section . It has functionalities like sign in , logout , forgot password , like & comment on post , upload video option etc . ",
    techStack: ["NextJs", "Firebase"],
    links: "https://github.com/RiyaBhandari-2811/Instagram_Reels",
  },
  {
    image: HackerRank2 ,
    title: "HackerRank Automation",
    description:
      "This is an automation Based Project . An intuitive code which logs into hackerrank.com and goes on to its algorithm page. Further, writes answers to the questions and submits them successfully.",
    techStack: ["JS-Promises" , "Node.js", "Puppeteer"],
    links: "https://github.com/RiyaBhandari-2811/HackerRankAutomation",
  },
  {
    image: GymManagement ,
    title: "Gym Management System",
    description:
      "It is Desktop Based Application . Which includes features like Admin Login , Add Trainer/Members , Payments etc .",
    techStack: ["CoreJava", "SQL", "JDBC"],
    links: "https://github.com/RiyaBhandari-2811/Gym-Management-System",
  },
  {
    image:  WebScrapping ,
    title: "Github Scrapper",
    description:
      "It is basically a  Web Scrapper .  web scrapper is a technique used to collect content and data from internet web pages .",
    techStack: ["Node.Js", "Cheerio", "PdfKit"],
    links: "https://github.com/RiyaBhandari-2811/GitHub-Scrapper-",
  },
  {
    image:  SayIt ,
    title: "Say It",
    description:
      "Say It is an Google Chrome Extension that help users to convert the entered TEXT to SPEECH .",
    techStack: ["HTML", "CSS", "JS"],
    links:
      "https://github.com/RiyaBhandari-2811/Chrome-Extension/tree/main/Say%20It",
  },
];

export const education = [
  {
    title: "Pune Vidhyarthi Griha's COET",
    branch : "BE-Electronics & Telecommunication Engineering" ,
    timeSpan : "2019 - 2023",
    cgpa : 9 ,
    icon: FaGraduationCap ,
  },
  {
    title: "Pemraj Sarda College",
    branch: "HSC , PCM",
    timeSpan: "2017 - 2019",
    cgpa : 8 ,
    icon: FaGraduationCap ,
  },
  {
    title: "AshokBhau Firodia English medium School",
    branch: "SSC",
    timeSpan: "2014 - 2017",
    cgpa : 8 ,
    icon: FaGraduationCap ,
  }
];

export const works = [
  {
    title : "TCR Innovation",
    role: "Core-Java + SQL Intern",
    timeSpan: "Jan 2022 - Mar 2022",
    icon: FaLaptopCode,
  },
  {
    title : "GirlsScript Summer Of Code",
    role: "Open Source Contributor",
    timeSpan: "Mar 2022 - May 2022",
    icon: FaLaptopCode,
  },
]

