"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// Lista de projetos
const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "TimeTales",
    description:
      "TimeTales é uma página exclusiva para você e seu par, que mostra a contagem dinâmica do tempo de relacionamento de vocês, um carrossel de fotos e mais alguns detalhes.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }, { name: "Node.Js" }, { name: "MongoDB" }],
    image: "/assets/work/thumb1.png",
    live: "https://timetales.com.br",
    github: "",
  },
  {
    num: "02",
    category: "Minigame",
    title: "Jogo de Luta",
    description: "Um jogo de luta simples para dois jogadores.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb2.png",
    live: "https://jogo-de-luta-fawn.vercel.app",
    github: "",
  },
];

const Work = () => {
  // Estado para o projeto selecionado
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setSelectedProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* Número contornado */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {selectedProject.num}
              </div>
              {/* Categoria */}
              <h2 className='text-[42px] font-bold leading-[1.3] text-white group-hover:text-accent transition-all duration-500 capitalize'>
                Projeto {selectedProject.category}
              </h2>
              {/* Descrição */}
              <p className='text-white/60'>{selectedProject.description}</p>
              {/* Stack */}
              <ul className='flex flex-wrap gap-4'>
                {selectedProject.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index !== selectedProject.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Borda */}
              <div className='border border-white/20'></div>
              {/* Botões */}
              <div className='flex items-center gap-4'>
                {/* Botão visualizar projeto */}
                <Link href={selectedProject.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Visualizar projeto</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Botão repositório no GitHub */}
                <Link href={selectedProject.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repositório no GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      <div className='relative w-full h-full'>
                        <Image
                          src={project.image}
                          priority
                          quality={100}
                          fill
                          alt='imagem do projeto'
                          className='object-cover'
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
