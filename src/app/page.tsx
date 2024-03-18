// app/page.tsx
import HeroSection from '@/components/Inicio/HeroSection/HeroSect';
import { SoyEstudiante } from '@/components/ExplicacionInicio/SoyEstudiante';
import { SoyColaborador } from '@/components/ExplicacionInicio/SoyColaborador';
import { Carrousel } from '@/components/Carrousel/CarrouselUni';
import { CardEspecialidades } from '@/components/CardEspecialidades/cardEspecialidades';

export default function Page() {
  return (
    <main>

      <HeroSection/>

      <CardEspecialidades/>

      {/*<CardsEspec/>*/}

      <SoyEstudiante/>

      <SoyColaborador/>

      <Carrousel/>
      
    </main>
  )
}