// app/page.tsx
import NavbarHome from '@/components/Navbar';
import {Button} from '@nextui-org/button'; 
import Link from 'next/link';

export default function Page() {
  return (
    <div>
   
     <Link href='/admin'>Open my admin</Link>
    </div>
  )
}