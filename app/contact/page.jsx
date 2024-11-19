"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "+55 (84) 9 9181-8081",
  },
  {
    icon: <FaEnvelope />,
    title: "E-mail",
    description: "matheusliveirr@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Endereço",
    description: "Touros, RN",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* Formulário */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Vamos trabalhar juntos</h3>
              <p className='text-white/60'>
                Ficarei feliz em colaborar com você em novos projetos. Preencha o formulário e entrarei em contato assim
                que possivel.
              </p>

              {/* Input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='text' placeholder='Nome' />
                <Input type='text' placeholder='Sobrenome' />
                <Input type='email' placeholder='Endereço de e-mail' />
                <Input type='tel' placeholder='Telefone' />
              </div>
              {/* Select */}
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Selecione um serviço' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecione uma função</SelectLabel>
                    <SelectItem value='frontend-junior'>Dev. Frontend Junior</SelectItem>
                    <SelectItem value='backend-junior'>Dev. Backend Junior</SelectItem>
                    <SelectItem value='freelance'>Dev. Freelance</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea className='h-[200px]' placeholder='Deixe sua mensagem aqui.' />
              {/* Botão */}
              <Button size='md' className='max-w-[200px]'>
                Enviar mensagem
              </Button>
            </form>
          </div>
          {/* Informações */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <div>
              <ul className='flex flex-col gap-10'>
                {info.map((item, index) => {
                  return (
                    <li key={index} className='flex items-center gap-6'>
                      <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                        <div className='text-[28px]'>{item.icon}</div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-white/60'>{item.title}</p>
                        <h3 className='text-xl'>{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
