import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaPython, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiApachespark, SiCplusplus, SiJavascript } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://github.com/chinmay10"><FaGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/chinmay997/"><FaLinkedinIn /></a>
            </span>
            <span className="w-auto p-3 bannerIcon">
            <a href="https://drive.google.com/file/d/1oxpyKElxZ7BKvQSoU4dVJy1w7tgqulGg/view?usp=sharing" text->Resume</a>
            </span>
          </div>
        </div>

        {/* </div> */}
      </div>
  )
}

export default Media