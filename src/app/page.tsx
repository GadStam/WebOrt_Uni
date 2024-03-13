// app/page.tsx
import HeroSection from '@/components/Inicio/HeroSection/HeroSect';
import { CardsEspec } from '@/components/Cards/Especialidades/CardsEspec';
import { SoyEstudiante } from '@/components/ExplicacionInicio/SoyEstudiante';
import { SoyColaborador } from '@/components/ExplicacionInicio/SoyColaborador';

export default function Page() {
  return (
    <main>

      <HeroSection/>

      <CardsEspec/>

      <SoyEstudiante/>

      <SoyColaborador/>

    </main>
  )
}