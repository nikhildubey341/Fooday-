import { useContext } from "react";
import userContext from "../utils/userContext";
import userPic from "../assets/nikhil.jpg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGeeksforgeeks } from "react-icons/si";
import HackerRankLogo from "../assets/HackerRank1.png";


const About = () => {
  const { user, setUser } = useContext(userContext);
  return (
    <div className=" mt-32">
      <div className="flex flex-col-reverse md:flex-row  mx-16 justify-between">
        <div className="flex flex-col w-full  md:w-3/5">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 md:mt-28 mb-7 ">
            <p className="text-4xl md:text-8xl font-bold text-[#3F4255]">
              Nikhil Dubey
            </p>
            <div className="flex  gap-1 md:flex-col justify-center">

              <p className="text-4xl md:text-5xl font-bold text-[#9093A6]">
                MERN | Full Stack Developer:)
              </p>
            </div>
          </div>
          <p className="text-md text-center md:text-left w-[100%] text-[#909090]">
            I'm a FullStack developer who builds large scable appilations from
            scratch.
            <br /> This application is made by me from scratch using ReactJs.
          </p>

          <div className="flex justify-center md:justify-start gap-5 my-4 ">
            <a
              href="https://www.linkedin.com/in/nikhil-dubey-07727a290"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-5xl text-[#0A66C2] hover:cursor-pointer hover:scale-95 duration-200" />
            </a>
            <a
              href="https://github.com/nikhildubey341"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="text-5xl hover:cursor-pointer hover:scale-95 duration-200" />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/nikhildubey341"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGeeksforgeeks className="text-5xl text-green-600 hover:cursor-pointer hover:scale-95 duration-200" />
            </a>
            <a
              href="https://www.hackerrank.com/nikhildubey714"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={HackerRankLogo}
                alt="HackerRank Logo"
                style={{ width: '60px', height: '50px' }}
                className="text-5xl text-red-500 hover:cursor-pointer hover:scale-95 duration-200"
              />

            </a>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <img
            src={userPic}
            className="w-[300px] rounded-full border-black border-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
