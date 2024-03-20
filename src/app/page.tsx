// app/page.tsx
import HeroSection from '@/components/Inicio/HeroSection/HeroSect';
import { SoyEstudiante } from '@/components/ExplicacionInicio/SoyEstudiante';
import { SoyColaborador } from '@/components/ExplicacionInicio/SoyColaborador';
import { Carrousel } from '@/components/Carrousel/CarrouselUni';
import { CardEspecialidades } from '@/components/CardEspecialidades/CardEspecialidades';
import { CardSegunda } from '@/components/CardEspecialidades/CardSegunda';

export default function Page() {
  return (
    <main>

      <HeroSection/>

      <CardSegunda/>

      {/*<CardEspecialidades/>*/}

      <SoyEstudiante/>

      <SoyColaborador/>

      <Carrousel/>
      
    </main>
  )
}