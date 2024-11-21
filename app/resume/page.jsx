"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

// Dados sobre a educação
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Minha Educação",
  description:
    "Minha formação acadêmica reflete meu compromisso em construir uma carreira sólida na área de tecnologia. Com uma base técnica e foco no desenvolvimento de sistemas, busco unir teoria e prática para entregar soluções eficientes.",
  items: [
    {
      institution: "UnP - Salgado Filho",
      degree: "Análise e Desenvolvimento de Sistemas",
      duration: "2023 - 2025",
    },
    {
      institution: "IFRN - João Câmara",
      degree: "Curso Técnico de Nível Médio em Informática",
      duration: "2019 - 2022",
    },
  ],
};

// Dados sobre a experiência
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Minha Experiência",
  description:
    "Estou em busca da minha primeira oportunidade profissional na área de tecnologia. Tenho dedicado meu tempo ao estudo e desenvolvimento de projetos pessoais.",
  items: [
    {
      company: "Indefinido",
      position: "Desenvolvedor Júnior",
      duration: "Em breve...",
    },
  ],
};

// Dados sobre as habilidades
const skills = {
  title: "Minhas Habilidades",
  description:
    "Tenho experiência em tecnologias essenciais para o desenvolvimento web, tanto no front-end quanto no back-end. Meu foco é criar interfaces modernas e funcionais, bem como integrar sistemas eficientes e escaláveis.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
  ],
};

// Dados sobre mim
const about = {
  title: "Sobre Mim",
  description:
    "Sou apaixonado por tecnologia e desenvolvimento de software. Em formação em Análise e Desenvolvimento de Sistemas e experiência prática em projetos pessoais, busco oportunidades para aplicar minhas habilidades em criar soluções eficientes.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Matheus R. Oliveira",
    },
    {
      fieldName: "Telefone",
      fieldValue: "(84) 9 9181-8081",
    },
    {
      fieldName: "Experiência",
      fieldValue: "1+ Ano",
    },
    {
      fieldName: "Email",
      fieldValue: "matheusliveirr@gmail.com",
    },
    {
      fieldName: "Idade",
      fieldValue: "23 Anos",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponível",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Português",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='min-h-[88vh] flex items-center justify-center py-12'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='about' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='about'>Sobre mim </TabsTrigger>
            <TabsTrigger value='education'>Educação</TabsTrigger>
            <TabsTrigger value='experience'>Experiência</TabsTrigger>
            <TabsTrigger value='skills'>Habilidades</TabsTrigger>
          </TabsList>

          {/* Conteúdo */}
          <div className='min-h-[70vh] w-full'>
            {/* Sobre mim */}
            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 gap-4'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-md'>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Experiência */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[214px] py-7 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start '
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[300px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            {/* ponto */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60 truncate'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Educação */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[214px] py-7 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start '
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[300px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            {/* ponto */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60 truncate'>{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Habilidades */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
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
