import React from 'react'

export default function HeroSect () {
  return (
    <section className='relative bg-zinc-800'>
      <div className='container flex flex-col-reverse lg:flex-row items center gap-12 py-28'>

        <div className='flex flex-1 flex-col items-center'>

          <h2 className='font-serif text-amber-400 text-3xl md:text-4 lg:text-7xl text-center mb-6 '>
            NOMBRE APP
          </h2>

          <p className='font-serif text-stone-50 text-bold text-2xl text-center mb-6 '>
          Bienvenido al sitio web en el que podrás ver diferentes alumnos que <br></br>
          pasaron por tu especialidad que cuentan en qué carrera se encuentran <br></br>
          ahora, por qué la eligieron y <span className='text-amber-400'>podrás ponerte en contacto con ellos <br></br>
          por si necesitas ayuda</span>
          </p>

        </div>

      </div>
      
    </section>
  )
}
