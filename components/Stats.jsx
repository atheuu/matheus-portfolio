"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: (
      <>
        Anos de <br /> experiência
      </>
    ),
  },
  {
    num: 2,
    text: (
      <>
        Projetos <br /> concluídos
      </>
    ),
  },
  {
    num: 8,
    text: (
      <>
        Tecnologias <br /> dominadas
      </>
    ),
  },
  {
    num: 551,
    text: (
      <>
        Commits de <br /> código
      </>
    ),
  },
];

const Stats = () => {
  return (
    <section className='pt-8 pb-12'>
      <div className='container mx-auto px-4'>
        {/* Layout Responsivo */}
        <div className='grid grid-cols-2 md:grid-cols-4 xl:flex md:justify-around gap-6 max-w-[90vw] mx-auto text-center xl:text-left'>
          {stats.map((item, index) => (
            <div
              key={index}
              className='flex flex-col xl:flex-row items-center xl:items-start justify-center gap-2 sm:gap-4'
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className='text-3xl sm:text-4xl xl:text-6xl font-extrabold text-white'
              />
              <p
                className={`${
                  typeof item.text === "string" && item.text.length < 15 ? "max-w-[120px]" : "max-w-[180px]"
                } text-sm sm:text-base text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
