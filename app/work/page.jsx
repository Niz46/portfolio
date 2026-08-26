"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/WorkSliderButton";

const projects = [
  {
    num: "01",
    category: "Full-Stack",
    title: "StockMates - Real-time Market Data & AI Summaries",
    description:
      "Full-stack Next.js app providing real-time market data, AI summaries, watchlists, alerts, and an admin dashboard. Event-driven architecture (Inngest) performs asynchronous processing for alerts and digests; BetterAuth manages authentication and sessions; Nodemailer handles stock market analysis emails.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Inngest" },
      { name: "Finnhub" },
      { name: "MongoDB" },
      { name: "BetterAuth" },
    ],
    image: "/assets/work/dashboard.png",
    live: "",
    github: "https://github.com/Niz46/stocks-trade",
  },
  {
    num: "02",
    category: "Full-Stack",
    title: "(UAACAI) International NGO",
    description:
      "MERN stack web application. The website functions as the academic and public relations face of an NGO dedicated to eradicating corruption and human rights abuses in Africa. It achieves this by hosting research journals, organizing international conferences, and publicly honoring leaders who demonstrate integrity.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "PostgreSQL (Prisma)" },
      { name: "Resend Email" },
      { name: "Cloudinary" },
      { name: "MongoDB" },
      { name: "OpenAI" },
    ],
    image: "/assets/work/uaacai.png",
    live: "https://uaacaiinternational.org/",
    github:
      "https://github.com/Niz46/frontend & https://github.com/Niz46/backend",
  },
  {
    num: "03",
    category: "Full-Stack",
    title: "MilesHome - Real Estate Platform",
    description:
      "MERN stack web application is an end-to-end digital marketplace designed to make finding, vetting, and booking rental housing transparent, structured, and friction-free for modern tenants.",
    stack: [
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "PostgreSQL (Prisma ORM)" },
      { name: "ShadCN UI" },
      { name: "AWS S3, Cognito" },
      { name: "Mailgun" },
    ],
    image: "/assets/work/mileshome.png",
    live: "https://mileshomerealestate.com/",
    github: "https://github.com/Niz46/client & https://github.com/Niz46/server",
  },
  {
    num: "04",
    category: "frontend",
    title: "AI Text Processor",
    description:
      "A web-based tool that provides translation and summarization capabilities with a clean, responsive interface. This project enables users to translate text between multiple languages, automatically detect the input language, generate summaries for longer texts, and review previous chats.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/chat.png",
    live: "https://ai-text-processor-three.vercel.app/",
    github: "https://github.com/Niz46/ai-text-processor",
  },
  {
    num: "05",
    category: "frontend",
    title: "Ticket Generator",
    description:
      "Ticket Generator is a modern web application built with Next.js, React, Redux, and Tailwind CSS that allows users to select and book event tickets through a multi-step process. The app guides users through ticket selection, entering their attendee details, and finally previewing and downloading their ticket.",
    stack: [
      { name: "Next.Js" },
      { name: "React" },
      { name: "RTK Query" },
      { name: "Tailwind CSS" },
      { name: "Cloudinary" },
      { name: "Yup" },
    ],
    image: "/assets/work/ticket.png",
    live: "https://ticket-generator-rouge.vercel.app",
    github: "https://github.com/Niz46/ticket-generator",
  },
  {
    num: "06",
    category: "frontend",
    title: "E-Commerce Platform",
    description:
      "This e-commerce platform, developed with React, Redux Toolkit, and React Router, provides smooth navigation, product filtering, a dynamic cart, secure checkout, and real-time notifications. Users can create accounts, manage orders, and enjoy a seamless shopping experience.",
    stack: [
      { name: "React Vite" },
      { name: "Styled Comp" },
      { name: "RTK Query" },
    ],
    image: "/assets/work/platform.png",
    live: "https://test-learnable.vercel.app/",
    github: "https://github.com/Niz46/learnable-e-commerce-test",
  },
  {
    num: "07",
    category: "backend",
    title: "Data Clustering",
    description:
      "The Customer Retail Data Clustering project applies K-Means clustering to segment customers based on purchasing behavior. It preprocesses data, visualizes trends, and uses Python libraries like pandas, matplotlib, seaborn, and scikit-learn to reveal insights that enhance marketing.",
    stack: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "Scikit-learn" },
      { name: "Openpyxl" },
    ],
    image: "/assets/work/customer.png",
    live: "",
    github: "https://github.com/Niz46/customer_segmentation",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get the current slide index
    const currentIndex = swiper.activeIndex;
    // update the project state based on the current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 px-4 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:min-h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] flex-grow">
              {/* outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div className="text-4xl font-bold text-accent/30 leading-none">
                {project.title}
              </div>
              {/* project category */}
              <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={item.name} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Conditionally render live link button */}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* Handle single or multiple GitHub links parsed by '&' */}
                {project.github &&
                  project.github.split("&").map((repoUrl, index) => (
                    <Link
                      key={index}
                      href={repoUrl.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">
                              GitHub Repo{" "}
                              {project.github.includes("&") &&
                                `(${index === 0 ? "Client" : "Server"})`}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={project.num} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-all duration-500"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSliderButton
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
