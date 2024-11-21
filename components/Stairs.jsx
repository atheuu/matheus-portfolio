import { motion } from "framer-motion";

// Variantes
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Calcula o índice reverso para atraso escalonado
const reverseIndex = (index) => {
  const totalSteps = 6; // Número de degraus
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Renderiza 6 divs animadas, cada uma representando um degrau da escada. 
  Cada div terá a mesma animação definida pelo objeto stairsAnimation. O atraso para
  cada div é calculado dinamicamente com base em seu índice reverso, criando um efeito 
  escalonado com atraso decrescente para cada degrau subsequente. */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
