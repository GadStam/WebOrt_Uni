
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'
import { FaHandsHelping } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import './global.css'
import { TypeUser } from '@prisma/client';
import CardType from '@/components/card_type/CardType';


const Page = async () => {
  const session = await getServerSession(authOptions);

  
  
  if(session?.user) {
    return (
      <div>
        <CardType mail={session?.user?.email!}/>
      </div>
    );
  }

  return <div>please log in</div>;
}

export default Page;
