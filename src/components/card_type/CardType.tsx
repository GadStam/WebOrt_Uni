"use client";
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'
import { FaHandsHelping } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import { TypeUser } from '@prisma/client';
import { useRouter } from 'next/navigation';

interface Props {
  mail: string;
}

const CardType: React.FC<Props> = ({ mail }) => {
  const router = useRouter();

  const onSubmit = async (type: TypeUser) => {
    const response = await fetch('/api/user_type', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: mail,
        user_type: type
      })
    })
    if (response.ok) {
      router.push('/');
    } else {
      console.error('Error');
    }
  };
  
  
    return (
      <div>
        <div className="cards-container">
          <div className="e-card playing mr-2" onClick={()=>onSubmit(TypeUser.COLLABORATOR)}>
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotop flex flex-col items-center">
            <FaHandsHelping className='text-8xl'/>
              <br/>
              <div className="name">Colaborador</div>
            </div>
          </div>
  
          <div className="e-card playing mr-2" onClick={()=>onSubmit(TypeUser.STUDENT)}>
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotop flex flex-col items-center">
            <FaUsers className='text-8xl'/>
              <br/>
              <div className="name">Estudiante</div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default CardType;
