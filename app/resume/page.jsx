"use client";

import {
  FaHtml5,
  FaAws,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiPostgresql,
  SiDjango,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";

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
    "I am a Software Engineer with 3+ years of working experience in building user-centric web applications with Python/Django, Next.js, Node.js, and TypeScript. My tech journey began through my elder brother, a backend developer, leading me to explore multiple languages before specializing in frontend development. With an Higher Education Diploma in Software Engineering from Aptech, Enugu, I have worked on impactful projects like Customer Segmentation, Bakery Management Systems, and Bellevile Dental, focusing on API integrations, component optimization, and state management.I have participated in Learnable 24, ALX, Microsoft Internship, and HNG Internship, continuously refining my skills. As a Genie mentor at Learnable IT Hub, I guide aspiring developers in their tech journeys. I do like playing football(soccer), watching animes. And as a Developer, I am a business-minded individual, always seeking to create innovative business solutions that can be the next million-dollar tech business.",
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
      fieldName: "Experience",
      fieldValue: "3+ years",
    },
    {
      fieldName: "Location",
      fieldValue: "Lagos / Enugu, Nigeria",
    },
    {
      fieldName: "Email",
      fieldValue: "favournzeh02@gmail.com",
    },
    {
      fieldName: "Freelance",
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
    "As a Software Engineer, I specialize in architecting scalable React/TypeScript UI components, developing full-stack features with Django and Next.js, also handling cloud infrastructure like AWS and Google Cloud, working with SQL queries tool like PostgreSQL and MYSQL and leading front-end teams. My recent work StockMates: AI-powered real-time stock dashboard (Next.js, Inngest, Finnhub, MongoDB, BetterAuth) platform, delivering structured front-end curriculums to mentor aspiring developers, and optimizing system reliability across diverse tech stacks.",
  items: [
    {
      company: "MilesHome Real Estate",
      position: "Full-Stack Engineer",
      duration: "Feb 2026 - May 2026",
    },
    {
      company: "(UAACAI) International",
      position: "Full-Stack Engineer",
      duration: "Aug 2025 - Nov 2025",
    },
    {
      company: "Learnable 25 (Genesis Tech Hub)",
      position: "Front-End Mentor",
      duration: "Jan 2025 - June 2025",
    },
    {
      company: "Bellevile Dental",
      position: "Full Stack Web Developer",
      duration: "March 2024 - May 2024",
    },
    {
      company: "Genesis Tech Hub(Learnable 24)",
      position: "Intern Team Lead Front-End Web Developer",
      duration: "Sept 2023 - June 2024",
    },
  ],
};

// education data
const education = {
  icon: "/assests/resume/badge.svg",
  title: "My education",
  description:
    "I hold a Diploma in Software Engineering alongside specialized certifications in front-end development and Mentorship. My educational background laid a strong foundation in full-stack architecture, programming principles, and production best practices. Also trying to give back to the community by mentoring aspiring developers and sharing knowledge through structured curriculums and hands-on projects.",
  items: [
    {
      institute: "Aptech Education",
      degree: "Diploma in Software Engineering",
      duration: "Feb 2024",
    },
    {
      institute: "Learnable Internship",
      degree: "Front-end Development Certification",
      duration: "2023 - 2024",
    },
    {
      institute: "Learnable 25 (Genesis Tech Hub)",
      degree: "Front-end Development Mentorship Certification",
      duration: "2024 - 2025",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "My technical skill set is built on a solid foundation of modern web technologies, component-based architecture, and performance optimization. I specialize in building robust applications using:",
  skillList: [
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
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
