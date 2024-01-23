import { projecstData, skillsData } from "../constants/store";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import GitHubCalendar from 'react-github-calendar';

export const Hero = () => {
  return (
    <div id="hero" className="scroll-mt-32 pb-28 bg-skin-5">
      <div className="px-5 lg:px-24 py-8 text-center  flex flex-col-reverse gap-10 lg:flex-row flex-wrap lg:flex-nowrap lg:text-left p-2">
        <div className="w-full">
          <h3 className="text-skin-4 text-2xl py-4 font-bold">Hey, I'm Ankit</h3>
          <h1 className="text-skin-4 text-6xl py-2 font-bold lg:w-2/3">Full Stack Developer</h1>
          <p className="text-skin-3 py-8 text-2xl">
            Those who can imagine anything, can create the impossible.
          <br />
            ― Alan Turing
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="/Ankit_Patel_Resume.pdf"  download>
            <button  className="px-8 py-2 bg-skin-3 rounded-xl text-skin-3 flex items-center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M6,16 L16,16 L6,16 L6,16 Z M6,12 L18,12 L6,12 L6,12 Z M6,8 L11,8 L6,8 L6,8 Z M14,1 L14,8 L21,8 M3,23 L3,1 L15,1 L21,7 L21,23 L3,23 Z"></path></svg>  &nbsp;
              Resume</button>
              </a>
          </div>
        </div>
        <div className="w-full flex items-center">
          <img src="/img/hero_img.png" alt="hero image" />
        </div>
      </div>
        
    </div>
  )
}


export const About = () => {
  return (
    <div id="about" className="px-5 lg:px-24 py-40 bg-skin-5/30">
      <div className="flex flex-wrap text-center justify-center lg:text-left lg:flex-nowrap lg:justify-between w-full items-center">
        <div className="pb-10 lg:pb-0">
          <img className="rounded-full w-48 h-48" src="/img/ankit_image.jpeg" alt="pic" />
        </div>
        <div className="lg:w-3/5">
          <h3 className="text-skin-4 text-4xl pb-6 font-medium">
            About
          </h3>
          <p className="text-skin-5 text-2xl leading-relaxed">
            A creative, and detailed oriented Full Stack Developer at Haarmk Infotech. Naturally inclined toward science and technology. Looking for a job in a technology-driven organization that can showcase one's skills as well as enhance one's career and knowledge.
          </p>
        </div>
      </div>
    </div>
  )
}


export const Skills = () => {
  
  return (
    <div id="skills" className="px-5 lg:px-24 py-40 bg-skin-5">
      <div >
      <h3 className="text-skin-4 text-4xl pb-6 font-medium text-center">Skills</h3>
      <div className=" flex gap-10 flex-wrap justify-center">
      {
        skillsData.map((e,i)=>
        <div key={i}
        className=" p-2 flex flex-col justify-center bg-white  rounded-xl shadow-lg hover:scale-125 duration-200"
        >
          <div className="">
          <img className="w-20 h-20 text-center" src={e.imageUrl} alt={e.name} />
          </div>
          <div className="text-center pt-2 text-skin-5">
            {e.name}
          </div>

        </div>

        )
      }
      </div>
      </div>

      <div className="text-skin-5" >
      <h3 className="text-skin-4 text-4xl pb-6 mt-20 mb-5  font-medium text-center">GitHub Stats</h3>
      <div className=" flex gap-10 flex-wrap justify-center">
      {/* <div className="w-full"> */}
        <GitHubCalendar username="ankitpatel-akp4" />

      {/* </div> */}
      <div className="flex justify-center items-center gap-10 flex-wrap">
        <p ><img  src="https://github-readme-stats.vercel.app/api/top-langs?username=ankitpatel-akp4&show_icons=true&locale=en&layout=compact" alt="ankitpatel-akp4" /></p>
        <p ><img src="https://github-readme-stats.vercel.app/api?username=ankitpatel-akp4&show_icons=true&locale=en" alt="ankitpatel-akp4" /></p>
        <p ><img  src="https://github-readme-streak-stats.herokuapp.com/?user=ankitpatel-akp4&" alt="ankitpatel-akp4" /></p>
      </div>

      </div>
      </div>
    </div>
  )
}



export const Projects = () => {
  return (
    <div id="projects" className="px-5 lg:px-24 py-40 bg-skin-5/30">
      <h3 className="text-skin-4 text-4xl pb-6 font-medium text-center">Projects</h3>
      <div className="flex gap-10 flex-col">
        {projecstData.map((e,i)=>
        <div key={i} className="flex gap-10 text-skin-5 justify-between shadow-2xl p-5 rounded-xl py-2  flex-col-reverse lg:flex-row lg:flex-nowrap">

          <div className="lg:w-3/5">
            <h3 className="text-skin-4 text-2xl pb-3 font-medium text-left">{e.title}</h3>
            <div className="flex gap-3 flex-col">
              <p>{e.desc}</p>
              <p><strong>Features: </strong> | {e.features.map((el, ii)=><span key={ii}>{el} | </span>)}</p>
              <p><strong>Tech Stack: </strong> | {e.tech.map((el, ii)=><span key={ii}>{el} | </span>)}</p>
              <p><strong>Areas of responsibility: </strong> | {e.responsibilities.map((el, ii)=><span key={ii}>{el} | </span>)}</p>
              <p>{e.projectDetails}</p>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-between flex-col md:flex-row">
                {e.links.map((ee, ii)=>
                <a key={ii} href={ee.url} className="px-10 py-4 rounded-xl hover: m-5 md:m-10 border hover:bg-skin-5/35 text-nowrap text-center shadow" target="_blank"><strong>{ee.text}</strong></a>
                )}
              </div>
              
            </div>
          </div>
          <div className="lg:w-2/5 flex items-center">
            <img className="w-full h-80 rounded-xl" src={e.img} alt="project-img" />
          </div>
        </div>
          
          )}
      </div>
    </div>
  )
}
export const Resume = () => {
  return (
    <div id="resume" className="">
      <div>

      </div>
        Resume
    </div>
  )
}
export const Contact = () => {
  return (
    <div id="contact" className="bg-skin-3 py-20">
      <div className="px-5 lg:px-24">
      <div >
      <h3 className="text-skin-4 text-4xl pb-6 font-medium">Contact</h3>
      </div>
      <div className="text-xl text-skin-3 flex gap-4 flex-col">
        <div><a href="tel:+918756523281" className="flex gap-5 items-center"><FaPhone/> +918756523281</a></div>
        <div><a href="mailto:ankitpatel.akp4@gmail.com" className="flex gap-5 items-center"><IoMail /> ankitpatel.akp4@gmail.com</a></div>
        <div className="flex gap-10 mt-5">
          <a target="blank" href="https://www.linkedin.com/in/ankitpatel-akp4/"><FaLinkedin/></a>
          <a target="blank" href="https://github.com/ankitpatel-akp4/"><FaGithub/></a>
        </div>
      </div>
      </div>
    </div>
  )
}

