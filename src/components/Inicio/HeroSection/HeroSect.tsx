import React from 'react'
import {Button, Link} from "@nextui-org/react";

export default function HeroSect () {
  return (
    <section className='relative bg-[#ffffff]'>
      <div className='container flex flex-col-reverse lg:flex-row items center gap-12 py-28'>

        <div className='flex flex-1 flex-col items-center'>

          <h2 className='font-serif font-bold text-[#000000] text-3xl md:text-4 lg:text-7xl text-center mb-6 '>
            NOMBRE APP
          </h2>

          <p className='font-serif text-[#000000] text-bold text-2xl text-center mb-6 '>
          Bienvenido al sitio web en el que podrás ver diferentes alumnos que <br></br>
          pasaron por tu especialidad que cuentan en qué carrera se encuentran <br></br>
          ahora, por qué la eligieron y <span className='text-[#000000]'>podrás ponerte en contacto con ellos <br></br>
          por si necesitas ayuda</span>
          </p>

          <div className='flex space-x-16 pt-5'>
            
            <Button as={Link} href='#' className= "border-black text-[#000000] bg-[#ffffff] font-semibold hover:bg-[#F8E5FF] hover:text-[#000000] border-solid border-1  !important">
              Soy estudiante
            </Button>

            <Button as={Link} href='#' variant="flat" className="lg: text-[#ffffff] bg-[#352CE8] font-semibold hover:bg-[#F8E5FF] hover:text-[#000000]">
              Quiero ser colaborador
            </Button>

          </div>


        </div>

      </div>
      
    </section>
  )
}
