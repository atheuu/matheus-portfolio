import { useState } from "react";

const Alert = ({ message, type, onClose }) => {
  const alertStyles = {
    success: "bg-[#12805C] text-white border-[#41997D]",
    error: "bg-red-500 text-white border-red-400",
    info: "bg-blue-500 text-white border-blue-400",
  };

  const hoverStyles = {
    success: "hover:bg-[#41997D]",
    error: "hover:bg-red-400",
    info: "hover:bg-blue-400",
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-2 py-2 sm:translate-x-0 sm:right-4 sm:left-auto sm:pl-6 sm:pr-3 sm:py-3 rounded-lg shadow-md border ${alertStyles[type]} 
    w-[90%] sm:w-auto text-sm sm:text-base`}
    >
      <div className='flex justify-between items-center'>
        {/* Mensagem */}
        <span className='break-words'>{message}</span>

        {/* Linha e Botão */}
        <div className='flex items-center ml-2 sm:ml-4'>
          <div
            className={`h-6 sm:h-8 border-l mx-2 ${type === "success" ? "border-[#41997D]" : "border-red-400"}`}
          ></div>
          <button
            onClick={onClose}
            className={`text-base sm:text-lg font-bold px-2 py-1 rounded transition ${hoverStyles[type]}`}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
