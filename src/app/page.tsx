// app/page.tsx
import HeroSection from '@/components/Inicio/HeroSection/HeroSect';
import { CardsEspec } from '@/components/Cards/Especialidades/CardsEspec';

export default function Page() {
  return (
    <main>

      <HeroSection/>

      <CardsEspec/>

    </main>
  )
}