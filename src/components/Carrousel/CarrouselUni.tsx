import React from 'react'
import Marquee from 'react-fast-marquee';
import {Image} from "@nextui-org/react";
import './slide.css'

export function Carrousel () {
    return (
      <div className="w-full mx-auto">

        <h1 className='text-center py-7 pb-9 text-5xl font-bold space-y-10 text-[#8529be]'>
            Universidades donde estan <br></br>nuestros colaboradores
        </h1>

        <Marquee direction="right" speed={50} delay={0} className='pb-6 w-80 px-10 space-x-20'>

            <div className="w-full ">
                <Image 
                src='images/ImageDitella.png' 
                alt="" 
                style={{ width: '200px', height: '150px' }}
                />
            </div>

            <div className="w-full">
                <Image 
                src='images/ImageUTN.png' 
                alt="" 
                style={{ width: '300px', height: '200px' }}
                />
            </div>

            <div className="w-full">
                <Image 
                src='images/ImageUADE.png' 
                alt="" 
                style={{ width: '200px', height: '150px' }}
                />
            </div>

            <div className="w-full">
                <Image 
                src='images/ImageITBA.png' 
                alt="" 
                style={{ width: '300px', height: '200px' }}
                />
            </div>

            <div className="w-full pl-7 pr-20">
                <Image 
                src='images/ImageSanAndres.png' 
                alt="" 
                style={{ width: '200px', height: '200px' }}
                />
            </div>

            <div className="w-full">
                <Image 
                src='images/ImageUBA.png' 
                alt="" 
                style={{ width: '300px', height: '150px' }}
                />
            </div>

            <div className="w-full">
                <Image 
                src='images/ImageUP2.png' 
                alt="" 
                style={{ width: '300px', height: '150px' }}
                />
            </div>

            <div className="w-full">
                <Image 
                src='images/ImageUB.png' 
                alt="" 
                style={{ width: '220px', height: '130px' }}
                />
            </div>

            <div className="w-full pl-16">
                <Image 
                src='images/ImageUCEMA4.png' 
                alt="" 
                style={{ width: '300px', height: '100px' }}
                />
            </div>


        </Marquee>
    </div>
    );
  }