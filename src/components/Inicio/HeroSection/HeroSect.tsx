import React from 'react'
import {Button, Link} from "@nextui-org/react";


export default function HeroSect () {
  return (
    <section className='relative bg-[#ffffff]'>
      <div className='container flex flex-col-reverse lg:flex-row items-center gap-12 py-28'>

        <div className='flex flex-1 flex-col items-center'>
          
          <h2 className='font-serif font-bold text-[#000000] text-center mb-6 md:text-2xl lg:text-8xl'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8529be] to-[#847EFC]">
              SOLVI
            </span>
          </h2>


          <p className='font-serif text-[#000000] text-bold text-2xl mb-6'>
          Descubre cómo nuestros exalumnos han aplicado su experiencia en su carrera <br></br>
          actual y obtén inspiración para la tuya. Conéctate con ellos para recibir <br></br>
          orientación y apoyo personalizado 
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
