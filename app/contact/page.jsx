"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import Alert from "@/components/Alert";
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
  const [buttonState, setButtonState] = useState("idle"); // 'idle', 'loading', 'success'
  const [alert, setAlert] = useState({ visible: true, message: "Mensagem enviada com sucesso!", type: "success" });

  const showAlert = (message, type) => {
    setAlert({ visible: true, message, type });
    setTimeout(() => setAlert({ visible: false, message: "", type: "" }), 10000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    setButtonState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro desconhecido no envio");
      }

      setButtonState("success");
      showAlert(result.message, "success");
    } catch (error) {
      console.error("Erro no envio:", error.message);
      showAlert(error.message, "error");
      setButtonState("idle");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='py-6'
    >
      <div className='container mx-auto px-4 sm:px-6'>
        {alert.visible && (
          <Alert
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert({ visible: false, message: "", type: "" })}
          />
        )}
        <div className='flex flex-col xl:flex-row gap-6 xl:gap-[30px]'>
          {/* Formulário */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-6 sm:p-8 bg-[#27272c] rounded-xl' onSubmit={handleSubmit}>
              <h3 className='text-3xl text-accent text-center md:text-4xl md:text-left'>Vamos trabalhar juntos</h3>
              <p className='text-white/60 text-center text-base sm:text-left'>
                Ficarei feliz em colaborar em novos projetos. Preencha o formulário e entrarei em contato assim que
                possível.
              </p>

              {/* Input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                <Input name='firstName' type='text' placeholder='Nome' required />
                <Input name='lastName' type='text' placeholder='Sobrenome' required />
                <Input name='email' type='email' placeholder='E-mail' required />
                <Input name='phone' type='tel' placeholder='Telefone' />
              </div>

              {/* Select */}
              <Select name='service' aria-label='Selecione um serviço'>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Selecione um serviço' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecione um serviço</SelectLabel>
                    <SelectItem value='frontend'>Dev. Frontend</SelectItem>
                    <SelectItem value='backend'>Dev. Backend</SelectItem>
                    <SelectItem value='freelance'>Dev. Freelance</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Textarea */}
              <Textarea
                name='message'
                className='min-h-[150px] h-[200px] w-full'
                placeholder='Deixe sua mensagem aqui.'
                required
              />

              {/* Botão */}
              <div className='flex justify-center sm:justify-start'>
                <Button
                  size='md'
                  className={`w-full sm:max-w-[200px] ${
                    buttonState === "loading"
                      ? "bg-gray-500 hover:bg-gray-600 cursor-not-allowed"
                      : buttonState === "success"
                      ? "hover:bg-accent cursor-not-allowed"
                      : ""
                  }`}
                  type='submit'
                  disabled={buttonState === "loading" || buttonState === "success"}
                >
                  {buttonState === "loading"
                    ? "Enviando..."
                    : buttonState === "success"
                    ? "Mensagem enviada!"
                    : "Enviar mensagem"}
                </Button>
              </div>
            </form>
          </div>

          {/* Informações */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <div>
              <ul className='flex flex-col gap-10'>
                {info.map((item, index) => {
                  return (
                    <li key={index} className='flex items-center gap-4 sm:gap-6'>
                      <div className='w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                        <div className='text-[20px] sm:text-[28px]'>{item.icon}</div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-white/60 text-sm sm:text-base'>{item.title}</p>
                        <h3 className='text-xs sm:text-sm md:text-base'>{item.description}</h3>
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
