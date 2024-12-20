import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Componentes
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full px-4 sm:px-8'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* Conteúdo */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-lg sm:text-xl'>Desenvolvedor de Software</span>
            <h1 className='mb-6 text-3xl sm:text-4xl xl:text-5xl leading-tight'>
              Olá, eu sou o <br />
              <span className='text-accent'>Matheus Oliveira</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              Sou um estudante que está desenvolvendo projetos para ganhar experiência. Estou focado em criar
              experiências digitais elegantes e aprimorar minhas habilidades em diversas tecnologias.
            </p>
            {/* Currículo & Redes Sociais */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant='outline' size='lg' className='uppercase flex items-center gap-2'>
                <Link
                  href='https://drive.google.com/file/d/1QoW6CL8ih5qdkBd36P7Uf2K10JPaYCUW/view?usp=sharing'
                  target='_blank'
                >
                  Download CV
                </Link>
                <FiDownload className='text-xl' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all durtion-500"
                  }
                />
              </div>
            </div>
          </div>
          {/* Foto */}
          <div className='order-1 mb-8 xl:order-none xl:mb-0'>
            <Photo className='w-40 sm:w-52 xl:w-64' />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
