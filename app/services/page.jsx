"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Front-end",
    description:
      "Criação de sites e aplicações web utilizando tecnologias modernas como HTML, CSS, JavaScript, React, e Next.js. Desde o design responsivo até a implementação de funcionalidades interativas, entrego projetos que aliam desempenho e estética.",
    href: "",
  },
  {
    num: "02",
    title: "Back-end",
    description:
      "Desenvolvimento de back-ends robustos com Node.js e MongoDB, garantindo escalabilidade e segurança. Experiência na integração de APIs como Firebase e API de Pix (Efibank), criando soluções completas e prontas para o mercado.",
    href: "",
  },
  {
    num: "03",
    title: "ADS",
    description:
      "Ofereço suporte especializado em todas as etapas de desenvolvimento de sistemas. Ajudo a definir as melhores abordagens técnicas, otimizar processos e garantir que cada decisão seja alinhada com os objetivos de negócio.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                {/* Topo */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                  >
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>
                </div>
                {/* Cabeçalho */}
                <h2 className='font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                  {service.title}
                </h2>
                {/* Descrição */}
                <p className='text-white/60'>{service.description}</p>
                {/* Borda */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
