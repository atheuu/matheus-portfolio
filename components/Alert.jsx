import { useState } from "react";

const Alert = ({ message, type, onClose }) => {
  const alertStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md ${alertStyles[type]} 
        w-[90%] sm:w-auto text-sm sm:text-base`}
    >
      <div className='flex justify-between items-center'>
        <span className='break-words'>{message}</span>
        <button onClick={onClose} className='ml-2 sm:ml-4 text-base sm:text-lg font-bold'>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Alert;
