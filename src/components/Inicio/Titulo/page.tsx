import React from 'react'
import './styles.css'

export default function Titulo () {
  return (
    <section>
            <div>
                <h1><span className='dark:text-red-500'>NOMBRE DE APP</span></h1>

                <p className='descripcion'>
                Bienvenido al sitio web en el que podrás ver diferentes alumnos que pasaron <br></br>
                por tu especialidad que cuentan en qué carrera se encuentran ahora, por qué <br></br>
                la eligieron y podrás ponerte en contacto con ellos por si necesitas ayuda.
                </p>
            </div>
    </section>
  )
}
