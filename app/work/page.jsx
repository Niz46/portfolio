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

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "A web-based tool that provides translation and summarization capabilities with a clean, responsive interface. This project enables users to translate text between multiple languages, automatically detect the input language, generate summaries for longer texts, and review previous chats—all while offering a sleek dark mode experience.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "",
    live: "https://ai-text-processor-three.vercel.app/",
    github: "https://github.com/Niz46/ai-text-processor",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 1",
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
    image: "",
    live: "https://ticket-generator-rouge.vercel.app",
    github: "https://github.com/Niz46/ticket-generator",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    description:
      "This e-commerce platform, developed with React, Redux Toolkit, and React Router, provides smooth navigation, product filtering, a dynamic cart, secure checkout, and real-time notifications. Users can create accounts, manage orders, and enjoy a seamless shopping experience across all devices.",
    stack: [
      { name: "React Vite" },
      { name: "Styled Comp" },
      { name: "RTK Query" },
    ],
    image: "",
    live: "https://test-learnable.vercel.app/",
    github: "https://github.com/Niz46/learnable-e-commerce-test",
  },
  {
    num: "04",
    category: "backend",
    title: "project 1",
    description:
      "The Customer Retail Data Clustering project applies K-Means clustering to segment customers based on purchasing behavior. It preprocesses data, visualizes trends, and uses Python libraries like pandas, matplotlib, seaborn, and scikit-learn to reveal insights that enhance marketing, retention, and sales. Excel files are efficiently handled with openpyxl.",
    stack: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "Scikit-learn" },
      { name: "Openpyxl" },
    ],
    image: "",
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
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 px-4 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
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
                {/* project link button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">live link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* project link button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
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
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
