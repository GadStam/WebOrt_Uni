import React from 'react'
import {Image, Button} from "@nextui-org/react";
import {Link} from "@nextui-org/react";

export const SoyColaborador = () => {
  return (
    <section className='relative bg-gradient-to-r from-[#8529be] to-[#847EFC] flex items-center justify-center h-screen'>
        <div className='bg-[#ffffff] w-11/12 lg:w-11/12 h-4/5 lg:flex-row gap-12 py-20 flex rounded-3xl'>
            
            <div className='pl-3'>
                <Image
                alt="Card background"
                className="object-cover rounded-xl pl-4"
                src= "/images/ImagenPerfilColaborador.jpg"
                style={{ width: '500px', height: '400px' }}
                />
            </div>


            <div className='pl-7 w-auto pt-10 pr-5'>
                <h1 className='text-5xl font-bold text-center'>
                    Sumate como <span className='text-[#352CE8]'>Colaborador</span>
                </h1>

                <p className='pt-7 text-left text-xl font-normal'>
                    Sumarte como un colaborador significa guiar a estudiantes que están <br></br>
                    considerando estudiar la carrera que ya cursas. Compartirás tu <br></br>
                    experiencia para ayudarlos a explorar tomar decisiones informadas 
                    sobre su futuro academico
                </p>

                <div className='flex justify-center pt-16'>
                    <Button 
                    as={Link} href="#" variant="flat" 
                    className="font-semibold hover:bg-gradient-to-r from-[#847EFC] to-[#352CE8] hover:text-[#ffffff]">
                        Unite
                    </Button>
                </div>
            </div>
        
        </div>

</section>
  )
}
