"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiDjango } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About Me",
  description:
    "I am a passionate Frontend Developer with expertise in React, JavaScript, and Design System. My tech journey began through my elder brother, a backend developer, leading me to explore multiple languages before specializing in frontend development. With an OND in Software Engineering from Aptech, Enugu, I have worked on impactful projects like Customer Segmentation, Bakery Management Systems, and Clinco, focusing on API integrations, component optimization, and state management.I have participated in Learnable 24, ALX, Microsoft Internship, and HNG Internship, continuously refining my skills. As a Genie mentor at Learnable IT Hub, I guide aspiring developers in mastering frontend technologies. Currently, I am enhancing my Design System expertise and deepening my JavaScript proficiency to build scalable, high-performance web applications. Let's connect and create something amazing! 🚀",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Favour Nzeh",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 704 787 2574",
    },
    {
      fieldName: "Expereince",
      fieldValue: "2 years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigeria",
    },
    {
      fieldName: "Email",
      fieldValue: "favournzeh02@gmail.com",
    },
    {
      fieldName: "Freelance & Job Offer",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Igbo",
    },
  ],
};

// experience data
const experience = {
  icon: "/assests/resume/badge.svg",
  title: "My experience",
  description:
    "A software developer with two years expertise in ReactJS, Python, and Node.js, and a passion for building user-focused web applications. I’ve worked on projects involving API integration, component optimization, and customer data visualization, using tools like styled-components and Figma. As a Learnable Front-End alum and part-time mentor at Learnable IT Hub, I enjoy empowering others while continually enhancing my technical skills.",
  items: [
    {
      company: "HNG IT",
      position: "Front-end Intern Developer",
      duration: "Jan 2025 - Present",
    },
    {
      company: "Clinico",
      position: "Decentralized Developer",
      duration: "Jan 2024 - Jul 2024",
    },
    {
      company: "Genesis Tech Hub",
      position: "Front-end Developer",
      duration: "Jan 2022 - Feb 2023",
    },
    {
      company: "Aptech IT",
      position: "Team Lead",
      duration: "Apr 2021 - Nov 2021",
    },
  ],
};

// education data
const education = {
  icon: "/assests/resume/badge.svg",
  title: "My education",
  description:
    "I hold an Ordinary National Diploma (OND) in Software Engineering from Aptech, Enugu, where I gained a strong foundation in computer science principles, programming, and software development methodologies. My education provided me with hands-on experience in full-stack development, database management, and software architecture.",
  items: [
    {
      institute: "Learnable 24 Tech Hub",
      degree: "Certified Front-End Developer",
      duration: "2024",
    },
    {
      institute: "Aptech Education",
      degree: "Diploma In Advanced Software Engineer",
      duration: "2022 - 2024",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I am a results-driven Frontend Developer with expertise in ReactJS, JavaScript, and Design Systems:. My technical skill set is built on a solid foundation of modern web technologies, component-based architecture, and performance optimization. I specialize in:",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JS",
    },
    {
      icon: <FaNodeJs />,
      name: "NODEJS",
    },
    {
      icon: <FaPython />,
      name: "PYTHON",
    },
    {
      icon: <FaReact />,
      name: "REACT",
    },
    {
      icon: <SiTailwindcss />,
      name: "TAILWINDCSS",
    },
    {
      icon: <SiDjango />,
      name: "DJANGO",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
