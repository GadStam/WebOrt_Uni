// app/page.tsx
import NavbarHome from '@/components/NavBar/Navbar';
import {Button} from '@nextui-org/button'; 
import Titulo from '../components/Inicio/Titulo/page';


export default function Page() {
  return (
    <div>
      {/*BARRA DE NAVEGACION*/} 
      <NavbarHome/>

      {/*BARRA DE NAVEGACION*/} 
      <Titulo/>
    </div>
  )
}