import React from 'react'
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {AcmeLogo} from "../NavBar/AcmeLogo";
import {Link} from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className='min-h-[200px] md:h-[150px]'>
      <div className='bg-[#F3F3F3] container mx-auto pb-2'>
        <div className='flex flex-col items-center gap-y-4 py-8'>
          <div className='flex gap-1 items-center text-xl md:text-2xl font-bold'>
            <AcmeLogo/>
            <p className="font-bold text-inherit">NOMBRE APP</p>
          </div>

          <div className='flex flex-col gap-4 tracking-wider text-black text-center'>
            <a href='#' className="text-[#000000] hover:text-[#8529be] transition-all">
              Home
            </a>

            <a href='#' className="text-[#000000] hover:text-[#8529be] transition-all">
              Especialidades
            </a>

            <a href='#' className="text-[#000000] hover:text-[#8529be] transition-all">
              Dashboard
            </a>
          </div>

          <div className='flex gap-x-5 items-center pt-3'>
            <Link href='#' target='_blank'>
              <BsFacebook size={25} className='text-black hover:-translate-x-1.5 duration-300 hover:text-[#8529be]' />
            </Link>

            <Link href='#' target='_blank'>
              <BsInstagram size={25} className='text-black hover:-translate-x-1.5 duration-300 hover:text-[#8529be]' />
            </Link>

            <Link href='#' target='_blank'>
              <BsLinkedin size={25} className='text-black hover:-translate-x-1.5 duration-300 hover:text-[#8529be]' />
            </Link>
          </div>
        </div>
        
        <p className='text-black text-center text-sm pb-5'>
          Designed by G&G
        </p>
      </div>
    </footer>
  )
}

export default Footer
