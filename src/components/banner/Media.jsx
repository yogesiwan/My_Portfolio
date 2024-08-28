import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
          <a href="https://github.com/yogesiwan" target='_blank'>
          <span className="bannerIcon">
            <BsGithub/>
          </span></a>    
          <a href="https://www.linkedin.com/in/yogesh-siwan-114699247/" target='_blank'>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span></a>  
          
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss/>
            </span>
            <span className="bannerIcon">
              <FaBootstrap />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media