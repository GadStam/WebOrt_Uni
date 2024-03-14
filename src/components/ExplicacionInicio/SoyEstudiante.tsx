import React from 'react'
import {Image, Button} from "@nextui-org/react";
import {Link} from "@nextui-org/react";

export const SoyEstudiante = () => {
  return (
    <section className='relative bg-gradient-to-r from-[#8529be] to-[#847EFC] flex items-center justify-center h-screen'>
        <div className='bg-white w-11/12 lg:w-11/12 h-4/5 lg:flex-row gap-12 py-20 flex rounded-3xl'>

            <div className='pl-10 w-auto'>
                <h1 className='text-5xl font-bold text-center'>
                    Conecta con colaboradores <br></br>
                    para ayudarte a tomar la <br></br>
                    <span className='text-[#8529be]'>mejor eleccion</span>
                </h1>

                <p className='py-12 text-left text-xl font-normal'>
                    Charlar con un colaborador significa conectarte con alguien que estudia <br></br>
                    la carrera universitaria que estás considerando. Te ayudará a explorar tus <br></br>
                    opciones y tomar una decisión informada sobre tu futuro académico.
                </p>

                <div className='flex justify-center'>
                    <Button 
                    as={Link} href="#" variant="flat" 
                    className="font-semibold hover:bg-gradient-to-r from-[#8529be] to-[#847EFC] hover:text-[#ffffff]">
                        Unite
                    </Button>
                </div>
            </div>

            <div className='pt-10 pl-3'>
                <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src= "/images/ImagenConexion.jpg"
                style={{ width: '400px', height: '300px' }}
                />
            </div>
        
        </div>

</section>

  )
}
